const SKIP_CHARS = 25

function getPennies()
{
  var x = document.getElementById("pennyPic").src
//  document.getElementsByClassName("debug")[0].innerHTML = x
  var i = SKIP_CHARS
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      return parseInt(c)
    }
    i++
  }
}

function getNickels()
{
  var x = document.getElementById("nickelPic").src
//  document.getElementsByClassName("debug")[0].innerHTML = x
  var i = SKIP_CHARS
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      return parseInt(c)
    }
    i++
  }
}

function getDimes()
{
  var x = document.getElementById("dimePic").src
//  document.getElementsByClassName("debug")[0].innerHTML = x
  var i = SKIP_CHARS
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      return parseInt(c)
    }
    i++
  }
}

function getQuarters()
{
  var x = document.getElementById("quarterPic").src
//  document.getElementsByClassName("debug")[0].innerHTML = x
  var i = SKIP_CHARS
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      return parseInt(c)
    }
    i++
  }
}

function getBills()
{
  var x = document.getElementById("billPic").src
//  document.getElementsByClassName("debug")[0].innerHTML = x
  var i = SKIP_CHARS
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      return parseInt(c)
    }
    i++
  }
}

function getDie1()
{
  var x = document.getElementById("die1").src
//  document.getElementsByClassName("debug")[0].innerHTML = x
  var i = SKIP_CHARS
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      return parseInt(c)
    }
    i++
  }
}

function getDie2()
{
  var x = document.getElementById("die2").src
//  document.getElementsByClassName("debug")[0].innerHTML = x
  var i = SKIP_CHARS
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      return parseInt(c)
    }
    i++
  }
}

document.getElementById("addDollar").addEventListener("click", function() {
  var money = getBills()
//  document.getElementsByClassName("debug")[0].innerHTML = money
  if (money < 1)
  {
    money++;
  }
  var source = "images/b" + money + ".jpg"

  document.getElementById("billPic").src = source
  document.getElementById("billPic").height = "80"
  document.getElementById("billPic").width = "150"
})

document.getElementById("subDollar").addEventListener("click", function() {
  var money = getBills()
//  document.getElementsByClassName("debug")[0].innerHTML = money
  if (money > 0)
  {
    money--;
  }
  var source = "images/b" + money + ".png"
  document.getElementById("billPic").src = source
})

document.getElementById("addQuarter").addEventListener("click", function() {
  var money = getQuarters()
//  document.getElementsByClassName("debug")[0].innerHTML = money
  if (money < 5)
  {
    money++;
  }
  var source = "images/q" + money + ".png"
  document.getElementById("quarterPic").src = source
})

document.getElementById("subQuarter").addEventListener("click", function() {
  var money = getQuarters()
//  document.getElementsByClassName("debug")[0].innerHTML = money
  if (money > 0)
  {
    money--;
  }
  var source = "images/q" + money + ".png"
  document.getElementById("quarterPic").src = source
})

document.getElementById("addDime").addEventListener("click", function() {
  var money = getDimes()
//  document.getElementsByClassName("debug")[0].innerHTML = money
  if (money < 5)
  {
    money++;
  }
  var source = "images/d" + money + ".png"
  document.getElementById("dimePic").src = source
})

document.getElementById("subDime").addEventListener("click", function() {
  var money = getDimes()
//  document.getElementsByClassName("debug")[0].innerHTML = money
  if (money > 0)
  {
    money--;
  }
  var source = "images/d" + money + ".png"
  document.getElementById("dimePic").src = source
})

document.getElementById("addNickel").addEventListener("click", function() {
  var nickels = getNickels()
//  document.getElementsByClassName("debug")[0].innerHTML = nickels
  if (nickels < 5)
  {
    nickels++;
  }
  var source = "images/n" + nickels + ".png"
  document.getElementById("nickelPic").src = source
})

document.getElementById("subNickel").addEventListener("click", function() {
  var nickels = getNickels()
//  document.getElementsByClassName("debug")[0].innerHTML = nickels
  if (nickels > 0)
  {
    nickels--;
  }
  var source = "images/n" + nickels + ".png"
  document.getElementById("nickelPic").src = source
})

document.getElementById("addPenny").addEventListener("click", function() {
  var pennies = getPennies()
//  document.getElementsByClassName("debug")[0].innerHTML = pennies
  if (pennies < 5)
  {
    pennies++;
  }
  var source = "images/p" + pennies + ".png"
  document.getElementById("pennyPic").src = source
})

