var b1 = document.getElementById("d1");
var b2 = document.getElementById("d2");
var b3 = document.getElementById("d3");
var b4 = document.getElementById("d4");
var b5 = document.getElementById("d5");
var b6 = document.getElementById("d6");
var b7 = document.getElementById("d7");

var font = document.body.style.fontSize;




function scrollh() {
    document.getElementById("Home").scrollIntoView({block: 'start', behavior: 'smooth'});
    
}
function scroll1() {
    document.getElementById("Section 1").scrollIntoView({block: 'start', behavior: 'smooth'});
}
function scroll2() {
    document.getElementById("Section 2").scrollIntoView({block: 'start', behavior: 'smooth'});
}
function scroll3() {
    document.getElementById("Section 3").scrollIntoView({block: 'start', behavior: 'smooth'});
}
function scroll4() {
    document.getElementById("Section 4").scrollIntoView({block: 'start', behavior: 'smooth'});
}
function scroll5() {
    document.getElementById("Section 5").scrollIntoView({block: 'start', behavior: 'smooth'});
}
function scroll6() {
    document.getElementById("Section 6").scrollIntoView({block: 'start', behavior: 'smooth'});
}

function smol()
{
    var size = 15+"px";
    document.body.style.fontSize = size; 
}

function medium()
{
    var size = 23+"px";
    document.body.style.fontSize = size; 
}

function large()
{
    var size = 30+"px";
    document.body.style.fontSize = size; 
}

function changeColor1()
{
   b1.style.backgroundColor = "black";
   b2.style.backgroundColor = "#31c87a";
   b3.style.backgroundColor = "black";
   b4.style.backgroundColor = "#31c87a";
   b5.style.backgroundColor = "black";
   b6.style.backgroundColor = "#31c87a";
   b7.style.backgroundColor = "black";
}

function changeColor2()
{
   b1.style.backgroundColor = "blue";
   b2.style.backgroundColor = "red";
   b3.style.backgroundColor = "blue";
   b4.style.backgroundColor = "red";
   b5.style.backgroundColor = "blue";
   b6.style.backgroundColor = "red";
   b7.style.backgroundColor = "blue";
}

function changeColor3()
{
   b1.style.backgroundColor = "rgb(220, 4, 144)";
   b2.style.backgroundColor = "rgb(136, 0, 255)";
   b3.style.backgroundColor = "rgb(220, 4, 144)";
   b4.style.backgroundColor = "rgb(136, 0, 255)";
   b5.style.backgroundColor = "rgb(220, 4, 144)";
   b6.style.backgroundColor = "rgb(136, 0, 255)";
   b7.style.backgroundColor = "rgb(220, 4, 144)";
}

function changeColor4()
{
   b1.style.backgroundColor = "rgb(250, 139, 28)";
   b2.style.backgroundColor = "rgb(5, 1, 112)";
   b3.style.backgroundColor = "rgb(250, 139, 28)";
   b4.style.backgroundColor = "rgb(5, 1, 112)";
   b5.style.backgroundColor = "rgb(250, 139, 28)";
   b6.style.backgroundColor = "rgb(5, 1, 112)";
   b7.style.backgroundColor = "rgb(250, 139, 28)";
}

function changeColor5()
{
   b1.style.backgroundColor = "rgb(146, 1, 1)";
   b2.style.backgroundColor = "rgb(2, 120, 57)";
   b3.style.backgroundColor = "rgb(146, 1, 1)";
   b4.style.backgroundColor = "rgb(2, 120, 57)";
   b5.style.backgroundColor = "rgb(146, 1, 1)";
   b6.style.backgroundColor = "rgb(2, 120, 57)";
   b7.style.backgroundColor = "rgb(146, 1, 1)";
}

function changeColor6()
{
   b1.style.backgroundColor = "rgb(32, 157, 235)";
   b2.style.backgroundColor = "rgb(68, 63, 40)";
   b3.style.backgroundColor = "rgb(32, 157, 235)";
   b4.style.backgroundColor = "rgb(68, 63, 40)";
   b5.style.backgroundColor = "rgb(32, 157, 235)";
   b6.style.backgroundColor = "rgb(68, 63, 40)";
   b7.style.backgroundColor = "rgb(32, 157, 235)";
}

function addUpdate()
{
    var Updates = document.getElementById("updates");
    var news = document.getElementById("newnews").value;
    if (news) {
        if(localStorage.length == 0)
        {
            Updates.innerHTML = '<tr><td> ->'+news+'</td></tr>';
        }
        else{Updates.innerHTML += '<tr><td> ->'+news+'</td></tr>';}
    
        localStorage.setItem("news"+localStorage.length, news);
        
    
        document.getElementById("newnews").value="";
    }
    

}

function LoadUpdates()
{
    var Updates = document.getElementById("updates");

    if(localStorage.length > 0)
    {   
        for(var i=0; i < localStorage.length; i++)
        {
            Updates.innerHTML += '<tr><td> -> '+localStorage.getItem("news"+i);+'</td></tr>';
        }
    }
    else
    {
        Updates.innerHTML = '<tr><td>Nothing to share :(</td></tr>';
    }
    
}

LoadUpdates();