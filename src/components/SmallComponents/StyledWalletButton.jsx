import { useWeb3Modal } from "@web3modal/wagmi/react";
import { StyledButton } from "./AppComponents";
import { useContext } from "react";
import { AppContext } from "../../utils";

export const ExampleButton = ({ width }) => {
  const { account } = useContext(AppContext);
  const { open } = useWeb3Modal();

  return (
    <StyledButton
      width={width ? width : "180px"}
      onClick={async () => await open()}
    >
      {account
        ? account.slice(0, 4) + "..." + account.slice(-4)
        : "Connect Wallet"}
    </StyledButton>
  );
};
