var Record = require('./record');
var _ = require('lodash');



var RecordStore = function(name,city,balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = []
  // this.report = []
}

RecordStore.prototype = {
  add: function(album,number) {
    this.inventory.push(album);
    album.quantity = number;
  },
  list: function() {
    list = []
    for (var i = 0; i < this.inventory.length; i++) {
      x = this.inventory[i]
      list.push(x);
    }
     return list;
  },
  sell: function(album,number) {
    if (_.includes(this.inventory,album) && album.quantity > number) {
      this.balance += (album.price * number);
      album.quantity -= number;

    }
  },
  report: function() {
    total = 0
    for (var i = 0; i < this.inventory.length; i++) {
      total += (this.inventory[i].price * this.inventory[i].quantity)
    }
    y = []
    y.push({balance: this.balance, stockvalue: total})
    return y
  }
}


module.exports = RecordStore;
