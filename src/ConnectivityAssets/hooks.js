import tokenAbi from "./tokenAbi.json";
import preSaleAbi from "./preSaleAbi.json";
import usdtAbi from "./usdtAbi.json";
import { tokenAddress, preSaleAddress, usdtAddress } from "./environment";

import { readContract, writeContract } from "wagmi/actions";
import { waitForTransaction } from "@wagmi/core";

const chainId = 56;

export const tokenReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    chainId,
    args,
  });
  return data;
};

export const preSaleReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName,
    chainId,
    args,
  });
  return data;
};

export const usdtReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: usdtAddress,
    abi: usdtAbi,
    functionName,
    chainId,
    args,
  });
  return data;
};

/// write functions
export const tokenWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    chainId,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const preSaleWriteFunction = async (functionName, args, value) => {
  const { hash } = await writeContract({
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName,
    chainId,
    args,
    value,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const usdtWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: usdtAddress,
    abi: usdtAbi,
    functionName,
    chainId,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};
