 async function weather(){
        cityname=document.getElementById("in").value;
            APIkey='5fc84481d6f2b6865126e89d7219c125';
            targeturl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;
            try{
                const response=await fetch(targeturl);
                const a=await response.json();
                function dis(){
                    document.getElementById('item').style.backgroundColor=" rgb(200, 200, 200)";
                    document.getElementById('he').innerHTML=`Place : ${a.name}`;
                    document.getElementById('1').innerHTML=`Sky : ${a.weather[0].main}`;
                    document.getElementById('2').innerHTML=`Temperature : ${(a.main.temp-273.14).toFixed(2)}°C`;
                    document.getElementById('3').innerHTML=`Humidity : ${a.main.humidity}`;
                }
                 b=a.weather[0].main
                // b="Rain"
                
                switch(b){
                    case "Clouds":
                        document.body.style.backgroundImage="url('https://images.pexels.com/photos/479333/pexels-photo-479333.jpeg?cs=srgb&dl=atmosphere-background-beautiful-479333.jpg&fm=jpg')";
                        document.getElementById("cloud").src="vecteezy_cloud-png-with-ai-generated_26774603.png";
                        document.getElementById("cloud").style.animation="c 10s infinite"
                        document.getElementById("cloud").style.width="500px"
                        document.getElementById("cloud").style.opacity="0.4"

                         document.getElementById("cloud1").src="vecteezy_cloud-png-with-ai-generated_26774603.png";
                        document.getElementById("cloud1").style.animation="c 10s infinite"
                        document.getElementById("cloud1").style.width="500px"
                        document.getElementById("cloud1").style.opacity="0.4"
                        break;
                    case "Clear":
                         document.getElementById("cloud").src="";
                        document.body.style.backgroundImage="url('https://img.freepik.com/premium-photo/summer-clear-blue-sky-with-blurred-clouds_436068-1423.jpg')";
                        break;
                    case "Rain":
                        document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/164284.jpg')";
                        document.body.style.backgroundPosition="top";
                        document.body.style.backgroundSize="100%"
                        document.getElementById("cloud").src="pngwing.com.png";
                        document.getElementById("cloud").style.animation="r 10s infinite";
                        document.getElementById("cloud").style.width="110%";
                        document.getElementById("cloud1").src="";
                        
                        break;
                }


                dis();
                console.log(a)
            }catch(error){
                console.error(error);
            }
            }
                document.getElementById('bu').addEventListener("click",function(){
                    weather();
                })
        