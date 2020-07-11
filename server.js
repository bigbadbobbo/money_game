const express = require("express")
const app = express()

app.set('view-engine', 'ejs')
app.set('port', 4000)

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/money', (req, res) => {
  res.render('money.ejs')
})

app.get('/chinese', (req, res) => {
  res.render('chinese.ejs')
})

app.listen(4000, function(){
  console.log("Server started on port 4000");
});
