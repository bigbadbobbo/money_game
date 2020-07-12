const SKIP_CHARS = 27
const CHINESE_WORDS = 11

var used = []

function getChineseWord()
{
  var x = Math.floor(Math.random()*CHINESE_WORDS)
  if(used == null)
  {
    used.push(x)
    return x
  }
  else if(used.includes(x) == false)
  {
    used.push(x)
    return x
  }
  else
  {
    return getChineseWord()
  }
}

function getNonUsedWord()
{
  var a = Math.floor(Math.random()*CHINESE_WORDS)
  if(used == null)
  {
    return a
  }
  else if(used.includes(a) == false)
  {
    return a
  }
  else{
    return getNonUsedWord()
  }
}

function getNewWord(inArr)
{
  var word = getNonUsedWord()
  while(inArr.includes(word) == true)
  {
    word = getNonUsedWord()
  }
  return word
}

function getEnglishWords(chinese)
{
  var ret = []
  var gotAnswer = false
  ret.push(getNonUsedWord())
  while(ret.length < 4)
  {
    var newWord = getNewWord(ret)
    if(newWord == chinese)
    {
      gotAnswer = true
    }
    ret.push(newWord)
  }
  if(gotAnswer == true)
  {
    ret.push(getNewWord(ret))
  }
  else
  {
    ret.push(chinese)
  }
  return shuffle(ret)
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
  return array
}

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

function stripText(x)
{
  var i = SKIP_CHARS
  var leave = false
  var retVal
  while(i < x.length)
  {
    var c = x.charAt(i)
    if(c >= '0' && c <= '9')
    {
      while(c >= '0' && c <= '9')
      {
        if(retVal == null)
        {
          retVal = c
        }
        else
        {
          retVal = retVal + c
        }
        i++
        leave = true
        c = x.charAt(i)
      }
      if(leave == true)
      {
        return parseInt(retVal)
      }
    }
    i++
  }
}

function buttonListener()
{
  var buttonLabel = stripText(this.src)
  var chinese = stripText(document.getElementById("tile").src)
  if(chinese == buttonLabel)
  {
    // correct gotAnswer
    var x = getChineseWord()
    document.getElementById("tile").src = "images/chinese"+x.toString()+".png"
    var options = getEnglishWords(x)
    var i = 0
    while(i < buttons.length)
    {
      document.getElementById("e"+i).src = "images/english"+options[i]+".png"
      i++
    }
  }
  else{
    lastImage = document.getElementById("hammerpic").src
    if(lastImage.includes("hammer0.png"))
    {
      document.getElementById("hammerpic").src = "images/hammer1.png"
      document.getElementById("trashpic").src = "images/trash1.png"
      wait(500)
      document.getElementById("trashpic").src = "images/trash2.png"
    }
  }
}

function handleRightAnswer()
{
  var x = getChineseWord()
  document.getElementById("tile").src = "images/chinese"+x.toString()+".png"
  var options = getEnglishWords(x)
//  document.getElementsByClassName("debug")[0].innerHTML = "images/english"+options[0].toString()+".png"
  document.getElementById("ei0").src = "images/english"+options[0].toString()+".png"
  document.getElementById("ei1").src = "images/english"+options[1].toString()+".png"
  document.getElementById("ei2").src = "images/english"+options[2].toString()+".png"
  document.getElementById("ei3").src = "images/english"+options[3].toString()+".png"
  document.getElementById("ei4").src = "images/english"+options[4].toString()+".png"
  lastImage = document.getElementById("robotpic").src
  if(lastImage.includes("robot0.png"))
  {
    document.getElementById("robotpic").src = "images/robot1.png"
  }
  else if(lastImage.includes("robot1.png"))
  {
    document.getElementById("robotpic").src = "images/robot2.png"
  }
  else if(lastImage.includes("robot2.png"))
  {
    document.getElementById("robotpic").src = "images/robot3.png"
  }
  else if(lastImage.includes("robot3.png"))
  {
    document.getElementById("robotpic").src = "images/robot4.png"
  }
  else if(lastImage.includes("robot4.png"))
  {
    document.getElementById("robotpic").src = "images/robot5.png"
  }
  else
  {
    // WIN CONDITION

    //disable button
    document.getElementById("e0").disabled = true
    document.getElementById("e1").disabled = true
    document.getElementById("e2").disabled = true
    document.getElementById("e3").disabled = true
    document.getElementById("e4").disabled = true

    const TIME_INTERVAL = 500

    document.getElementById("robotpic").src = "images/robot6.png"
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot7.png"
    }, TIME_INTERVAL)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot8.png"
    }, TIME_INTERVAL*2)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot9.png"
    }, TIME_INTERVAL*3)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot10.png"
    }, TIME_INTERVAL*4)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot11.png"
    }, TIME_INTERVAL*5)

    // WIN
    setTimeout(function(){
      alert("YOU WIN!! Refresh browser to play again.")
    }, TIME_INTERVAL*6)
  }
}

