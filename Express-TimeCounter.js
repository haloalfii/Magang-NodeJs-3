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
    app.get('/london/jakarta', function(req, res){
        console.log(chalk.green('Connect To Jakarta'))
        app.get('/london/jakarta/:time', function(req, res){
            var London = moment.tz(req.params.time, "Europe/London");
            var Jakarta = London.subtract(1, 'hours').clone().tz("Asia/Jakarta").format("YYYY MM DD hh:mm a");
                    
            let data = {
                Jakarta,
            }
            res.json(data)
            console.log(chalk.green('Selesai Convert Di Waktu Jakarta', Jakarta))
        })
    })

    app.get('/london/tokyo', function(req, res){
        console.log(chalk.green('Connect To Tokyo'))
        app.get('/london/tokyo/:time', function(req, res){
            var London = moment.tz(req.params.time, "Europe/London");
            var Tokyo = London.subtract(1, 'hours').clone().tz("Asia/Tokyo").format("YYYY MM DD hh:mm a");
                    
            let data = {
                Tokyo,
            }
            res.json(data)
            console.log(chalk.green('Selesai Convert Di Waktu Tokyo', Tokyo))
        })
    })

    app.get('/london/all', function(req, res){
        console.log(chalk.green('Connect To All'))
        app.get('/london/all/:time', function(req, res){
            var London = moment.tz(req.params.time, "Europe/London");
            var Jakarta = London.subtract(1, 'hours').clone().tz("Asia/Jakarta").format("YYYY MM DD hh:mm a");
            var Tokyo = London.subtract(1, 'hours').clone().tz("Asia/Tokyo").format("YYYY MM DD hh:mm a");
                    
            let data = {
                Jakarta,
                Tokyo,
            }
            res.json(data)
            console.log(chalk.green('Selesai Convert Di Waktu Jakarta', Jakarta, Tokyo))
        })
    })
})

app.listen(8000)