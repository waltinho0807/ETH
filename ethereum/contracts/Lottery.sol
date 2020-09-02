pragma solidity ^0.5.16;


//import "./oraclizeAPI.sol";

contract Lottery {
    address public manager;
    address payable[] public players;
    uint8 public countPlayers;
    mapping (address => uint) internal _etherBalances;
    uint public entryValue;
    uint8 public controlWithdraw;
    uint public restEntry;
    uint public premium;
     
     event EtherWithdrawn(address user, uint amount);

    constructor(uint8 maxPlayers, address create, uint valor ) public {
        manager = create;
        entryValue = valor;
        countPlayers = maxPlayers;
    }

    function enter() public payable {
        require(msg.value > entryValue);
        require(players.length < countPlayers);
        
        controlWithdraw ++; 
        players.push(msg.sender);
    }

    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(abi.encodePacked(block.difficulty, now, players))
            );
    }

    function pickWinner() public restrict {
        uint256 index = random() % players.length;
        players[index].transfer((address(this).balance * 80) / 100);
       
       
    }

    modifier restrict() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
    
    function getCountPlayers() public view returns (uint) {
        return countPlayers;
    }
    
    function getRestPlayers() public  returns (uint) {
        restEntry =  players.length - countPlayers;
        return restEntry;
    }
    
      function getPremium() public  returns (uint) {
        premium = countPlayers * entryValue;
        return restEntry;
    }
    
    function withdrawETH() public restrict {
        require(controlWithdraw == countPlayers);
        uint amount = address(this).balance;
       // _etherBalances[msg.sender] = 0;
        msg.sender.transfer(amount);
        emit EtherWithdrawn(manager, amount);
    }
}