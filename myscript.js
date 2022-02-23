
function fun4()
{
    window.open("https://sites.google.com/view/the-earth-infomation/home");
}
function fun1()
{
    var x=document.getElementById("fname").value;
    var y="Welcome"+" "+x;
   var m= document.getElementsByClassName("st1");
   m[0].innerHTML=y;
}
function link1()
{
    window.open("https://www.facebook.com/pg/Science-1778206192281235/about/");
}
function link2()
{
    window.open("https://www.instagram.com/rajibpaul50/");
}
function link3()
{
    window.open("http://www.linkedin.com/in/rajib-paul-07162a1a6");
}
function link4()
{
    window.open("https://twitter.com/RajibPa31549908");
}
function link5()
{
    window.open("https://www.youtube.com/channel/UCAOU5SZ8vN-lFly3ZD3pDyA");
}
function fun2()
{
    var x=document.getElementById("fname").value;
    var y="hello"+" "+x+" "+"give me instruction";
   var m= document.getElementById("st8");
   m.innerHTML="Bot:"+" "+y;
}
function cam()
{
   window.open("cam.html")
}
function song1()
{
    window.open("https://rajib3728.github.io/bengali/")
}
function song2()
{
    window.open("https://rajib3728.github.io/hindi/")
}
function song3()
{
window.open("https://rajib3728.github.io/english/")
}
function movie()
{
    window.open("https://www.mxplayer.in/");
}
function youtube()
{
    window.open("https://www.youtube.com/");
}
function fun3()
{
    var a=document.getElementById("chat").value;
    var b=document.getElementById("st9");
    b.innerHTML="you:"+" "+a;
    if(a=="open camera" || a=="open webcam")
    {
 
  var m= document.getElementById("st8");
  m.innerHTML="Bot: ok";
  cam();
    }
    else if(a=="bengali song" || a=="bengali music" || a=="play bengali song" || a=="play bengali music")
    {
        
        var m= document.getElementById("st8");
        m.innerHTML="Bot: ok";
        song1();
    }
    else if(a=="hindi song" ||a=="hindi music" || a=="play hindi song"|| a=="play hindi music")
    {
       
        var m= document.getElementById("st8");
        m.innerHTML="Bot: ok";
        song2();
    }
    else if(a=="english song" || a=="play english song")
    {
       
        var m= document.getElementById("st8");
        m.innerHTML="Bot: ok";
        song3();
    }
    else if(a=="movie site"|| a=="open movie site")
    {
     
        var m= document.getElementById("st8");
        m.innerHTML="Bot: ok";
        movie();
    }
    else if(a=="open youtube" || a=="youtube")
    {
        
        var m= document.getElementById("st8");
        m.innerHTML="Bot: ok";
        youtube();
    }
    else if(a=="who is rajib"|| a=="rajib" ||a=="tell about rajib" || a=="tell me about rajib")
    {
        var m= document.getElementById("st8");
   m.innerHTML="BOt:Rajib paul is a boy who prefer to invent new thing" ;
    }
    else if(a=="facebook" ||a=="open facebook" ||a=="open facebook website" || a=="open facebook app")
    {
        var m= document.getElementById("st8");
        m.innerHTML="Bot:ok" ;
        window.open("https://www.facebook.com/");
    }
    else if(a=="instragram" || a=="open instragram" ||a=="open instragram website" || a=="open instragram app")
    {
        var m= document.getElementById("st8");
        m.innerHTML="Bot:ok" ;
        window.open("https://www.instagram.com/")
    }
    else if(a=="what is your name" || a=="your name" || a=="who are you")
    {
        var m= document.getElementById("st8");
        m.innerHTML="Bot:I am chat bot" ;   
    }
    else if(a=="play sad song" || a=="sad song" || a=="sad music" || a=="play sad music")
    {
        var m= document.getElementById("st8");
        m.innerHTML="Bot:ok" ;
        window.open("https://www.youtube.com/results?search_query=sad+song");
    }
    else if(a=="hello" || a=="hi")
    {
        var m= document.getElementById("st8");
        m.innerHTML="Bot:how can i help you" ;  
    }
    else if(a=="what is your age" || a=="your age")
    {
        var m= document.getElementById("st8");
        // program to display the date
        // get local machine date time
       const date = new Date();

       // get the date as a string
       const n = date.toDateString();

       // get the time as a string
       const time = date.toLocaleTimeString();

      // display date
      console.log('Date: ' + n);

      // display time
      console.log('Time: ' + time);
        m.innerHTML="Bot:my age is current time and date"+" "+time+" "+n ;   
    }
    else if(a=="i love you" || a=="i want to marry you" || a=="will you marry me")
    {
        var m= document.getElementById("st8");
        m.innerHTML="Bot:i am a program i can't love human" ;   
    }
    else{
        var m= document.getElementById("st8");
        m.innerHTML="Bot:tring to search" ;
        //console.log(a);
        const arr=a.split(" ");
        //console.log(arr)
        let output=arr.join("+");
        //console.log(output);
        var total="https://www.google.com/search?q="+output;
        window.open(total);
    }
}

