import React from 'react';
import Image from 'next/image';

// import Chain Logos
import polyLogo from 'public/assets/chainLogo/poly.svg';
import suiLogo from 'public/assets/chainLogo/sui.svg';
import zetaLogo from 'public/assets/chainLogo/zeta.svg';
import btcLogo from 'public/assets/chainLogo/btc.svg';

// import style files
import classes from '@styles/compenentsStyle/common/Navbar/Navbar.module.css';

const ChainLogos = () => {
  return (
    <React.Fragment>
      {/* border-radius: 1000px;
border: 3px solid #5D3068;
background: rgba(255, 255, 255, 0.04);
box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset, 0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
backdrop-filter: blur(30px); */}
      <div
        className="flex items-center gap-3 rounded-[1000px] px-6 py-[8px]"
        style={{
          border: '3px solid #5d3068',
          backgroundImage:
            'linear-gradient(107.18deg, #5D3068 1.11%, rgba(199, 173, 255, 0.2) 44.61%, #5D3068 97.47%), linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))',
          // borderImageSource:
          //   'linear-gradient(107.18deg, #5D3068 1.11%, rgba(199, 173, 255, 0.2) 44.61%, #5D3068 97.47%)',
        }}
      >
        <Image className={classes['chain-logo']} src={polyLogo} alt="poly" />
        <Image className={classes['chain-logo']} src={zetaLogo} alt="zeta" />
        <Image className={classes['chain-logo']} src={suiLogo} alt="sui" />
        <Image className={classes['chain-logo']} src={btcLogo} alt="btc" />
      </div>
    </React.Fragment>
  );
};

export default ChainLogos;
