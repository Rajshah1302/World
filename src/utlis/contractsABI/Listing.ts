const Listing = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        { "name": "_propertyName", "type": "string", "internalType": "string" },
        {
          "name": "_propertyLatitude",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_propertyLongitude",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_propertyDescription",
          "type": "string",
          "internalType": "string"
        },
        { "name": "_basePrice", "type": "uint256", "internalType": "uint256" },
        { "name": "_owner", "type": "address", "internalType": "address" },
        {
          "name": "_tokenAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "basePrice",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "paymentToken",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract IERC20" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "propertyDescription",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "propertyLatitude",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "propertyLongitude",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "propertyName",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "propertyOwner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenBalances",
      "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalTokens",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "TokenTransfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561000f575f5ffd5b50604051610de3380380610de38339818101604052810190610031919061032b565b815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550866001908161007f919061063f565b50856002908161008f919061063f565b50846003908161009f919061063f565b5083600490816100af919061063f565b50826005819055508060065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620f424060088190555060085460075f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505050505050505061070e565b5f604051905090565b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6101b08261016a565b810181811067ffffffffffffffff821117156101cf576101ce61017a565b5b80604052505050565b5f6101e1610151565b90506101ed82826101a7565b919050565b5f67ffffffffffffffff82111561020c5761020b61017a565b5b6102158261016a565b9050602081019050919050565b8281835e5f83830152505050565b5f61024261023d846101f2565b6101d8565b90508281526020810184848401111561025e5761025d610166565b5b610269848285610222565b509392505050565b5f82601f83011261028557610284610162565b5b8151610295848260208601610230565b91505092915050565b5f819050919050565b6102b08161029e565b81146102ba575f5ffd5b50565b5f815190506102cb816102a7565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102fa826102d1565b9050919050565b61030a816102f0565b8114610314575f5ffd5b50565b5f8151905061032581610301565b92915050565b5f5f5f5f5f5f5f60e0888a0312156103465761034561015a565b5b5f88015167ffffffffffffffff8111156103635761036261015e565b5b61036f8a828b01610271565b975050602088015167ffffffffffffffff8111156103905761038f61015e565b5b61039c8a828b01610271565b965050604088015167ffffffffffffffff8111156103bd576103bc61015e565b5b6103c98a828b01610271565b955050606088015167ffffffffffffffff8111156103ea576103e961015e565b5b6103f68a828b01610271565b94505060806104078a828b016102bd565b93505060a06104188a828b01610317565b92505060c06104298a828b01610317565b91505092959891949750929550565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061048657607f821691505b60208210810361049957610498610442565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026104fb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826104c0565b61050586836104c0565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61054061053b6105368461029e565b61051d565b61029e565b9050919050565b5f819050919050565b61055983610526565b61056d61056582610547565b8484546104cc565b825550505050565b5f5f905090565b610584610575565b61058f818484610550565b505050565b5b818110156105b2576105a75f8261057c565b600181019050610595565b5050565b601f8211156105f7576105c88161049f565b6105d1846104b1565b810160208510156105e0578190505b6105f46105ec856104b1565b830182610594565b50505b505050565b5f82821c905092915050565b5f6106175f19846008026105fc565b1980831691505092915050565b5f61062f8383610608565b9150826002028217905092915050565b61064882610438565b67ffffffffffffffff8111156106615761066061017a565b5b61066b825461046f565b6106768282856105b6565b5f60209050601f8311600181146106a7575f8415610695578287015190505b61069f8582610624565b865550610706565b601f1984166106b58661049f565b5f5b828110156106dc578489015182556001820191506020850194506020810190506106b7565b868310156106f957848901516106f5601f891682610608565b8355505b6001600288020188555050505b505050505050565b6106c88061071b5f395ff3fe608060405234801561000f575f5ffd5b5060043610610091575f3560e01c8063523fba7f11610064578063523fba7f1461010d5780637e1c0c091461013d578063b8f6391b1461015b578063c7876ea414610179578063f446c38f1461019757610091565b80630935c9f2146100955780632c35c08c146100b35780633013ce29146100d15780633f5cecc5146100ef575b5f5ffd5b61009d6101b5565b6040516100aa91906104bf565b60405180910390f35b6100bb610241565b6040516100c891906104bf565b60405180910390f35b6100d96102cd565b6040516100e69190610559565b60405180910390f35b6100f76102f2565b60405161010491906104bf565b60405180910390f35b610127600480360381019061012291906105b1565b61037e565b60405161013491906105f4565b60405180910390f35b610145610393565b60405161015291906105f4565b60405180910390f35b610163610399565b60405161017091906104bf565b60405180910390f35b610181610425565b60405161018e91906105f4565b60405180910390f35b61019f61042b565b6040516101ac919061061c565b60405180910390f35b600380546101c290610662565b80601f01602080910402602001604051908101604052809291908181526020018280546101ee90610662565b80156102395780601f1061021057610100808354040283529160200191610239565b820191905f5260205f20905b81548152906001019060200180831161021c57829003601f168201915b505050505081565b6001805461024e90610662565b80601f016020809104026020016040519081016040528092919081815260200182805461027a90610662565b80156102c55780601f1061029c576101008083540402835291602001916102c5565b820191905f5260205f20905b8154815290600101906020018083116102a857829003601f168201915b505050505081565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600280546102ff90610662565b80601f016020809104026020016040519081016040528092919081815260200182805461032b90610662565b80156103765780601f1061034d57610100808354040283529160200191610376565b820191905f5260205f20905b81548152906001019060200180831161035957829003601f168201915b505050505081565b6007602052805f5260405f205f915090505481565b60085481565b600480546103a690610662565b80601f01602080910402602001604051908101604052809291908181526020018280546103d290610662565b801561041d5780601f106103f45761010080835404028352916020019161041d565b820191905f5260205f20905b81548152906001019060200180831161040057829003601f168201915b505050505081565b60055481565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6104918261044f565b61049b8185610459565b93506104ab818560208601610469565b6104b481610477565b840191505092915050565b5f6020820190508181035f8301526104d78184610487565b905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f61052161051c610517846104df565b6104fe565b6104df565b9050919050565b5f61053282610507565b9050919050565b5f61054382610528565b9050919050565b61055381610539565b82525050565b5f60208201905061056c5f83018461054a565b92915050565b5f5ffd5b5f610580826104df565b9050919050565b61059081610576565b811461059a575f5ffd5b50565b5f813590506105ab81610587565b92915050565b5f602082840312156105c6576105c5610572565b5b5f6105d38482850161059d565b91505092915050565b5f819050919050565b6105ee816105dc565b82525050565b5f6020820190506106075f8301846105e5565b92915050565b61061681610576565b82525050565b5f60208201905061062f5f83018461060d565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061067957607f821691505b60208210810361068c5761068b610635565b5b5091905056fea2646970667358221220916e23640b453d0695eab2c9af7aed2a47e10e5ed1cd7daa6016968de334596c64736f6c634300081c0033",
    "sourceMap": "182:1588:9:-:0;;;882:879;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1219:6;1203:13;;:22;;;;;;;;;;;;;;;;;;1251:13;1236:12;:28;;;;;;:::i;:::-;;1294:17;1275:16;:36;;;;;;:::i;:::-;;1342:18;1322:17;:38;;;;;;:::i;:::-;;1393:20;1371:19;:42;;;;;;:::i;:::-;;1436:10;1424:9;:22;;;;1479:13;1457:12;;:36;;;;;;;;;;;;;;;;;;1701:7;1687:11;:21;;;;1743:11;;1719:13;:21;1733:6;1719:21;;;;;;;;;;;;;;;:35;;;;882:879;;;;;;;182:1588;;7:75:10;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:139::-;1699:6;1694:3;1689;1683:23;1740:1;1731:6;1726:3;1722:16;1715:27;1610:139;;;:::o;1755:434::-;1844:5;1869:66;1885:49;1927:6;1885:49;:::i;:::-;1869:66;:::i;:::-;1860:75;;1958:6;1951:5;1944:21;1996:4;1989:5;1985:16;2034:3;2025:6;2020:3;2016:16;2013:25;2010:112;;;2041:79;;:::i;:::-;2010:112;2131:52;2176:6;2171:3;2166;2131:52;:::i;:::-;1850:339;1755:434;;;;;:::o;2209:355::-;2276:5;2325:3;2318:4;2310:6;2306:17;2302:27;2292:122;;2333:79;;:::i;:::-;2292:122;2443:6;2437:13;2468:90;2554:3;2546:6;2539:4;2531:6;2527:17;2468:90;:::i;:::-;2459:99;;2282:282;2209:355;;;;:::o;2570:77::-;2607:7;2636:5;2625:16;;2570:77;;;:::o;2653:122::-;2726:24;2744:5;2726:24;:::i;:::-;2719:5;2716:35;2706:63;;2765:1;2762;2755:12;2706:63;2653:122;:::o;2781:143::-;2838:5;2869:6;2863:13;2854:22;;2885:33;2912:5;2885:33;:::i;:::-;2781:143;;;;:::o;2930:126::-;2967:7;3007:42;3000:5;2996:54;2985:65;;2930:126;;;:::o;3062:96::-;3099:7;3128:24;3146:5;3128:24;:::i;:::-;3117:35;;3062:96;;;:::o;3164:122::-;3237:24;3255:5;3237:24;:::i;:::-;3230:5;3227:35;3217:63;;3276:1;3273;3266:12;3217:63;3164:122;:::o;3292:143::-;3349:5;3380:6;3374:13;3365:22;;3396:33;3423:5;3396:33;:::i;:::-;3292:143;;;;:::o;3441:1983::-;3605:6;3613;3621;3629;3637;3645;3653;3702:3;3690:9;3681:7;3677:23;3673:33;3670:120;;;3709:79;;:::i;:::-;3670:120;3850:1;3839:9;3835:17;3829:24;3880:18;3872:6;3869:30;3866:117;;;3902:79;;:::i;:::-;3866:117;4007:74;4073:7;4064:6;4053:9;4049:22;4007:74;:::i;:::-;3997:84;;3800:291;4151:2;4140:9;4136:18;4130:25;4182:18;4174:6;4171:30;4168:117;;;4204:79;;:::i;:::-;4168:117;4309:74;4375:7;4366:6;4355:9;4351:22;4309:74;:::i;:::-;4299:84;;4101:292;4453:2;4442:9;4438:18;4432:25;4484:18;4476:6;4473:30;4470:117;;;4506:79;;:::i;:::-;4470:117;4611:74;4677:7;4668:6;4657:9;4653:22;4611:74;:::i;:::-;4601:84;;4403:292;4755:2;4744:9;4740:18;4734:25;4786:18;4778:6;4775:30;4772:117;;;4808:79;;:::i;:::-;4772:117;4913:74;4979:7;4970:6;4959:9;4955:22;4913:74;:::i;:::-;4903:84;;4705:292;5036:3;5063:64;5119:7;5110:6;5099:9;5095:22;5063:64;:::i;:::-;5053:74;;5007:130;5176:3;5203:64;5259:7;5250:6;5239:9;5235:22;5203:64;:::i;:::-;5193:74;;5147:130;5316:3;5343:64;5399:7;5390:6;5379:9;5375:22;5343:64;:::i;:::-;5333:74;;5287:130;3441:1983;;;;;;;;;;:::o;5430:99::-;5482:6;5516:5;5510:12;5500:22;;5430:99;;;:::o;5535:180::-;5583:77;5580:1;5573:88;5680:4;5677:1;5670:15;5704:4;5701:1;5694:15;5721:320;5765:6;5802:1;5796:4;5792:12;5782:22;;5849:1;5843:4;5839:12;5870:18;5860:81;;5926:4;5918:6;5914:17;5904:27;;5860:81;5988:2;5980:6;5977:14;5957:18;5954:38;5951:84;;6007:18;;:::i;:::-;5951:84;5772:269;5721:320;;;:::o;6047:141::-;6096:4;6119:3;6111:11;;6142:3;6139:1;6132:14;6176:4;6173:1;6163:18;6155:26;;6047:141;;;:::o;6194:93::-;6231:6;6278:2;6273;6266:5;6262:14;6258:23;6248:33;;6194:93;;;:::o;6293:107::-;6337:8;6387:5;6381:4;6377:16;6356:37;;6293:107;;;;:::o;6406:393::-;6475:6;6525:1;6513:10;6509:18;6548:97;6578:66;6567:9;6548:97;:::i;:::-;6666:39;6696:8;6685:9;6666:39;:::i;:::-;6654:51;;6738:4;6734:9;6727:5;6723:21;6714:30;;6787:4;6777:8;6773:19;6766:5;6763:30;6753:40;;6482:317;;6406:393;;;;;:::o;6805:60::-;6833:3;6854:5;6847:12;;6805:60;;;:::o;6871:142::-;6921:9;6954:53;6972:34;6981:24;6999:5;6981:24;:::i;:::-;6972:34;:::i;:::-;6954:53;:::i;:::-;6941:66;;6871:142;;;:::o;7019:75::-;7062:3;7083:5;7076:12;;7019:75;;;:::o;7100:269::-;7210:39;7241:7;7210:39;:::i;:::-;7271:91;7320:41;7344:16;7320:41;:::i;:::-;7312:6;7305:4;7299:11;7271:91;:::i;:::-;7265:4;7258:105;7176:193;7100:269;;;:::o;7375:73::-;7420:3;7441:1;7434:8;;7375:73;:::o;7454:189::-;7531:32;;:::i;:::-;7572:65;7630:6;7622;7616:4;7572:65;:::i;:::-;7507:136;7454:189;;:::o;7649:186::-;7709:120;7726:3;7719:5;7716:14;7709:120;;;7780:39;7817:1;7810:5;7780:39;:::i;:::-;7753:1;7746:5;7742:13;7733:22;;7709:120;;;7649:186;;:::o;7841:543::-;7942:2;7937:3;7934:11;7931:446;;;7976:38;8008:5;7976:38;:::i;:::-;8060:29;8078:10;8060:29;:::i;:::-;8050:8;8046:44;8243:2;8231:10;8228:18;8225:49;;;8264:8;8249:23;;8225:49;8287:80;8343:22;8361:3;8343:22;:::i;:::-;8333:8;8329:37;8316:11;8287:80;:::i;:::-;7946:431;;7931:446;7841:543;;;:::o;8390:117::-;8444:8;8494:5;8488:4;8484:16;8463:37;;8390:117;;;;:::o;8513:169::-;8557:6;8590:51;8638:1;8634:6;8626:5;8623:1;8619:13;8590:51;:::i;:::-;8586:56;8671:4;8665;8661:15;8651:25;;8564:118;8513:169;;;;:::o;8687:295::-;8763:4;8909:29;8934:3;8928:4;8909:29;:::i;:::-;8901:37;;8971:3;8968:1;8964:11;8958:4;8955:21;8947:29;;8687:295;;;;:::o;8987:1395::-;9104:37;9137:3;9104:37;:::i;:::-;9206:18;9198:6;9195:30;9192:56;;;9228:18;;:::i;:::-;9192:56;9272:38;9304:4;9298:11;9272:38;:::i;:::-;9357:67;9417:6;9409;9403:4;9357:67;:::i;:::-;9451:1;9475:4;9462:17;;9507:2;9499:6;9496:14;9524:1;9519:618;;;;10181:1;10198:6;10195:77;;;10247:9;10242:3;10238:19;10232:26;10223:35;;10195:77;10298:67;10358:6;10351:5;10298:67;:::i;:::-;10292:4;10285:81;10154:222;9489:887;;9519:618;9571:4;9567:9;9559:6;9555:22;9605:37;9637:4;9605:37;:::i;:::-;9664:1;9678:208;9692:7;9689:1;9686:14;9678:208;;;9771:9;9766:3;9762:19;9756:26;9748:6;9741:42;9822:1;9814:6;9810:14;9800:24;;9869:2;9858:9;9854:18;9841:31;;9715:4;9712:1;9708:12;9703:17;;9678:208;;;9914:6;9905:7;9902:19;9899:179;;;9972:9;9967:3;9963:19;9957:26;10015:48;10057:4;10049:6;10045:17;10034:9;10015:48;:::i;:::-;10007:6;10000:64;9922:156;9899:179;10124:1;10120;10112:6;10108:14;10104:22;10098:4;10091:36;9526:611;;;9489:887;;9079:1303;;;8987:1395;;:::o;182:1588:9:-;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b5060043610610091575f3560e01c8063523fba7f11610064578063523fba7f1461010d5780637e1c0c091461013d578063b8f6391b1461015b578063c7876ea414610179578063f446c38f1461019757610091565b80630935c9f2146100955780632c35c08c146100b35780633013ce29146100d15780633f5cecc5146100ef575b5f5ffd5b61009d6101b5565b6040516100aa91906104bf565b60405180910390f35b6100bb610241565b6040516100c891906104bf565b60405180910390f35b6100d96102cd565b6040516100e69190610559565b60405180910390f35b6100f76102f2565b60405161010491906104bf565b60405180910390f35b610127600480360381019061012291906105b1565b61037e565b60405161013491906105f4565b60405180910390f35b610145610393565b60405161015291906105f4565b60405180910390f35b610163610399565b60405161017091906104bf565b60405180910390f35b610181610425565b60405161018e91906105f4565b60405180910390f35b61019f61042b565b6040516101ac919061061c565b60405180910390f35b600380546101c290610662565b80601f01602080910402602001604051908101604052809291908181526020018280546101ee90610662565b80156102395780601f1061021057610100808354040283529160200191610239565b820191905f5260205f20905b81548152906001019060200180831161021c57829003601f168201915b505050505081565b6001805461024e90610662565b80601f016020809104026020016040519081016040528092919081815260200182805461027a90610662565b80156102c55780601f1061029c576101008083540402835291602001916102c5565b820191905f5260205f20905b8154815290600101906020018083116102a857829003601f168201915b505050505081565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600280546102ff90610662565b80601f016020809104026020016040519081016040528092919081815260200182805461032b90610662565b80156103765780601f1061034d57610100808354040283529160200191610376565b820191905f5260205f20905b81548152906001019060200180831161035957829003601f168201915b505050505081565b6007602052805f5260405f205f915090505481565b60085481565b600480546103a690610662565b80601f01602080910402602001604051908101604052809291908181526020018280546103d290610662565b801561041d5780601f106103f45761010080835404028352916020019161041d565b820191905f5260205f20905b81548152906001019060200180831161040057829003601f168201915b505050505081565b60055481565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6104918261044f565b61049b8185610459565b93506104ab818560208601610469565b6104b481610477565b840191505092915050565b5f6020820190508181035f8301526104d78184610487565b905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f61052161051c610517846104df565b6104fe565b6104df565b9050919050565b5f61053282610507565b9050919050565b5f61054382610528565b9050919050565b61055381610539565b82525050565b5f60208201905061056c5f83018461054a565b92915050565b5f5ffd5b5f610580826104df565b9050919050565b61059081610576565b811461059a575f5ffd5b50565b5f813590506105ab81610587565b92915050565b5f602082840312156105c6576105c5610572565b5b5f6105d38482850161059d565b91505092915050565b5f819050919050565b6105ee816105dc565b82525050565b5f6020820190506106075f8301846105e5565b92915050565b61061681610576565b82525050565b5f60208201905061062f5f83018461060d565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061067957607f821691505b60208210810361068c5761068b610635565b5b5091905056fea2646970667358221220916e23640b453d0695eab2c9af7aed2a47e10e5ed1cd7daa6016968de334596c64736f6c634300081c0033",
    "sourceMap": "182:1588:9:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;378:31;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;310:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;564;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;342:30;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;648:48;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;702:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;415:33;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;454:24;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;276:28;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;378:31;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;310:26::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;564:::-;;;;;;;;;;;;;:::o;342:30::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;648:48::-;;;;;;;;;;;;;;;;;:::o;702:26::-;;;;:::o;415:33::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;454:24::-;;;;:::o;276:28::-;;;;;;;;;;;;;:::o;7:99:10:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:139::-;376:6;371:3;366;360:23;417:1;408:6;403:3;399:16;392:27;287:139;;;:::o;432:102::-;473:6;524:2;520:7;515:2;508:5;504:14;500:28;490:38;;432:102;;;:::o;540:377::-;628:3;656:39;689:5;656:39;:::i;:::-;711:71;775:6;770:3;711:71;:::i;:::-;704:78;;791:65;849:6;844:3;837:4;830:5;826:16;791:65;:::i;:::-;881:29;903:6;881:29;:::i;:::-;876:3;872:39;865:46;;632:285;540:377;;;;:::o;923:313::-;1036:4;1074:2;1063:9;1059:18;1051:26;;1123:9;1117:4;1113:20;1109:1;1098:9;1094:17;1087:47;1151:78;1224:4;1215:6;1151:78;:::i;:::-;1143:86;;923:313;;;;:::o;1242:126::-;1279:7;1319:42;1312:5;1308:54;1297:65;;1242:126;;;:::o;1374:60::-;1402:3;1423:5;1416:12;;1374:60;;;:::o;1440:142::-;1490:9;1523:53;1541:34;1550:24;1568:5;1550:24;:::i;:::-;1541:34;:::i;:::-;1523:53;:::i;:::-;1510:66;;1440:142;;;:::o;1588:126::-;1638:9;1671:37;1702:5;1671:37;:::i;:::-;1658:50;;1588:126;;;:::o;1720:140::-;1784:9;1817:37;1848:5;1817:37;:::i;:::-;1804:50;;1720:140;;;:::o;1866:159::-;1967:51;2012:5;1967:51;:::i;:::-;1962:3;1955:64;1866:159;;:::o;2031:250::-;2138:4;2176:2;2165:9;2161:18;2153:26;;2189:85;2271:1;2260:9;2256:17;2247:6;2189:85;:::i;:::-;2031:250;;;;:::o;2368:117::-;2477:1;2474;2467:12;2614:96;2651:7;2680:24;2698:5;2680:24;:::i;:::-;2669:35;;2614:96;;;:::o;2716:122::-;2789:24;2807:5;2789:24;:::i;:::-;2782:5;2779:35;2769:63;;2828:1;2825;2818:12;2769:63;2716:122;:::o;2844:139::-;2890:5;2928:6;2915:20;2906:29;;2944:33;2971:5;2944:33;:::i;:::-;2844:139;;;;:::o;2989:329::-;3048:6;3097:2;3085:9;3076:7;3072:23;3068:32;3065:119;;;3103:79;;:::i;:::-;3065:119;3223:1;3248:53;3293:7;3284:6;3273:9;3269:22;3248:53;:::i;:::-;3238:63;;3194:117;2989:329;;;;:::o;3324:77::-;3361:7;3390:5;3379:16;;3324:77;;;:::o;3407:118::-;3494:24;3512:5;3494:24;:::i;:::-;3489:3;3482:37;3407:118;;:::o;3531:222::-;3624:4;3662:2;3651:9;3647:18;3639:26;;3675:71;3743:1;3732:9;3728:17;3719:6;3675:71;:::i;:::-;3531:222;;;;:::o;3759:118::-;3846:24;3864:5;3846:24;:::i;:::-;3841:3;3834:37;3759:118;;:::o;3883:222::-;3976:4;4014:2;4003:9;3999:18;3991:26;;4027:71;4095:1;4084:9;4080:17;4071:6;4027:71;:::i;:::-;3883:222;;;;:::o;4111:180::-;4159:77;4156:1;4149:88;4256:4;4253:1;4246:15;4280:4;4277:1;4270:15;4297:320;4341:6;4378:1;4372:4;4368:12;4358:22;;4425:1;4419:4;4415:12;4446:18;4436:81;;4502:4;4494:6;4490:17;4480:27;;4436:81;4564:2;4556:6;4553:14;4533:18;4530:38;4527:84;;4583:18;;:::i;:::-;4527:84;4348:269;4297:320;;;:::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "basePrice()": "c7876ea4",
    "paymentToken()": "3013ce29",
    "propertyDescription()": "b8f6391b",
    "propertyLatitude()": "3f5cecc5",
    "propertyLongitude()": "0935c9f2",
    "propertyName()": "2c35c08c",
    "propertyOwner()": "f446c38f",
    "tokenBalances(address)": "523fba7f",
    "totalTokens()": "7e1c0c09"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.28+commit.7893614a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_propertyName\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_propertyLatitude\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_propertyLongitude\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_propertyDescription\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_basePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokenTransfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"basePrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paymentToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"propertyDescription\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"propertyLatitude\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"propertyLongitude\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"propertyName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"propertyOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"tokenBalances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/RentalListing.sol\":\"RentalListing\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0x9b6b3e7803bc5f2f8cd7ad57db8ac1def61a9930a5a3107df4882e028a9605d7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da62d6be1f5c6edf577f0cb45666a8aa9c2086a4bac87d95d65f02e2f4c36a4b\",\"dweb:/ipfs/QmNkpvBpoCMvX8JwAFNSc5XxJ2q5BXJpL5L1txb4QkqVFF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a\",\"dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x4ea01544758fd2c7045961904686bfe232d2220a04ecaa2d6b08dac17827febf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fabe6bef5167ae741dd8c22d7f81d3f9120bd61b290762a2e8f176712567d329\",\"dweb:/ipfs/QmSnEitJ6xmf1SSAUeZozD7Gx7h8bNnX3a1ZBzqeivsvVg\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"src/RentalListing.sol\":{\"keccak256\":\"0xe3274a6fa4bf3a90bcb87862fe573f37481ff4e9152d86b5591257d884681d1d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91716a461cb15842ea5a08ad1b293a4f2388cd88782142b3bf461bcf3a2d4c15\",\"dweb:/ipfs/QmXU7G52g1faBPoan5omaZV4Drssg3A6tvY6TfBTHxzeGJ\"]}},\"version\":1}",
  "metadata": {
    "compiler": { "version": "0.8.28+commit.7893614a" },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_propertyName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_propertyLatitude",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_propertyLongitude",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_propertyDescription",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_basePrice",
              "type": "uint256"
            },
            { "internalType": "address", "name": "_owner", "type": "address" },
            {
              "internalType": "address",
              "name": "_tokenAddress",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TokenTransfer",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "basePrice",
          "outputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "paymentToken",
          "outputs": [
            { "internalType": "contract IERC20", "name": "", "type": "address" }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "propertyDescription",
          "outputs": [
            { "internalType": "string", "name": "", "type": "string" }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "propertyLatitude",
          "outputs": [
            { "internalType": "string", "name": "", "type": "string" }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "propertyLongitude",
          "outputs": [
            { "internalType": "string", "name": "", "type": "string" }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "propertyName",
          "outputs": [
            { "internalType": "string", "name": "", "type": "string" }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "propertyOwner",
          "outputs": [
            { "internalType": "address", "name": "", "type": "address" }
          ]
        },
        {
          "inputs": [
            { "internalType": "address", "name": "", "type": "address" }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenBalances",
          "outputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalTokens",
          "outputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" }
          ]
        }
      ],
      "devdoc": { "kind": "dev", "methods": {}, "version": 1 },
      "userdoc": { "kind": "user", "methods": {}, "version": 1 }
    },
    "settings": {
      "remappings": [
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/"
      ],
      "optimizer": { "enabled": false, "runs": 200 },
      "metadata": { "bytecodeHash": "ipfs" },
      "compilationTarget": { "src/RentalListing.sol": "RentalListing" },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol": {
        "keccak256": "0x9b6b3e7803bc5f2f8cd7ad57db8ac1def61a9930a5a3107df4882e028a9605d7",
        "urls": [
          "bzz-raw://da62d6be1f5c6edf577f0cb45666a8aa9c2086a4bac87d95d65f02e2f4c36a4b",
          "dweb:/ipfs/QmNkpvBpoCMvX8JwAFNSc5XxJ2q5BXJpL5L1txb4QkqVFF"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol": {
        "keccak256": "0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724",
        "urls": [
          "bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a",
          "dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol": {
        "keccak256": "0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c",
        "urls": [
          "bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba",
          "dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
        "urls": [
          "bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
          "dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x4ea01544758fd2c7045961904686bfe232d2220a04ecaa2d6b08dac17827febf",
        "urls": [
          "bzz-raw://fabe6bef5167ae741dd8c22d7f81d3f9120bd61b290762a2e8f176712567d329",
          "dweb:/ipfs/QmSnEitJ6xmf1SSAUeZozD7Gx7h8bNnX3a1ZBzqeivsvVg"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8",
        "urls": [
          "bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621",
          "dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"
        ],
        "license": "MIT"
      },
      "src/RentalListing.sol": {
        "keccak256": "0xe3274a6fa4bf3a90bcb87862fe573f37481ff4e9152d86b5591257d884681d1d",
        "urls": [
          "bzz-raw://91716a461cb15842ea5a08ad1b293a4f2388cd88782142b3bf461bcf3a2d4c15",
          "dweb:/ipfs/QmXU7G52g1faBPoan5omaZV4Drssg3A6tvY6TfBTHxzeGJ"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "id": 9
}


export const ListingAbi = Listing.abi;
