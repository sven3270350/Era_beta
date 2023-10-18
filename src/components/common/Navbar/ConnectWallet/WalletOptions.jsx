import React from 'react';
import classes from '@styles/compenentsStyle/common/Navbar/ConnectWallet/WalletOptions.module.css';
import { useConnect } from 'wagmi'

const WalletOptions = (props) => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  const Zeta = () => {
    return (
      <div>
        <ul className={classes.wallets}>
        {connectors.map((connector) => (
          <li
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            <img
            src={`/assets/walletIcons/${connector.name}.svg`}
            className={classes['wallet-icon']}
            alt={connector.name}
          />
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </li>
        ))}
        
        {error && <div className='ms-4'>{error.message}</div>}
        </ul>
  
      </div>
    );
  };

  return (
    <React.Fragment>
      <div>{props.id === 'ZETA' && <Zeta />}</div>
      {/* Add other chain options */}
    </React.Fragment>
  );
}

export default WalletOptions;
