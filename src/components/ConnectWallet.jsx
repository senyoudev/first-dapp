import React from 'react'
import { useWeb3React } from "@web3-react/core";
import { injected } from "../hook/connector";


function ConnectWallet() {
  const {  activate,active } = useWeb3React();


  const connect = async () => {
    await activate(injected)
  };
  return (
    <button onClick={connect} className="btn-design">
      {!active ? 'Connect your wallet' : 'Connected'}
    </button>
  );
}

export default ConnectWallet