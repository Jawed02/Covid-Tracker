
// covid api --> https://covid19.mathdro.id/api


function fetchData() {
    fetch('https://covid19.mathdro.id/api')
    .then(response => { 
    return response.json();        
    })
 .then(data => {
     // console.log(data.confirmed.value);
     // console.log(data.recovered.value);
     // console.log(data.deaths.value);
     // console.log(data.image)
     // console.log(data.lastUpdate);

     // To get Data
     var Confirmed = data.confirmed.value;
     var Recovered = data.recovered.value;
     var Deaths = data.deaths.value;
     var last_updated = data.lastUpdate;
    //  var image_url = data.image;
    

     // To write in Web Browser
     document.getElementById("confirmed").innerHTML = Confirmed;
     document.getElementById("recovered").innerHTML = Recovered;
     document.getElementById("deaths").innerHTML = Deaths;
    //  document.getElementById("image").src = image_url;
    document.getElementById("last_updated").innerHTML = last_updated;
 })
 .catch(error => {
     console.log(error);
 });
}


fetchData();



let a;
        let date;
        let time;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval(() => {
            a = new Date(); 
            
            date = a.toLocaleDateString(undefined, options);
            time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            document.getElementById('time').innerHTML = time;
        }, 1000);
