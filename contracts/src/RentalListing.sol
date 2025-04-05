// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract RentalListing {
    using SafeERC20 for IERC20;


    address public propertyOwner;
    string public propertyName;
    string public propertyLatitude;
    string public propertyLongitude;
    string public propertyDescription;
    uint256 public tokenPrice; 


    IERC20 public paymentToken;
     
     
    mapping(address => uint256) public tokenBalances;
    uint256 public totalTokens;


    struct RevenueDrop {
         uint256 amount;
         uint256 totalTokensAtDrop;
    }
    mapping(uint256 => RevenueDrop) public revenueDrops;
    uint256 public dropCounter;


    mapping(address => uint256) public lastClaimedDrop;


    event RevenueDropped(uint256 dropId, uint256 amount, uint256 totalTokensAtDrop);
    event RevenueClaimed(address indexed claimer, uint256 totalClaimed);
    event TokenTransfer(address indexed from, address indexed to, uint256 amount);


    constructor(
         string memory _propertyName,
         string memory _propertyLatitude,
         string memory _propertyLongitude,
         string memory _propertyDescription,
         uint256 _tokenPrice,       
         address _owner,
         address _tokenAddress       
    ) {
         propertyOwner = _owner;
         propertyName = _propertyName;
         propertyLatitude = _propertyLatitude;
         propertyLongitude = _propertyLongitude;
         propertyDescription = _propertyDescription;
         tokenPrice = _tokenPrice;
         paymentToken = IERC20(_tokenAddress);

         totalTokens = 1000000;
         tokenBalances[_owner] = totalTokens;
    }

    function dropRevenue(uint256 amount) external {
         require(msg.sender == propertyOwner, "Only property owner can drop revenue");
         paymentToken.safeTransferFrom(msg.sender, address(this), amount);
         revenueDrops[dropCounter] = RevenueDrop({
              amount: amount,
              totalTokensAtDrop: totalTokens
         });
         emit RevenueDropped(dropCounter, amount, totalTokens);
         dropCounter++;
    }

    function buyTokens(uint256 amount) external {
         require(amount > 0, "Amount must be greater than zero");
         uint256 tokensToBuy = amount / tokenPrice;
         require(tokensToBuy > 0, "Amount too low to buy any tokens");
         require(tokenBalances[propertyOwner] >= tokensToBuy, "Insufficient tokens available for sale");

         tokenBalances[propertyOwner] -= tokensToBuy;
         tokenBalances[msg.sender] += tokensToBuy;

         paymentToken.safeTransferFrom(msg.sender, propertyOwner, amount);
    }

    function claimRevenue() external {
         uint256 totalClaim = 0;
         uint256 userBalance = tokenBalances[msg.sender];
         require(userBalance > 0, "No tokens held");

         uint256 start = lastClaimedDrop[msg.sender];
         for (uint256 i = start; i < dropCounter; i++) {
              RevenueDrop memory dropInfo = revenueDrops[i];
              uint256 claimAmount = (dropInfo.amount * userBalance) / dropInfo.totalTokensAtDrop;
              totalClaim += claimAmount;
         }
         require(totalClaim > 0, "No revenue to claim");
         lastClaimedDrop[msg.sender] = dropCounter;
         paymentToken.safeTransfer(msg.sender, totalClaim);
         emit RevenueClaimed(msg.sender, totalClaim);
    }

    function transferTokens(address to, uint256 amount) external {
         require(tokenBalances[msg.sender] >= amount, "Insufficient token balance");
         tokenBalances[msg.sender] -= amount;
         tokenBalances[to] += amount;
         emit TokenTransfer(msg.sender, to, amount);
    }
}
