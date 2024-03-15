import { useContext, useState, useEffect } from "react";
import { useNetwork } from "wagmi";
import { AppContext } from "./utils";
import NetworkSwitch from "./NetworkSwitch";
import { Route, Routes } from "react-router-dom";
import {
  AddressSection,
  Community,
  HeroSection,
  Introduction,
  Roadmap,
  Toknomics,
} from "./pages";
import Footer from "./components/Footer";
function App() {
  const { account } = useContext(AppContext);
  const [openNetworkSwitch, setOpenNetworkSwitch] = useState(false);
  const { chain } = useNetwork();

  useEffect(() => {
    if (account && chain && chain?.id !== 56) {
      setOpenNetworkSwitch(true);
    }
  }, [chain, account]);
  return (
    <>
      <NetworkSwitch open={openNetworkSwitch} setOpen={setOpenNetworkSwitch} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AddressSection />
              <Introduction />
              <Roadmap />
              <Toknomics />
              <Community />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
