import React, { useEffect, useState } from 'react';
import ArDB from 'ardb';
import Arweave from 'arweave';


const arweave = Arweave.init({});
const ardb = new ArDB(arweave);
const key = {
    "kty":"RSA",
    "n":"p8NpVlTucMjDbTtHVuk8EdQ9S2Qdl0KUJ_T_qK07glCrwfrtl_te2E3BntX1n4YPmeeWYJg-OuRWvCs074XpHyuXplNTSxB_pYBoZ1KgtTtanumpEGF9ZWc2_LauCb8aqPT5FD3yUx_Kq-Am9IEzYENbpqps7hjLAH4D6rmkyaH3KLOeYat36iMrMHbZPBjObc1wwsBMJgOYAZmU5KifxopRR0AdTJ8In5-isLT_yHoLYGimbgSc7CjvR281M9JhqMgh3LeoFoJUfhYBQcSURk4D0GbZlgjO-tNt-TMCnPivtg-ljKJT4Is7VEYuD_AcfkKPEACz9FkcHH5cO8QNDI2qobBx2wD8YKjxfhNtIeJtAe7zz19fUWVS5qWK3ncl3yxpyLoR9CK5c5qMtz_rHFRuDqfcZZsbfWzRRWAd_V-Kbet2tN8AJy__Obzmiqx3CJwKNp5VR-Mc7KQGBMXdxcaEKfdZlk5ziIHjkB17gaTXmPLgKlFGqGFcp82UFVZOsezl5OwnmYQSS62ZxyHLBdKCjKF9agoWzTZCLrlrfqRogz3jLbZhfvQA8idKtAan0znIZ_0Jr0_81k2dMh3kKNP14xrqpvotnBQ_vmjB2d02Fu5qFfdp-kojZybR27ypsxdkB61ZZtmhPVxkf8wYxSVPgUQqwhxJDZ984FJvhms",
    "e":"AQAB",
    "d":"KphzJnhqEjjnZdSnSGnv1pcM-Rdya_V7qKmMQEe71FqnQZl0uiIY8tLLVoj81IQ1cd5bUCtXoZxYaW6PAkH97uwilRiTDXwi7OKtn45bP6jSWYb6Zi5aqGSMkZ3QkqjzG_MXSwxvequXygwf1_T2FnsDyk17Wvjwki9szyxTqt504uC4VhQzXj-Pt751aczinP6MouYwb3Z6Ie3c4DHwX3i_KlgdGFdI2T6vEC7kwwI54UCxAT4qmcvK9VhHKeFA6pnl_ySiiRSOX3U23HwNKcylK0Tx-iZCZ21Hfv50q2Z5NsDCR_LvWRQA_GTVTTaqBWTg7i8_gcseWB29TW954EzL0gLkFlzfkzeYJ6PeXj4yp6sve9RmozFg5TJJ67ukNsz1DugbNnfda8aWjLPLTnlbLjmg42jKJzTgwaql08UECRj2FfqyUCBS6ZO2oKm0NVV60agsEhTaSTqlnsGOHrmvlX7uVKJ12vH9qN1m4mx7mF6hh9grmT0GT11EC4ISVWQ_LUF7Wb4w04IvJfS-JETOmMjeUbHcnT3zRZ4wx2bRgWgrFFsugeHiNzSPSsbNCXc2aoI-hrSngkskHng6s1xEol1H_Vgtx8MkA67X-vkSh1Xx8SJPtntRibM6k4FMkPyQ9a89l33xH_Y5lHNiUrgPcQWnSv_zFD_s6HOviAE",
    "p":"1lhfGgH97-q8FWOD84Tf94_7_dnUF_bLww74YmnZ0wJ1R5p-WB1dDiXjtr8yJ8RdJL05czmZ4Saq0NYBVKJbrynEm6_aNhO2XB3ixv8y6-vJvpT7h-yiGsjREOklNIiMhlobu28LzsWSC4A1ZkpUKa3b1Bbc1AqJcPcoRWtWmNm974ByEr74OPnlDoLU_MUvosa0iWLOcZzFui1QKM-0umkwST7Fld_y3SdYmkmblNn_3tkvcuvRGYF4wA2Mx-ZA41s_VIxHrm7b-duQfF_G-U4dIBAI7HH22Vx9TO5cZ0vZkWOcSTAZSo2rwSJosJCFu1Iq7GEJCD0tMhnaewx8lw",
    "q":"yF2Z_flSOJu72ceWvVpwvU-kAXvXxeS2fsGdOob0zT8xA6SF_tiM8NMDhT50Ml3Zsv0GHcHbVNMZhDptOSb6oT37kr5BS0HvjmsIlOp5t1x9uz19gMg-YjsHj3Asv-dvSM5At-s5gIC12XSqDZiQoRnpBkPJpcwZZBiB8DrTUqjG16oaOUa7-jG6g3rCVLauwaiuYRoy-jnL_8QTdygCqKEqrwjkF5m3KQCZM03n28au2-u_i3RgYRgO_Tdf-gkNAHsnMQpFM3NtoJwyjmtG0AGRzHxnUN0MIeJnzv36eU3QhXq5LDvoNlQX5LYcUtAH3qIe4UKTDycimLErvWr7TQ",
    "dp":"hjjafL_Ik4crdj1V8JVBZpX8V28jWEpMOH5UXdQo-fCtHkSJX4YrsmNZoCNENhDJvurbYeMtEAeVqaaJOMVeomaGXnOVMo3PgQmZ68D80y1YrQZAKFKvBBTCjlNg3--uB6e_e_TCsR2ZIaiMR9y9rUfYw4v5hrJ-dIXg6u-XT6nyPVryk_iQGaWqoRaeZxbXiJfjj7CW1CA21Snw6019v8mE2ij7s6mEPKaZ3iu_yEtm5dac1tsCmnUv9xvFD5yI_5YxJzGc5Yc4KtMqPCgBwjX_GQfRfrayvFQlhpowtOKTgG6e_FmpTL1AU3XHluE5TR7cEB-Hd2hPt_LmlG0ySw",
    "dq":"KiwZV218stGEjmgGAEDi7dWvbWiFl-91weQ6lbEGIZUlWeDtGyC1OZMQcKEej-NVCOlcujKtWYM9Iamyh47-vaVwKAjHcXGlXFKG8eEQUVm0VQ6yNcLv7nkCNFyl7pZlw-s1kACAj92HaQe3KzlrZ50ugNUPwkfdKEZIQyn-hK1lfMsezeNneVeyLC5QbMgurDA209VR2X0ExQaeGjxfouKZO1IhwB3ogUbQ-A1zubxt3XgXTuDl0EniDcXz-4qgI_PH4fiJbDTlZCK8OWG2-9z4tROSI2EDRraCpvyqFZIdS5rzEq5hR94XUVpLR9rlbSSuXzdGALB6Ba10yV-VGQ",
    "qi":"O48TUi7dBbKcmkqHfyf6Ol3jjFBtscbzMhtksrHQ0mjJjjRZs7SYBGSheMazNurJttPMfxSMMIk-JLIWfmt2glm3wB-wRdN7V6re4Q6tLyfCj-rvFbXj4oxm_MZMGgpcZYbR-QvR7l3nrCsPmkck94SMSDn6bVP0vQziNUgobgTQnCk7AgjCRv2PIYSR8ka8yt3-qGbKzWM6y-y-HA11m0QY925RHCt0ScriiHkDzRC2Qu2dLIr8YXJJ7HN8D2JqhKstIncEF9SAsedICqVOmeOUy0MT_6eqhhzW3eMnPwX-T5uK0_hNKQWPumlS5-etG_IhEGfHb0Xr7yjdDH_SIw"
}


const rew = () => {
   
    const reward= async (event)=>{
        event.preventDefault();
        //const txs = await ardb.search('transactions').tag(address, 'Dao_Karma').limit(1).find();
        const karmas = event.target.karma.value
        console.log(karmas);

        const address = event.target.addresso
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
        console.log(new_txs)
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