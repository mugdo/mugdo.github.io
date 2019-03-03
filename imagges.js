var mayimage = document.querySelector('img');
mayimage.onclick  = function()
{
    var maysorce=mayimage.getAttribute('src');
    if(maysorce==='images/image1.jpg')
    {
        mayimage.setAttribute('src','images/image2.jpg');
    }
    else if(maysorce==='images/image2.jpg')
    {
        mayimage.setAttribute('src','images/image3.jpg');
    }
    else if(maysorce==='images/image3.jpg')
    {
        mayimage.setAttribute('src','images/image1.jpg');
    }
    
}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName()
{
  var myName=prompt('Please Enter your Name.');
  localStorage.setItem('name',myName);
  myHeading.textContent='Well come to'+' '+myName +' '+' profile';

}
if(!localStorage.getItem('name'))
{
    setUserName();

}
else
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Well come to '+'  '  + storedName + ' '+' profile';
}
myButton.onclick = function() {
    setUserName();
  }