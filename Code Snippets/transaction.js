
const api_key = '42530830-83f7-4236-8093-30aa835d9517';

const host_url_1 = 'https://api.trongrid.io';
const host_url_2 = 'https://api.shasta.trongrid.io';

const TronWeb = require('tronweb');
const tronWeb = new TronWeb({
    fullHost: host_url_2,
    headers: { "TRON-PRO-API-KEY": api_key },
    privateKey: 'AD71C52E0FC0AB0DFB13B3B911624D4C1AB7BDEFAD93F36B6EF97DC955577509',
});
//tronWeb.setPrivateKey('42111830-fabc-4236-aaaa-0123835ddd17');

const to = tronWeb.address.toHex('TCyKydExSAApBFLYVyWs7G5Ye3z9F4AJpG');
const from = tronWeb.address.toHex('TUSuCUcCDARiKkoirixEsnvkZ7uiSaeqmd');

console.log(to);
// before transfer
tronWeb.trx.getBalance(to).then(result => console.log(result));
tronWeb.trx.getBalance(from).then(result => console.log(result));

//tronWeb.trx.sendTransaction(to, 1000, from).then(result => console.log(result));
//tronWeb.trx.sendTransaction(to, 10).then(result => console.log(result));

// after transfer
tronWeb.trx.getBalance(to).then(result => console.log(result));
tronWeb.trx.getBalance(from).then(result => console.log(result));

