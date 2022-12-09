



let h2 = document.querySelector('h2')
let h1 = document.querySelector('h1')
var map;

function success(pos){
//console.log()
h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`
    if(map=== undefined){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }else{
        map.remove()
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
    .bindPopup('Eu estou aqui.')
    .openPopup();
}

function error(err){
    alert('Error');

}


//posição movel.
//var watchId = navigator.geolocation.watchPosition(success,error);
//cancela a localizaçao ATUAL
//navigator.geolocation.clearWatch(watchId)
let real = document.getElementById('real')
let atual = document.getElementById('atual')
var watchId;
real.addEventListener('click',()=>{
    if(real.checked){
    
        h1.innerHTML='Localização em tempo real!'
        
    //pegando a posiscao mais precisa do usuario
     navigator.geolocation.watchPosition(success,error,{
        enableHighAccuracy: true, 
        //se demorar pegar a localizacao usa-se timeout para definir um momento de parar.
        timeout: 5000
    });
    
    }
        atual.addEventListener('click',()=>{
            if(atual.checked){
                h1.innerHTML='Localização atual!'
                //posição local parada.
            navigator.geolocation.getCurrentPosition(success,error);
            }

        })
       
    

})


