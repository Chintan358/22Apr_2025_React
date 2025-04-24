
fetch("https://restcountries.com/v3.1/all")
.then(data=>{

   return data.json()
    
}).then(resp=>{
    
    var options = "";
    resp.map(ele=>{
        options+="<option>"+ele.name.common+"</option>"
    })
    country.innerHTML=options 
    
    
}).catch(err=>{
    console.log(err);
    
})