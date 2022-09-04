import {useState,useEffect} from 'react'
import {Navbar,Nav,Container,Row,Col,Form} from 'react-bootstrap'
import { Web3ReactProvider } from "@web3-react/core";
import ConnectWallet from './components/ConnectWallet';
import { Web3Provider } from "@ethersproject/providers";
import Info from './components/Info';


function App() {
function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  }


  


  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* navbar to connect your wallet */}
      <Navbar className="navbar-color" expand="lg">
        <Container>
          <Navbar.Brand href="#home">First Dapp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <ConnectWallet />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Section to display all the infos(balance,account,...) */}
    <Info />
      
    </Web3ReactProvider>
  );
}
export default App;


