//import {Given,Then,When} from '@cucumber/cucumber'
const { Given, Then, When } = require('@cucumber/cucumber')
const { assert, expect } = require('chai')
let arr, len, arrOne, lenVal
Given('Array is empty', function () {
    arr = []
});

When('load the array with empty value', function () {
    arr.push()
    len = arr.length

});
Then('the length of the array should be {int}', function (exp) {

    assert.equal(len, exp)
});

Given('Array is has value', function () {
    arrOne = []
});
let a,b, c
When('load the array with {int},{int},{int} value', function (a, b, c) {
    //a= 2
    //b=3
    //c=4
    arrOne.push(a)
    arrOne.push(b)
    arrOne.push(c)
    lenVal = arrOne.length

});

Then('the length of the non empty array should be {int}', function (expResul) {

    assert.equal(lenVal, expResul)
});