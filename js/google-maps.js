function initMap() {
    // Latitude and Longitude dari  posisi Yogyakarta, indonesia
    var myLatLng= {lat:-7.797068, lng:110.370529};
    //var myLatLng = {lat: -6.207690, lng: 106.985270};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 15,
        //17
      //  coomment  in js 
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        // masukkan  lokasi yogyakarta  indonesia 
        title: 'Yogyakarta, Indonesia' // Title Location
    });
}