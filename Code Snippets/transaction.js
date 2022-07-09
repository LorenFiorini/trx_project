
api_key = '42530830-83f7-4236-8093-30aa835d9517';

host_url_1 = 'https://api.trongrid.io';
host_url_2 = 'https://api.shasta.trongrid.io';

const TronWeb = require('tronweb');
const tronWeb = new TronWeb({
    fullHost: host_url_2,
    headers: { "TRON-PRO-API-KEY": api_key },
    //privateKey: 'your private key'
});

to = tronWeb.address.toHex('TCyKydExSAApBFLYVyWs7G5Ye3z9F4AJpG');
from = tronWeb.address.toHex('TUSuCUcCDARiKkoirixEsnvkZ7uiSaeqmd');

// before transfer
tronWeb.trx.getBalance(to).then(result => console.log(result));
tronWeb.trx.getBalance(from).then(result => console.log(result));

//tronWeb.trx.sendTransaction(to, 1000, from).then(result => console.log(result));
tronWeb.trx.sendTransaction(to, 10, tronWeb.defaultPrivateKey).then(result => console.log(result));

// after transfer
tronWeb.trx.getBalance(to).then(result => console.log(result));
tronWeb.trx.getBalance(from).then(result => console.log(result));

