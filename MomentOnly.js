var moment = require ('moment');
const { read } = require('fs');
const { request } = require('http');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var date = ('Input = ', date =>{
    var tanggal = moment(date, "MM-DD-YYYY"); 
    console.log(tanggal);
});






//var SevenDays = moment().add(7, 'd');
//var FourtyDays = moment().add(40, 'd');
//var HundredDays = moment().add(100, 'd');
//var OneYear = moment().add(1, 'y');
//var TwoYear = moment().add(1, 'y');
//var TousandDays = moment().add(1000, 'd');

/*console.log('Sekarang ' + moment().format("MMM Do YYYY"));
console.log('7 Hari Lagi = ' + SevenDays.format("MMM Do YYYY"));
console.log('40 Hari Lagi = ' + FourtyDays.format("MMM Do YYYY"));
console.log('100 Hari Lagi = ' + HundredDays.format("MMM Do YYYY"));
console.log('1 Tahun Lagi = ' + OneYear.format("MMM Do YYYY"));
console.log('2 Tahun Lagi = ' + TwoYear.format("MMM Do YYYY"));
console.log('1000 Hari Lagi = ' + TousandDays.format("MMM Do YYYY"));*/



