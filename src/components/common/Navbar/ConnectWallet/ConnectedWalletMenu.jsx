import React from 'react';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { BiChevronUp } from 'react-icons/bi';
import { useDisconnect } from 'wagmi';

import classes from '@styles/compenentsStyle/common/Navbar/ConnectWallet/ConnectedWallet.module.css';

const ConnectedWalletMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { disconnect } = useDisconnect()

  const showAcc = `${props.address.slice(0, 7)}...${props.address.slice(
    props.address.length - 3,
    props.address.length
  )}`;

  const WOIcon = ({ src }) => {
    return <img src={src} alt="icon" className={classes.icon} />;
  };

  const WalletMenu = () => {
    return (
      <div className={classes['menu-area']}>
        <ul>
          <li>
            <WOIcon src={'/assets/connectBtns/myItems.png'} />
            My Items
          </li>
          <li>
            <WOIcon src={'/assets/connectBtns/myRewards.png'} />
            My Rewards
          </li>
          <li>
            <WOIcon src={'/assets/connectBtns/settings.png'} />
            Settings
          </li>

          <li onClick={disconnect}>
            <WOIcon src={'/assets/connectBtns/disruption.png'} />
            Disconnect Wallet
          </li>
        </ul>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={classes['btn-area']}>
        <button
          className={`btn btn-sm ${classes['wallet-menu-btn']}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {showAcc}
          {isOpen ? (
            <BiChevronUp className={classes.arrow} />
          ) : (
            <BiChevronDown className={classes.arrow} />
          )}
        </button>
        {isOpen && <WalletMenu />}
      </div>
    </React.Fragment>
  );
};

export default ConnectedWalletMenu;
