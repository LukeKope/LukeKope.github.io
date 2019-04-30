function getCoords(event){
  var xCord = event.clientX;
  var yCord = event.clientY;
  console.log(xCord,yCord);
  var newXCord = xCord - 50 + 'px';
  var newYCord = yCord - 50 + 'px';
  var oldTophat = document.getElementById('tophat');
  oldTophat.style.left = newXCord;
  oldTophat.style.top = newYCord;
  console.log(oldTophat.style.left, oldTophat.style.top);
}
