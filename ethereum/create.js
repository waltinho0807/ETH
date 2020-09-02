import web3 from './web3';
import CreateLottery from './build/CreateLottery.json';

const instace = new web3.eth.Contract(
    CreateLottery.abi,
    '0x636f3E28b0778D12FB974bE50f24261ecD10dEe4'
);

export default instace;