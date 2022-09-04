import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col, Form } from "react-bootstrap";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";


function Info() {
     const { active, account, activate, chainId, library } = useWeb3React();

     const balance = useBalance();
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row className="d-flex justify-content-between">
        <h4 className="text-color">
          Hi,let's learn how to interact with your wallet using this dapp
        </h4>
        <Col className="info-container d-flex align-items-center justify-content-center flex-column">
          <Row>Account</Row>
          <Row className="text-color">{account}</Row>
        </Col>
        <Col className="info-container d-flex align-items-center justify-content-center flex-column">
          <Row>Balance</Row>
          <Row className="text-color">{balance}</Row>
        </Col>
        <Col className="info-container d-flex align-items-center justify-content-center flex-column">
          <Row>Network</Row>
          <Row className="text-color">
            {chainId === 1 ? "Mainnet" : "Testnet"}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Info



function useBalance() {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (account) {
      library.getBalance(account).then((val) => setBalance(val));
    }
  }, [account, library]);

  return balance ? `${formatEther(balance)} ETH` : null;
}