document.getElementById("subPenny").addEventListener("click", function() {
  var pennies = getPennies()
//  document.getElementsByClassName("debug")[0].innerHTML = pennies
  if (pennies > 0)
  {
    pennies--;
  }
  var source = "images/p" + pennies + ".png"
  document.getElementById("pennyPic").src = source
})

document.getElementById("submitButton").addEventListener("click", function(){

//  document.getElementsByClassName("debug")[0].innerHTML = "Submit pressed"

  var total = document.getElementById('total').innerHTML
  total = total.trim()
  total = parseInt(total.charAt(1) + total.charAt(3) + total.charAt(4))

//  document.getElementsByClassName("debug")[0].innerHTML = total.toString()

  var pennies = getPennies()
  var nickels = getNickels()
  var dimes = getDimes()
  var quarters = getQuarters()
  var dollars = getBills()
  var money = (dollars * 100) + (quarters * 25) + (dimes * 10) + (nickels * 5) + pennies

//  document.getElementsByClassName("debug")[0].innerHTML = money.toString()

  //document.getElementsByClassName("debug")[0].innerHTML = "total = " + total + " and money = " + money

  if(total == money)
  {
    if(total > 99)
    {
      // WIN CONDITION
    //  document.getElementById('xyz').play()
      document.getElementById('cheerSound').play()
      alert("YOU WIN!! Refresh browser to play again.")
    }
    else
    {
      document.getElementById('xyz').play()
      document.getElementById("rollButton").disabled = false
      document.getElementById("submitButton").disabled = true
      var x = document.getElementsByClassName("coinManipulator")
      var i
      for(i = 0; i < x.length; i++)
      {
        x[i].disabled = true
      }
      var y = document.getElementsByClassName("coinManipulatorButton")
      var j
      for(j = 0; j < y.length; j++)
      {
        y[j].style.borderColor = "lightgray"
      }
    }
  }
  else {
    document.getElementById('abc').play()
    alert("Try again. The coins' value should equal the total")
  }
})

document.getElementById("rollButton").addEventListener("click", function (){
  document.getElementById('rollSound').play()
  document.getElementById("rollButton").disabled = true
  document.getElementById("submitButton").disabled = false
  var x = document.getElementsByClassName("coinManipulator")
  var i
  for(i = 0; i < x.length; i++)
  {
    x[i].disabled = false
  }
  var y = document.getElementsByClassName("coinManipulatorButton")
  var j
  for(j = 0; j < y.length; j++)
  {
    y[j].style.borderColor = "black"
  }
  var pennies = getPennies()
  const MIN = 1 // ('1' for 1-6, '0' for 0-9)
  const MAX = 6 // this number should be the maximum, plus (1 - MIN) ('6' for 1-6, '10', for 0-10)
  let die1 = Math.floor(Math.random()*MAX) + MIN
  let die2 = Math.floor(Math.random()*MAX) + MIN
  var source1 = "images/die" + die1 + ".png"
  var source2 = "images/die" + die2 + ".png"
  document.getElementById('die1').src = source1
  document.getElementById('die2').src = source2
  let total = document.getElementById('total').innerHTML
  total = total.trim()
  total = parseInt(total.charAt(1) + total.charAt(3) + total.charAt(4))
//  console.log(total)
//  console.log(die1)
//  if(total.charAt(0) != '$')
//  {
//    total = parseInt(total)
//  }
//  else if(total == "$0.00")
//  {
//    total = 0
//  }
//  else if(total.charAt(1) == '0')
//  {
//    total = parseInt(total.charAt(3) + total.charAt(4))
//  }
//  else
//  {
    // assumption, game ends shortly after a dollar is hit
//    total = parseInt(total.charAt(3) + total.charAt(4)) + 100
//  }
  total = total + die1 + die2
  if(total < 10)
  {
    total = "$0.0" + total
  }
  else if(total < 100)
  {
    total = "$0." + total
  }
  else
  {
    // assumption, game ends shortly after a dollar is hit
    total = total - 100
    if(total == 0)
    {
      total = "$1.00"
    }
    else if(total < 10)
    {
      total = "$1.0" + total
    }
    else{
      total = "$1." + total
    }
  }
  document.getElementById('total').innerHTML = total
})
