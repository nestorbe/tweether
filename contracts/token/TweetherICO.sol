pragma solidity >=0.4.24 <0.5.10;

import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "./TweetherToken.sol";

contract TweetherICO {
  using SafeMath for uint256;

  TweetherToken token;
  uint256 public RATE = 1000;

  function TweetherICO(address _tokenAddr) public {
    token = TweetherToken(_tokenAddr);
  }

  function _getTokenAmount(uint256 _weiAmount) internal view returns (uint256) {
    return _weiAmount.div(10 ** 18).mul(RATE);
  }

  function () public payable {
    uint256 _amount = _getTokenAmount(msg.value);

    token.transfer(msg.sender, _amount);
  }

}
