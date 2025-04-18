// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import { RentalListing } from "./RentalListing.sol";

contract RentalFactory is Ownable {
    error RentalFactory_InvalidIndex();

    constructor(address _initialOwner) Ownable(_initialOwner) { }

    struct RentalProperty {
        address rentalAddress;
        string propertyName;
        string propertyLatitude;
        string propertyLongitude;
        string propertyDescription;
        uint256 tokenPrice; 
    }

    mapping(uint256 => RentalProperty) public rentalProperties;
    mapping(address => address[]) public ownerToProperties;
    uint256 public propertyCount;

    event PropertyListed(
        address indexed rentalContract,
        address indexed owner,
        string propertyName
    );


    function listProperty(
         string memory _propertyName,
         string memory _propertyLatitude,
         string memory _propertyLongitude,
         string memory _propertyDescription,
         uint256 _tokenPrice,
         address _tokenAddress 
    ) external returns (address) {
        
         RentalListing newRental = new RentalListing(
             _propertyName,
             _propertyLatitude,
             _propertyLongitude,
             _propertyDescription,
             _tokenPrice,       
             msg.sender,
             _tokenAddress 
         );

         propertyCount++;
         rentalProperties[propertyCount] = RentalProperty({
             rentalAddress: address(newRental),
             propertyName: _propertyName,
             propertyLatitude: _propertyLatitude,
             propertyLongitude: _propertyLongitude,
             propertyDescription: _propertyDescription,
             tokenPrice: _tokenPrice
         });

         ownerToProperties[msg.sender].push(address(newRental));

         emit PropertyListed(address(newRental), msg.sender, _propertyName);
         return address(newRental);
    }

    function getPropertiesByOwner(address _owner) external view returns (address[] memory) {
         return ownerToProperties[_owner];
    }
}
