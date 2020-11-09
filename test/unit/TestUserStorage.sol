pragma solidity >=0.4.24 <0.5.10;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
  UserStorage userStorage;

  constructor() public {
    userStorage = new UserStorage();
    userStorage.setControllerAddr(address(this));
  }

  function testCreateFirstUser() public {
    uint _expectedId = 1;

    Assert.equal(userStorage.createUser(
      address(0),
      "tristan",
      "Tristan",
      "Edwards",
      "I like building stuff",
      "example@example.com"
    ), _expectedId, "Should create user with ID 1");
  }

}
