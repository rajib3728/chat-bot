let isplay=true
function fun2()
{
    document.getElementById("st1").style.backgroundColor="black";
    isplay=false;
}
function fun3()
{
    isplay=true;
    document.getElementById("st1").style.backgroundColor="midnightblue";
}
function fun1()
{   
 if(isplay)
 {
     fun2();
 }
 else{
     fun3();
 }
}
function fun4()
{
    window.open("https://sites.google.com/view/the-earth-infomation/home");
}