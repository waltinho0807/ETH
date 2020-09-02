pragma solidity ^0.5.16;



contract Lottery is usingOraclize {
    address public manager;
    address payable[]  public players;
    uint8 public countPlayers;
    
    constructor () public {
        manager = msg.sender;
        
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
        countPlayers++;
        
        players.push(msg.sender);
    }
    
    function random() private view returns (uint){
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }
    
    function pickWinner() public restrict {
        uint index = random() % players.length;
        players[index].transfer(address(this).balance * 80/100 );
        //msg.sender.tranfer(address(this).balance);
        players = new address payable [](0);
        countPlayers = 0;
    }
    
    modifier restrict() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view  returns(address payable[] memory){
        return players;
    }


}