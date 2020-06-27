
  var scores =
[60, 50, 60, 58, 54, 54,
58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51,
69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18,
41, 53, 55, 61, 51, 44];

var result = document.querySelector("#result");
var text = "";
for(var i = 0; i<scores.length; i++)
{
  text += "Bubble solution #"+i+" score: "+scores[i]+"<br>";
}
result.innerHTML = text;

var total = scores.length;
document.querySelector("#totals").innerHTML = total;

//HighScore
var highestScore = scores[0];
for(var i =0;i<=scores.length;i++)
{
  
  console.log(highestScore);
  
  var next = scores[i+1];
  console.log(next);
  

if(highestScore < next)
{
  highestScore = next;
  console.log("New high: "+highestScore);
  
}
if(highestScore == next)
{
  continue;
}
else
{
  continue;
}

}
document.querySelector("#highScore").innerHTML = highestScore;

var highScoreText = "";
for(var i = 0; i<scores.length; i++)
{
  if(scores[i] == highestScore)
  {
    highScoreText += "#"+i+"<br>";
  }
}

document.querySelector("#highScoreIndex").innerHTML = highScoreText;
