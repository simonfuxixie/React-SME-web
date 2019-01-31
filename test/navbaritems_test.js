// mocha ./test/navbaritems_test.js
// var assert = require('chai').assert
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
//
// assert.typeOf(foo, 'string'); // without optional message
// assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
// assert.equal(foo, 'bar', 'foo equal `bar`');
// assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
// assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');


// var expect = require('chai').expect
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
//
// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.lengthOf(3);
// expect(beverages).to.have.property('tea').with.lengthOf(3);

// var should = require('chai').should() //actually call the function
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
//
// foo.should.be.a('string');
// foo.should.equal('bar');
// foo.should.have.lengthOf(3);
// beverages.should.have.property('tea').with.lengthOf(3);

"use strict";

const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;
const mongoose = require('mongoose');
const NavbarItems = require('../models/webcontent/navbarItems_model');

var navbar = new NavbarItems({
  nav_item_url: "/products",
  nav_item_name: "Products",
  nav_subitem: [
     {
        url: "/products",
        name: "Fault ticketing system",
     },],
});





describe('check navbar records', function(){

  before(function(done){
    // before test, connect to mongodb
    var dbs = require('../dbconnection/dbconnection.js');
    dbs.mongodbConnection();
    done();
  });

  it('should have a navbar record of 1', function(done){

    NavbarItems.findOne({nav_item_url: "/products"}).exec()
    .then((result) => {
      assert.equal(result.nav_subitem.length, 1);
      done();
    });
  });


  //After all tests are finished, close connection
  after(function(done){
    mongoose.connection.close(done);
  });


});



// NavbarItems.findOne({nav_item_url: "/products"}).then(function(record){
//   record.nav_subitem.push({});
//   record.save;
// })


// "nav_item_url":"/products",
// "nav_item_name":"Products",
// "nav_subitem":[
//    {
//       "url":"/products",
//       "name":"Fault ticketing system"
//    },
//    {
//       "url":"/products",
//       "name":"LetQuote"
//    },
//    {
//       "url":"/products",
//       "name":"AI Text Recognition"
//    },
//    {
//       "url":"/products",
//       "name":"AI Plate Recognition"
//    }
// ]
// },
// {
// "nav_item_url":"/data_services",
// "nav_item_name":"Data Services",
// "nav_subitem":[
//    {
//       "url":"/data_services",
//       "name":"API data extraction"
//    },
//    {
//       "url":"/data_services",
//       "name":"Data visualization"
//    }
// ]
// },
// {
// "nav_item_url":"/website_app",
// "nav_item_name":"Website & App Customization",
// "nav_subitem":[
//    {
//       "url":"/website_app",
//       "name":"Website Customization"
//    },
//    {
//       "url":"/website_app",
//       "name":"App Customization"
//    }
// ]
// },
// {
// "nav_item_url":"/e_commerce",
// "nav_item_name":"E-commerce",
// "nav_subitem":[
//    {
//       "url":"/e_commerce",
//       "name":"Shopify customization"
//    }
// ]
// }
// ];
