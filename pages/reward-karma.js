import React, { useEffect, useState } from 'react';
import ArDB from 'ardb';
import Arweave from 'arweave';


const arweave = Arweave.init({});
const ardb = new ArDB(arweave);
const key = (process.env.ARWEAVE_WALLET)


const rew = () => {
   
    const reward= async (event)=>{
        event.preventDefault();
        const address = event.target.addresso
        const txs = await ardb.search('transactions').tag('Address', address).limit(1).find();
        console.log(txs)
        const txe = new_txs.Transaction.map(x=>x.id)
        console.log(txe)
        const nos = arweave.transactions.get(txd)
        console.log(nos)
        const karmas =event.target.karma.value+nos
        console.log(karmas);
        const transaction = await arweave.createTransaction({data: karmas}, key);
        console.log( transaction)
        const DAO_Karma = "DAO_Karmas"
        
        transaction.addTag('App-Name', DAO_Karma);
        transaction.addTag('Address', address)

        await arweave.transactions.sign(transaction, key);
        const response = await arweave.transactions.post(transaction);
        console.log( response)
        console.log('Transaction signed successfully')

        const new_txs=await ardb.search('transactions').tag('Address', address).limit(1).find();
        const txd = new_txs.Transaction.map(x=>x.id)
        console.log(txd)
        const no = arweave.transactions.get(txd)
        console.log(no)
    }
    
    return(
        <form onSubmit={reward}>
            <label for="Wallet-address">Wallet-address:</label>
            <input type="text" name="wallet-address" id="addresso" />
            
            <label for="Karma">Kamra to gift:</label>
            <input type="text" name="karma" id="karma" />
            <button type="submit">Submit</button>
        </form>
    )

}

export default rew