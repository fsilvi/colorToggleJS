
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("colors");
    
    if (x.style.display === "block")  {
      x.style.display = "none";
    } else {
      x.style.display = "block";
  }
}

// Changing body color

var changeColor0 = document.getElementById('radiobtn0');
changeColor0.addEventListener("click",function()
{
    bodycolor.classList.add('buttonClass0');
});

var changeColor1 = document.getElementById('radiobtn1');
changeColor1.addEventListener("click",function()
{
    bodycolor.classList.add('buttonClass1');
});

var changeColor2 = document.getElementById('radiobtn2');
changeColor2.addEventListener("click",function()
{
    bodycolor.classList.add('buttonClass2');
});

var changeColor3 = document.getElementById('radiobtn3');
changeColor3.addEventListener("click",function()
{
    bodycolor.classList.add('buttonClass3');
});

var changeColor4 = document.getElementById('radiobtn4');
changeColor4.addEventListener("click",function()
{
    bodycolor.classList.add('buttonClass4');
});

