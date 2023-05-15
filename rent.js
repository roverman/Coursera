var listings = [
    {
    "Link":"https://chat.openai.com/chat",
    },
    {
    "Link":"https://chat.openai.com/chat",
    },
    {
    "Link":"https://chat.openai.com/chat",
    },
    {
    "Link":"https://chat.openai.com/chat",
    },
    {
    "Link":"https://chat.openai.com/chat",
    },
    {
    "Link":"https://chat.openai.com/chat",
    },
];


$.each(listings, function(){
    var listingCardString = '<div class="card rent-card"><img class="card-img-top" src="https://media.architecturaldigest.com/photos/62bdb5fda47d113b36863416/16:9/w_1738,h_977,c_limit/Mod%20Tree%202.jpeg" alt="Card image cap"><div class="card-body"><h5>次卧</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p></div></div>'
    $('#listings').append(listingCardString);
});



















function initMap() {
  const uluru = { lat: 40.7271548, lng: -74.0325778 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<img class="card-img-top" src="https://media.architecturaldigest.com/photos/62bdb5fda47d113b36863416/16:9/w_1738,h_977,c_limit/Mod%20Tree%202.jpeg" alt="Card image cap">' +
    '<h1 id="firstHeading" class="firstHeading">次卧</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;


