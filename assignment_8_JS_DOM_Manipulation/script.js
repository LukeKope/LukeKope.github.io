function counting_div1(){
  var div1 = document.getElementById("div1");
  var nodeList1 = div1.getElementsByTagName('p').length;
  alert("There are " + nodeList1 + " paragraph tags in div 1");
}

function counting_div2(){
  var div2 = document.getElementById("div2");
  var nodeList2 = div2.getElementsByTagName('p').length;
  alert("There are " + nodeList2 + " paragraph tags in div 2");
}


function total(){
 var total = document.getElementsByTagName('p').length;
 alert("There are " + total + " paragraph tags in total");
}

function spintext()
{
  document.getElementById('div1').style.transform = "rotate(4deg)";
}
