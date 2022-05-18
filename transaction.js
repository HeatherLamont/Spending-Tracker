const Transaction = function(amount, date, merchant){
    this.amount = (`£${amount}`);
    this.date = new Date(date);
    this.merchant = merchant;
}


// Date.prototype.getMonth(date);

// Transaction.prototype.currancy = function(){
//     console.log(`£${this.amount}`);
// }

// firstTransaction = new Transaction(500, 10/06/2022, "Tesco");
// firstTransaction.currancy()

module.exports = Transaction;