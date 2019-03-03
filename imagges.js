var image = document.querySelector('img');
image.onclick  = function()
{
    var sorce=image.getAttribute('src');
    if(sorce==='image1.jpg')
    {
        image.setAttribute('src','image2.jpg');
    }
    else if(sorce==='image2.jpg')
    {
        image.setAttribute('src','image3.jpg');
    }
    else if(sorce==='image3.jpg')
    {
        image.setAttribute('src','image1.jpg');
    }
    
}
var myButton=document.querySelector('#i');
var myHeading=document.querySelector('h1');
function setUserName()
{
  var myName=prompt('Enter The Name:');
  localStorage.setItem('name',myName);
  myHeading.textContent='Well come to Profile'+' '+myName ;

}
if(!localStorage.getItem('name'))
{
    setUserName();

}
else
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Well come to Profile '+'  '  + storedName ;
}
myButton.onclick = function() {
    setUserName();
  }
