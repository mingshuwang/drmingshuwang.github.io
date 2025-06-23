function m(){if($("#map").length){let n=$("#map-provider").val(),e=$("#map-lat").val(),t=$("#map-lng").val(),o=parseInt($("#map-zoom").val()),p=$("#map-dir").val(),l=$("#map-api-key").val();if(n==="google")new GMaps({div:"#map",lat:e,lng:t,zoom:o,zoomControl:!0,zoomControlOpt:{style:"SMALL",position:"TOP_LEFT"},streetViewControl:!1,mapTypeControl:!1,gestureHandling:"cooperative"}).addMarker({lat:e,lng:t,click:function(){let r="https://www.google.com/maps/place/"+encodeURIComponent(p)+"/@"+e+","+t+"/";window.open(r,"_blank")},title:p});else{let a=new L.map("map").setView([e,t],o);n==="mapbox"&&l.length?L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xA9 <a href="http://mapbox.com">Mapbox</a>',tileSize:512,maxZoom:18,zoomOffset:-1,id:"mapbox/streets-v11",accessToken:l}).addTo(a):L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(a);// ① 创建带独立 class 的自定义图标
let customIcon = L.icon({
  iconUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  className: "no-bg-marker"          // ← 关键：独占 class
});

// ② 用这个图标放置 marker
let r = L.marker([e, t], { icon: customIcon }).addTo(a);
r.bindPopup(p+'<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route='+i+'">Routing via OpenStreetMap</a></p>')}}}document.addEventListener("DOMContentLoaded",function(){m()});
