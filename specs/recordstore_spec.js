var assert = require('chai').assert;
var Record = require('../record');
var RecordStore = require('../recordstore');


describe("Bank", function(){

  beforeEach(function(){
    record1 = new Record("steps","step up",8)
    record2 = new Record("afi","up",10)
    record3 = new Record("sclub7","s club party",9)

    recordstore1 = new RecordStore("itunes","worldwide",500)

  });

  it("should add record", function(){
    recordstore1.add(record1,10);
    assert.equal(1,recordstore1.inventory.length);
  });

  it("should list inventory", function(){
    recordstore1.add(record1,10);
    recordstore1.add(record2,5);
    assert.deepEqual([record1,record2],recordstore1.list());
  });

  it("should sell", function(){
    recordstore1.add(record1,10);
    recordstore1.add(record2,5);
    recordstore1.sell(record2,1);
    assert.deepEqual(510,recordstore1.balance);
    assert.deepEqual(4,record2.quantity);
  });

  it("should report", function(){
    recordstore1.add(record1,10);
    recordstore1.add(record2,5);
    // recordstore1.sell(record2,1);
    assert.deepEqual([{balance: 500, stockvalue: 130}], recordstore1.report());
    // assert.deepEqual(4,record2.quantity);
  });

})
