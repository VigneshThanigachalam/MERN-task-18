var div_1= document.createElement("div");
div_1.className="container mt-5 row mx-auto";

var div_2= document.createElement("div");
div_2.className="card col col-lg-4 col-sm-12 p-0";
div_2.id="card-1";

var div_3= document.createElement("h1");
div_3.className="card-header text-center";
div_3.innerHTML="India";
div_3.id="title";
div_2.appendChild(div_3);


var div_4= document.createElement("div");
div_4.className="card-body";
// var p_1= document.createElement("div");
// p_1.className="card-header text-center bg-warning";
var img_1=document.createElement("img");
img_1.className="img-responsive";
img_1.src="https://flagcdn.com/w320/in.png";
div_4.appendChild(img_1);


var div_t=document.createElement("div");
div_t.className="text-center mt-4";

var p1=document.createElement("p");
p1.innerHTML="Capital:Delhi";
div_t.appendChild(p1);
var p2=document.createElement("p");
p2.innerHTML="Region:Asia"
div_t.appendChild(p2);
var p3=document.createElement("p");
p3.innerHTML="Country_code:IND"
div_t.appendChild(p3);

div_4.appendChild(div_t);


var div_5=document.createElement("div");
div_5.className="container text-center mb-2";


var btn1=document.createElement("button");
btn1.className="btn btn-primary mx-auto";
btn1.innerHTML="check for weather";
btn1.setAttribute("onclick","fetch_weather('India','1')");

div_5.appendChild(btn1);

var div_6=document.createElement("div");
div_6.className="container text-center";
div_6.id="weather_data_1";

div_5.appendChild(div_6);
div_2.appendChild(div_4);
div_2.appendChild(div_5);

// //card 2

var div_2_2= document.createElement("div");
div_2_2.className="card col col-lg-4 col-sm-12 p-0";

var div_3_2= document.createElement("div");
div_3_2.className="card-header text-center";
div_3_2.innerHTML="Afghanistan";
div_2_2.appendChild(div_3_2);


var div_4_2= document.createElement("div");
div_4_2.className="card-body";
// var p_1= document.createElement("div");
// p_1.className="card-header text-center bg-warning";
var img_1_2=document.createElement("img");
img_1_2.className="img-responsive";
img_1_2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png";
div_4_2.appendChild(img_1_2);


var div_t_2=document.createElement("div");
div_t_2.className="text-center mt-4";

var p1_2=document.createElement("p");
p1_2.innerHTML="Capital:Kabul";
div_t_2.appendChild(p1_2);
var p2_2=document.createElement("p");
p2_2.innerHTML="Region:Asia"
div_t_2.appendChild(p2_2);
var p3_2=document.createElement("p");
p3_2.innerHTML="Country_code:AFG"
div_t_2.appendChild(p3_2);

div_4_2.appendChild(div_t_2);


var div_5_2=document.createElement("div");
div_5_2.className="container text-center mb-2";


var btn1_2=document.createElement("button");
btn1_2.className="btn btn-primary mx-auto";
btn1_2.innerHTML="check for weather";
btn1_2.setAttribute("onclick","fetch_weather('Afghanistan','2')");


div_5_2.appendChild(btn1_2);

var div_6_2=document.createElement("div");
div_6_2.className="container text-center";
div_6_2.id="weather_data_2";
div_5_2.appendChild(div_6_2);
div_2.appendChild(div_4);
// div_2.appendChild(div_6);
div_2.appendChild(div_5);
div_2_2.appendChild(div_4_2);
div_2_2.appendChild(div_5_2);


// // card 3

var div_2_3= document.createElement("div");
div_2_3.className="card col col-lg-4 col-sm-12 p-0";
div_2_3.id="weather_data";

var div_3_3= document.createElement("div");
div_3_3.className="card-header text-center";
div_3_3.innerHTML="Albania";
div_2_3.appendChild(div_3_3);


var div_4_3= document.createElement("div");
div_4_3.className="card-body";
// var p_1= document.createElement("div");
// p_1.className="card-header text-center bg-warning";
var img_1_3=document.createElement("img");
img_1_3.className="img-responsive";
img_1_3.src="https://flagcdn.com/w320/al.png";
div_4_3.appendChild(img_1_3);


var div_t_3=document.createElement("div");
div_t_3.className="text-center mt-4";

var p1_3=document.createElement("p");
p1_3.innerHTML="Capital:Tirana";
div_t_3.appendChild(p1_3);
var p2_3=document.createElement("p");
p2_3.innerHTML="Region:Europe"
div_t_3.appendChild(p2_3);
var p3_3=document.createElement("p");
p3_3.innerHTML="Country_code:ALB"
div_t_3.appendChild(p3_3);

div_4_3.appendChild(div_t_3);


var div_5_3=document.createElement("div");
div_5_3.className="container text-center mb-2";


var btn1_3=document.createElement("button");
btn1_3.className="btn btn-primary mx-auto";
btn1_3.innerHTML="check for weather";
btn1_3.setAttribute("onclick","fetch_weather('Albania','3')");

div_5_3.appendChild(btn1_3);

var div_6_3=document.createElement("div");
div_6.className="container text-center";
div_6_3.id="weather_data_3";;

div_5_3.appendChild(div_6_3)
div_2_3.appendChild(div_4_3);
div_2_3.appendChild(div_5_3);

div_1.appendChild(div_2);
div_1.appendChild(div_2_2);
div_1.appendChild(div_2_3);

// alert("hi")
document.body.appendChild(div_1);

function fetch_weather(country,card_number){
    // alert(country+card_number);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=69f4aafc5eec73e45327babebaab487a`)
    .then((response)=>response.json()).then((data)=>{
        document.getElementById("weather_data_"+card_number).innerHTML=data.weather[0].description;
    })
}