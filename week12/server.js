const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4001

app.use(bodyParser.json())
app.use(cors())

app.post('/test1', (req, res) => {
    console.log(req.body.input)
    // mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    //     const db = client.db(dbName)
    //     db.collection('users').findOne({ username: req.body.username }, (err, result) => {
    //         if (err) throw err
    //         if (result === null) {
    //             const newUser = {
    //                 username: req.body.username,
    //                 email: req.body.email,
    //                 password: req.body.password,
    //                 firstname: req.body.firstname,
    //                 lastname: req.body.lastname,
    //                 sex: req.body.sex,
    //                 country: req.body.country,
    //                 education: req.body.education,
    //             };
    //             db.collection('users').insertOne(newUser, (err, result) => {
    //                 if (err) throw err
    //                 client.close()
    //                 res.json({ status: true })
    //             })
    //         } else {
    //             res.json({ status: false })
    //             client.close()
    //         }
    //     })
    // })
})


app.listen(port, () => {
    console.log(`App listening on ${port}`)
})