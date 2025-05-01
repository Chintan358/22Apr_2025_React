
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "aHAwSE1FQUpHMExPYU95TmZJT2g2c29iTFpyN0NOVWc1eUk5emZKbw==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};


fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(data=>{

   return data.json()
    
}).then(resp=>{
    
    
    
    var options = "";
    resp.map(ele=>{
        options+="<option value='"+ele.iso2+"'>"+ele.name+"</option>"
    })
    country.innerHTML=options 
    
    
}).catch(err=>{
    console.log(err);
    
})

var countryid
const getstates = (cid)=>{
    
    countryid=cid
                fetch(`https://api.countrystatecity.in/v1/countries/${cid}/states`, requestOptions)
            .then(data=>{

            return data.json()
                
            }).then(resp=>{
                
                
                
                var options = "";
                resp.map(ele=>{
                    options+="<option value='"+ele.iso2+"'>"+ele.name+"</option>"
                })
                state.innerHTML=options 
                
                
            }).catch(err=>{
                console.log(err);
                
            })
}

var stateid
const getcities = (sid)=>{

    stateid=sid
    fetch(`https://api.countrystatecity.in/v1/countries/${countryid}/states/${sid}/cities`, requestOptions)
    .then(data=>{

    return data.json()
        
    }).then(resp=>{
        
        
        
        var options = "";
        resp.map(ele=>{
            options+="<option value='"+ele.name+"'>"+ele.name+"</option>"
        })
        ct.innerHTML=options 
        
        
    }).catch(err=>{
        console.log(err);
        
    })



}


const weatherapp = (lat,lng)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1b274b6a8139a5eeae5571f298f7258e&units=metric`)
    .then(resp=>{
        return resp.json()
    }).then(data=>{
        temp.innerHTML = data.main.temp
        pressure.innerHTML = data.main.pressure
        humidity.innerHTML = data.main.humidity
        city.innerHTML = data.name

       

        // console.log(`
            
        //     temp : ${temp}
        //     pressure : ${pressure}
        //     humidity : ${humidity}
        //     city : ${city}
            
        //     `);
        
        
    }).catch(err=>{
        console.log(err);
        
    })
}

const geocode = (city)=>{

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=fe714c15cc3041939a0dae4cc4211042`)
    .then(resp=>{
        return resp.json()
    }).then(data=>{
        lat  = data.results[0].geometry.lat;
        lng  = data.results[0].geometry.lng;
        weatherapp(lat,lng)
    }).catch(err=>{
        console.log(err)
    })

}

const checkweather = (city)=>{
    var cityname = city+","+stateid+","+countryid
    geocode(cityname)
}
