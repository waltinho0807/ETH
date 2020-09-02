pragma solidity ^0.5.16;

import './Lottery.sol';

contract CreateLottery {

  Lottery[] public Games;
  address public manager;
  uint public priceEntry;
  address public owner = msg.sender;
  
  event EtherWithdrawn(address user, uint amount);
  
  modifier restrict() {
        require(msg.sender == owner);
        _;
    }
  
  

    function createGame(uint8 minimum, uint entry) public payable {
        require(msg.value == .01 ether);
        manager = msg.sender;
        priceEntry = entry;
        Lottery instanceLottery =  new Lottery(minimum, manager, entry);
        Games.push(instanceLottery);
    }
    
    function getBalance() public view returns (uint){
        return address(this).balance;
    } 
    
    function getDeployedCampaigns() public view returns (Lottery[] memory) {
        return Games;
    }
    
     function withdrawETH() public restrict {
        //require(_etherBalances[msg.sender] > 0);
        uint amount = address(this).balance;
       // _etherBalances[msg.sender] = 0;
        msg.sender.transfer(amount);
        emit EtherWithdrawn(owner, amount);
    }
    
}