function squareNumber(square_num){
  var square = document.getElementById('square-input').value;
  var square_rounded = (square**2).toFixed(2);
  console.log("The result of squaring the number " + square + " is " + square_rounded);
  document.getElementById('square-result').innerHTML = "The result of squaring the number " + square + " is " + square_rounded;
  return square_rounded;
}



function halfNumber()
{
  var half = document.getElementById('half-input').value;
  var half_rounded = (half/2).toFixed(2)
  console.log("Half of " + half + " is " + half_rounded);
  document.getElementById('half-result').innerHTML = "Half of " + half + " is " + half_rounded;
  return half_rounded;
}


function percentOf()
{
  var num1 = document.getElementById('percent1-input').value;
  var num2 = document.getElementById('percent2-input').value;
  var percent = ((num1/num2)*100).toFixed(2);
  console.log(num1 + " is " + percent + "% of " + num2);
  document.getElementById('percent-result').innerHTML = num1 + " is " + percent + "% of " + num2;
  return percent;
}

function areaOfCircle()
{
  var radius = document.getElementById('area-input').value;
  var area = (Math.PI*radius**2).toFixed(2);
  console.log("The area of a circle with radius " + radius + " is " + area);
  document.getElementById('area-result').innerHTML = "The area of a circle with radius " + radius + " is " + area;
  return area;
}
