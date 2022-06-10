let get_btn = document.querySelector(".user_search_btn");
let inputed_city = document.querySelector(".user_input");

let first_sec = document.querySelector(".first_sec");
let secound_sec = document.querySelector(".sec_section");

let city_error = document.querySelector(".city_error");


get_btn.addEventListener("click",()=>{
    let user_city = inputed_city.value;
    let api = "3f68aace88fe410d990205817220906";
    
    let weather = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${user_city}&aqi=no`;

    fetch(weather).then(response=> response.json().then(result => weather_report(result)).catch(function error(err) {
        city_error.style.opacity = "1";
    }));
    
    let next_page_status_chk = document.querySelector(".next_page_status");
    function weather_report(report) {
        let current_tem = report.current.temp_c;
        let current_humidity = report.current.humidity;
        first_sec.style.opacity = "0";
        secound_sec.style.display = "block"

        let weather_replace_loc = document.querySelector(".weather_text");
        weather_replace_loc.innerText = current_tem + "°" + "C";

        let weather_loc_name = document.querySelector(".w_location");
        weather_loc_name.innerText = user_city;

        let weather_humidity_loc = document.querySelector(".w_humidity");
        weather_humidity_loc.innerText = current_humidity + "°" + "C";

        let current_weather_loc = document.querySelector(".c_weather");
        current_weather_loc.innerText = current_tem + "°" + "C";

        next_page_value = current_tem;

        setTimeout(()=>{
            first_sec.style.display ="none";
            first_sec.style.opacity ="1"
            next_page_status_chk.style.display = "none";
            secound_sec.style.opacity = "1"
            
        },1500)

    }

})



let geo_loc_btn = document.querySelector(".geo_btn");

geo_loc_btn.addEventListener("click", ()=>{

    alert("We are updating our service......This feture will update soon.")
    
})


