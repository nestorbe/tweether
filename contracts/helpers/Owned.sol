pragma solidity >=0.4.24 <0.5.10;

contract Owned {
  address public ownerAddr;

  constructor() public {
    ownerAddr = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == ownerAddr);
    _;
  }

  function transferOwnership(address _newOwner) public onlyOwner {
    // The new address cannot be null:
    require(_newOwner != address(0));

    ownerAddr = _newOwner;
  }
}
