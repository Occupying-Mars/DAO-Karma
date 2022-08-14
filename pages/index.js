import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import ArDB from 'ardb';
import Arweave from 'arweave';


// Constants
const TWITTER_HANDLE = 'OccupyingM';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const arweave = Arweave.init({});
const ardb = new ArDB(arweave);


const App = () => {
  // State
  
  const [walletAddress, setWalletAddress] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Keys:',
            response.publicKey.toString()
          );

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
      
    }
  };
  const renderNotConnectedContainer = () => (
    <button
      className={styles.connectwalletbutton}
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  // UseEffects
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className={styles.App}>
      {/* This was solely added for some styling fanciness */}
      <div className={styles.walletAddress}> <div className={styles.authedcontainer}>  <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.header}> DAO Karma ✨</p>
          <p className={styles.subtext}>
            earn Karma=earn Respect 
          </p>
          {/* Add the condition to show this only if we don't have a wallet address */}
         {!walletAddress && renderNotConnectedContainer()}
          </div> </div>
        </div>
        <div className={styles.footer}>
          <a
            className={styles.footertext}
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App; 