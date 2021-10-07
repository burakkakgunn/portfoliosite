function initM2ap(){
    var options ={
        center:{lat:41.015137 ,lng:28.979530},
        zoom: 8
    }
    map=new google.maps.Map(document.getElementById("map"),options)
} 
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }