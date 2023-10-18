// import next js files
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// import components
import Logo from './Logo';

import WalletConnectBtn from './ConnectWallet/WalletConnectBtn';
import ConnectedWalletMenu from './ConnectWallet/ConnectedWalletMenu';
// import style files
import classes from '@styles/compenentsStyle/common/Navbar/Navbar.module.css';

// import components
import ChainLogos from './ChainLogos';
import SearchBar from './SearchBar';
import SwapDropDownMenu from './SwapDropDownMenu';
import StakingDropDownMenu from './StakingDropDownMenu';
import ConnectModal from './ConnectWallet/ConnectModal';
import { useAccount } from 'wagmi';

// import Web3Context from 'src/web3/Web3-context';

const Navbar = () => {
  const { address, isConnected } = useAccount();
  // State variables
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isBtnClikced, setIsBtnClicked] = useState(false);

  // Handler Functions
  const connectWalletClikedHandler = () => {
    setIsBtnClicked(!isBtnClikced);
  };

  const toogleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <React.Fragment>
      {isBtnClikced && <ConnectModal classes={classes} onClick={connectWalletClikedHandler} />}
      <nav className={classes.navbar}>
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className={classes.menu} onClick={toogleMenu}>
              <span className={classes.bar}></span>
              <span className={classes.bar}></span>
              <span className={classes.bar}></span>
            </div>
            <ul className={classes['main-list']} style={{marginLeft: "79px"}}>
              <Logo className={classes.logo} />
              <li className="gap-7">
                <ChainLogos />
                <div className={`${classes.links} ${menuIsOpen ? classes.active : ''}`}>
                  <ul
                    className="flex h-full items-center gap-3 rounded-[99px] border-[3px] border-[#5D3068] px-10 py-[17.5px]"
                    style={{
                      border: '3px solid #5d3068',
                      backgroundImage:
                        'linear-gradient(107.18deg, #5D3068 1.11%, rgba(199, 173, 255, 0.2) 44.61%, #5D3068 97.47%), linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))',
                      // borderImageSource:
                      //   'linear-gradient(107.18deg, #5D3068 1.11%, rgba(199, 173, 255, 0.2) 44.61%, #5D3068 97.47%)',
                    }}
                  >
                    <li className="!m-0">
                      <Link
                        href="/explore"
                        className="text-[16px] uppercase leading-[19.2px] hover:text-secondary"
                      >
                        Explore
                      </Link>
                    </li>
                    <li className="!m-0 uppercase">
                      <StakingDropDownMenu />
                    </li>

                    <li className="!m-0 uppercase">
                      <SwapDropDownMenu />
                    </li>
                  </ul>
                </div>
                <SearchBar classes={classes} />
                {isConnected ? (
                  <ConnectedWalletMenu address={address} />
                ) : (
                  <WalletConnectBtn classes={classes} onClick={connectWalletClikedHandler} />
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
