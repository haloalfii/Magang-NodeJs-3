const express = require('express')
const app = express()
const chalk = require('chalk')
var moment = require('moment-timezone')

app.get('/', function (req, res){
    console.log(chalk.green('Akses TimeZone Converter'))
    res.send('Input Timezone di Url.')
})

app.get('/london', function(req, res){
    console.log(chalk.red('Akses Input Waktu London'))
    res.send('London')
    // LONDON
    app.get('/london/:convertto', function(req, res){
        console.log(chalk.red('Akses Waktu Asal Timezone London'))

        if (req.params.convertto === '1'){
            console.log("Connect To Jakarta");
            app.get('/london/:convertto/:time', function(req, res){
                var London = moment.tz(req.params.time, "Europe/London");
                var Jakarta = London.subtract(1, 'hours').clone().tz("Asia/Jakarta").format("hh:mm");
                
                let data = {
                    Jakarta,
                }
                res.json(data)
                console.log(chalk.green('Selesai Convert Di Waktu Jakarta', Jakarta))
            })
        }

        else if (req.params.convertto === '2'){
            console.log("Connect To Tokyo");
            app.get('/london/:convertto/:time', function(req, res){
                var London = moment.tz(req.params.time, "Europe/London");
                var Tokyo = London.subtract(1, 'hours').clone().tz("Asia/Tokyo").format("hh:mm");
                
                let data = {
                    Tokyo,
                }
                res.json(data)
                console.log(chalk.green('Selesai Convert Di Waktu Tokyo', Tokyo))
            })
        }

        else if (req.params.convertto === '3'){
            console.log("Connect To Jakarta & Tokyo");
            app.get('/london/:convertto/:time', function(req, res){
                var London = moment.tz(req.params.time, "Europe/London");
                var Jakarta = London.subtract(1, 'hours').clone().tz("Asia/Jakarta").format("hh:mm");
                var Tokyo = London.subtract(1, 'hours').clone().tz("Asia/Tokyo").format("hh:mm");
                
                let data = {
                    Jakarta,
                    Tokyo,
                }
                res.json(data)
                console.log(chalk.green('Selesai Convert Di Waktu All', Jakarta, Tokyo))
            })
        }
    })
})

app.listen(8000)