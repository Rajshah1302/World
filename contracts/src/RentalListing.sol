// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract RentalListing {
    using SafeERC20 for IERC20;

    // --- Property Details ---
    address public propertyOwner;
    string public propertyName;
    string public propertyLatitude;
    string public propertyLongitude;
    string public propertyDescription;
    uint8 public rentalMode; 
    uint256 public basePrice;


    // --- Payment Token for Revenue & Bidding ---
    // (For example, USDC)
    IERC20 public paymentToken;
 
    // --- Token Holdings for Property Shares ---
    mapping(address => uint256) public tokenBalances;
    uint256 public totalTokens;

    // --- Token Transfer Event ---
    event TokenTransfer(address indexed from, address indexed to, uint256 amount);

    // --- Constructor ---
    constructor(
         string memory _propertyName,
         string memory _propertyLatitude,
         string memory _propertyLongitude,
         string memory _propertyDescription,
         uint8 _rentalMode,
         uint256 _basePrice,
         address _owner,
         address _tokenAddress // payment token address (e.g., USDC)
    ) {
         propertyOwner = _owner;
         propertyName = _propertyName;
         propertyLatitude = _propertyLatitude;
         propertyLongitude = _propertyLongitude;
         propertyDescription = _propertyDescription;
         rentalMode = _rentalMode;
         basePrice = _basePrice;
         paymentToken = IERC20(_tokenAddress);

         // Initialize token holdings for property shares.
         // Here we assume a fixed supply (for example, 1,000,000 units) that is initially assigned to the property owner.
         totalTokens = 1000000;
         tokenBalances[_owner] = totalTokens;
    }

     
}
