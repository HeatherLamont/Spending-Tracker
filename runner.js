const Account = require('./account.js');
const Transaction = require('./transaction.js');
const Merchant = require('./merchant.js');

const tesco = new Merchant("Tesco", 'groceries');
firstTransaction = new Transaction(500, 'January 10, 2022', tesco);
secondTransaction = new Transaction(600, 'January 16, 2022', tesco);
thirdTransaction = new Transaction(400, 'January 02, 2022', tesco);
const currentAccount = new Account(firstTransaction);
currentAccount.transaction.push(secondTransaction, thirdTransaction);

Account.prototype.merchantTransactions = function(specificMerchant){
    for (var specificTransaction of this.transaction){
        if (specificTransaction.merchant == specificMerchant){
            console.log(`Transaction at ${specificMerchant.name}: £${specificTransaction.amount} `);

        }
    }
}
//Test
// currentAccount.merchantTransactions(tesco);




Account.prototype.tagTransactions = function(specificTag){
    for (var specificTransaction of this.transaction){
        if (specificTransaction.merchant.tag == specificTag){
            console.log(specificTransaction);

        }
    }
}
//Test
// currentAccount.tagTransactions("groceries")

Account.prototype.transactionsBetween = function(min, max){
    let filteredTransactions = [];
    for (let i = 0; i<this.transaction.length;i++){
        if (this.transaction[i].amount >= min && this.transaction[i].amount <= max){
        }
        filteredTransactions.push(this.transaction[i]);
    }
    console.log(filteredTransactions);
};
//Test
// currentAccount.transactionsBetween(400,700);

Account.prototype.transactionByMonth = function(filteredMonth){
    for (let specificTransaction of this.transaction){
        let month  = specificTransaction.date.getMonth();
        var options = { month: 'long'};
        let monthAsString = (Intl.DateTimeFormat('en-GB', options).format(month));
        if (filteredMonth === monthAsString){
            console.log(specificTransaction);
        }   
        
    }
}
//Test
// currentAccount.transactionByMonth('January');