function handleWrongAnswer()
{
  lastImage = document.getElementById("hammerpic").src
  lastTrashImage = document.getElementById("trashpic").src
  lastSignImage = document.getElementById("signpic").src
  lastLampImage = document.getElementById("lamppic").src
  if(lastImage.includes("hammer0.png"))
  {
    document.getElementById("hammerpic").src = "images/hammer1.png"
    document.getElementById("trashpic").src = "images/trash1.png"
    document.getElementById("trashpic").width = "120"
    document.getElementById("trashpic").height = "120"
    document.getElementById("trashpic").src = "images/trash1.png"
    setTimeout(function(){
      document.getElementById("trashpic").src = "images/trash2.png"
    }, 500)
  }
  else if(lastTrashImage.includes("trash2.png"))
  {
    document.getElementById("trashpic").src = "images/trash3.png"
    document.getElementById("signpic").src = "images/sign1.png"
    setTimeout(function(){
      document.getElementById("signpic").src = "images/sign2.png"
    }, 500)
  }
  else if(lastSignImage.includes("sign2.png"))
  {
    document.getElementById("signpic").src = "images/sign3.png"
    document.getElementById("lamppic").src = "images/lamp1.png"
    setTimeout(function(){
      document.getElementById("lamppic").src = "images/lamp2.png"
    }, 500)
  }
  else if(lastLampImage.includes("lamp2.png"))
  {
    // LOSE
    //disable button
    document.getElementById("e0").disabled = true
    document.getElementById("e1").disabled = true
    document.getElementById("e2").disabled = true
    document.getElementById("e3").disabled = true
    document.getElementById("e4").disabled = true

    // animate
    const TIME_INTERVAL = 500

    document.getElementById("lamppic").src = "images/lamp3.png"
    setTimeout(function(){
      document.getElementById("lamppic").src = "images/lamp4.png"
      document.getElementById("robotpic").src = "images/robotx.png"
    }, 500)

/*    document.getElementById("robotpic").src = "images/robot6.png"
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot7.png"
    }, TIME_INTERVAL)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot8.png"
    }, TIME_INTERVAL*2)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot9.png"
    }, TIME_INTERVAL*3)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot10.png"
    }, TIME_INTERVAL*4)
    setTimeout(function(){
      document.getElementById("robotpic").src = "images/robot11.png"
    }, TIME_INTERVAL*5)*/

    // WIN
    setTimeout(function(){
      alert("Better luck next time! Refresh browser to play again.")
    }, TIME_INTERVAL*2)

  }

}

document.getElementById("e0").addEventListener("click", function(){
  var buttonLabel = stripText(document.getElementById("ei0").src)
  var chinese = stripText(document.getElementById("tile").src)
  if(chinese == buttonLabel)
  {
    // correct gotAnswer
    handleRightAnswer()
  }
  else{
    handleWrongAnswer()
  }
})

document.getElementsByClassName("debug")[0].innerHTML = "roll pressed"

document.getElementById("e1").addEventListener("click", function(){
  var buttonLabel = stripText(document.getElementById("ei1").src)
  var chinese = stripText(document.getElementById("tile").src)
  if(chinese == buttonLabel)
  {
    // correct gotAnswer
    handleRightAnswer()
  }
  else{
    handleWrongAnswer()
  }
})

document.getElementById("e2").addEventListener("click", function(){
  var buttonLabel = stripText(document.getElementById("ei2").src)
  var chinese = stripText(document.getElementById("tile").src)
  if(chinese == buttonLabel)
  {
    // correct gotAnswer
    handleRightAnswer()
  }
  else{
    handleWrongAnswer()
  }
})
document.getElementById("e3").addEventListener("click", function(){
  var buttonLabel = stripText(document.getElementById("ei3").src)
  var chinese = stripText(document.getElementById("tile").src)
  if(chinese == buttonLabel)
  {
    // correct gotAnswer
    handleRightAnswer()
  }
  else{
    handleWrongAnswer()
  }
})
document.getElementById("e4").addEventListener("click", function(){
  var buttonLabel = stripText(document.getElementById("ei4").src)
  var chinese = stripText(document.getElementById("tile").src)
  if(chinese == buttonLabel)
  {
    // correct gotAnswer
    handleRightAnswer()
  }
  else{
    handleWrongAnswer()
  }
})
