const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledCreate = require('./build/CreateLottery.json');

const provider = new HDWalletProvider(
    'garbage damp post action agent wheat judge lake excess piano hotel engine',
    'https://rinkeby.infura.io/v3/3b11a2cb249f4b0097a2e77fe06787c3'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0]);
    
    const result = await new web3.eth.Contract(compiledCreate.abi)
    .deploy({
      data: '0x' + compiledCreate.evm.bytecode.object
      
    })
    .send( { gas: '3000000', from: accounts[0] });

    console.log('resultado',result.options.address)
};
deploy();

