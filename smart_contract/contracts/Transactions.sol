// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Transactions {
    uint256 transactionCount;

    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        string message;
    }

    TransferStruct[] transactionsArray;

    function sendCrypto(
        address payable reciever,
        uint amount,
        string memory message
    ) public {
        transactionCount += 1;
        transactionsArray.push(
            TransferStruct(msg.sender, reciever, amount, message)
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactionsArray;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
