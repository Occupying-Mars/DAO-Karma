import React, { useEffect, useState } from 'react';
import ArDB from 'ardb';
import Arweave from 'arweave';
 

const arweave = Arweave.init({});
const ardb = new ArDB(arweave);
const wallet = (process.env.ARWEAVE_WALLET)



const rew = () => {
   
    const reward= async (event)=>{
        event.preventDefault();
        const txs = await ardb.search('transactions').tag(address, 'Dao_Karma').limit(1).find();
        const karmas = event.target.karma.value+ txs
        const address = event.target.address
        const transaction = await arweave.createTransaction({data: karmas}, wallet);
        
        transaction.addTag('App-Name', DAO_Karma);
        transaction.addTag('Address', address)

        await arweave.transactions.sign(transaction, wallet);
        await arweave.transactions.post(transaction);
        console.log('Transaction signed successfully')
    }
    
    return(
        <form onSubmit={reward}>
            <label for="Wallet-address">Wallet-address:</label>
            <input type="text" name="wallet-address" id="address" />
            
            <label for="Karma">Kamra to gift:</label>
            <input type="text" name="karma" id="karma" />
            <button type="submit">Submit</button>
        </form>
    )

}

export default rew