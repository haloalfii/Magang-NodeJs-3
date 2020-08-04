const express = require('express')
const app = express()
const chalk = require('chalk')
var moment = require('moment')

//app.get('/', function (req, res){
//    res.sendFile('/Alfian/Magang Gamatechno/Repo/TimeZone/DatePicker.html')
//})

app.get('/', function (req, res){
    console.log(chalk.green('Akses Localhost'))
    res.send('Time')
})

app.get('/time/:date', function(req, res){
    console.log(chalk.red('Akses Input Waktu ' + req.params.date))
    let judul = 'Input Waktu dengan Format Tahun-Bulan-Tanggal'
    var input = moment(req.params.date).format("YYYY MM DD")
    var OneWeek = moment(req.params.date).add(7, 'days').format("YYYY MM DD")
    var FourtyDays = moment(req.params.date).add(40, 'days').format("YYYY MM DD")
    var HundredDays = moment(req.params.date).add(100, 'days').format("YYYY MM DD")
    var OneYear = moment(req.params.date).add(1, 'year').format("YYYY MM DD")
    var TwoYear = moment(req.params.date).add(2, 'year').format("YYYY MM DD")
    var TousandDays = moment(req.params.date).add(1000, 'days').format("YYYY MM DD")

    console.log(chalk.green('Minggu \t= ', OneWeek))
    console.log(chalk.green('40 Hari \t= ', FourtyDays))
    console.log(chalk.green('100 Hari \t= ', HundredDays))
    console.log(chalk.green('Setahun \t= ', OneYear))
    console.log(chalk.green('DuaTahun \t= ', TwoYear))
    console.log(chalk.green('100 Hari \t= ', TousandDays))

    let data = {
        judul,
        input,
        OneWeek,
        FourtyDays,
        HundredDays,
        OneYear,
        TwoYear,
        TousandDays,
    }
    res.json(data)
})

app.listen(8000)