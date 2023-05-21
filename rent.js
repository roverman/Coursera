// var myModal = new bootstrap.Modal(document.getElementById('fullscreenModal'));

var listings = [
    {
    "title":"Newport绝佳河景1B1B",
    "rate":"50",
    "neogitable":"Yes",
    "location":"Queens",
    "address":"310 Livington St, Newport, NJ",
    "lat":40.7271548,
    "lng":-74.0325778,
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"【户型】2b1b 厕所是公共的(在房间外面) 有客厅和厨房【家具】基本家具都有(床 书桌 椅子 储物柜 衣柜 灯etc) 有室内洗衣机和烘干机 厨房设施齐全 拿上必用品➕私人用品直接拎包入住😝【价格】(包水电费及wifi费用)(可商量)【交通】下楼步行4-5min到N/W/E/M/R/7号线 一站上岛 去NYU Parsons Ktown FIT Pratt Flushing都很方便【楼内设施】👨‍✈️24小时doorman  💪健身房  🏊‍♂️rooftop pool  🧘‍♀️yoga room  📖study room  🎲game room",
    "wechat":"L1lilxx1_s1ql",
    "cell":"284-342-5346",
    },
    {
    "title":"Grove超大卧室",
    "rate":"50",
    "neogitable":"True",
    "location":"Queens",
    "address":"310 Livington St, Newport, NJ",
    "lat":40.765261,
    "lng":-73.989881,
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"2b1b 厕所是公共的(在房间外面) 有客厅和厨房",
    "wechat":"cocolemon",
    "cell":"284-342-5346",
    },
    {
    "title":"LIC绝佳交通房",
    "rate":"50",
    "neogitable":"True",
    "location":"Queens",
    "address":"310 Livington St, Newport, NJ",
    "lat":40.749225,
    "lng":-73.936498,
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"",
    "wechat":"cocolemon",
    "cell":"284-342-5346",
    },
    {
    "title":"Manhattan绝佳河景房",
    "rate":"50",
    "neogitable":"True",
    "location":"Queens",
    "address":"310 Livington St, Newport, NJ",
    "lat":40.765255,
    "lng":-73.989877,
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"",
    "wechat":"cocolemon",
    "cell":"284-342-5346",
    },
    {
    "title":"Manhattan绝佳河景房222",
    "rate":"50",
    "neogitable":"True",
    "location":"Queens",
    "address":"310 Livington St, Newport, NJ",
    "lat":40.765256,
    "lng":-73.989878,
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"",
    "wechat":"cocolemon",
    "cell":"284-342-5346",
    },
    {
    "title":"Manhattan绝佳河景房3333",
    "rate":"50",
    "neogitable":"True",
    "location":"Queens",
    "address":"310 Livington St, Newport, NJ",
    "lat":40.766255,
    "lng":-73.989579,
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"",
    "wechat":"cocolemon",
    "cell":"284-342-5346",
    },
];


$.each(listings, function(i){
    var listingCardString = 
    '<div class="card-wrap col-lg-3 col-md-12"><div class="card"><img class="card-img-top" src="https://media.architecturaldigest.com/photos/62bdb5fda47d113b36863416/16:9/w_1738,h_977,c_limit/Mod%20Tree%202.jpeg" alt="Card image cap"><div class="card-body"><h5>'+
    listings[i].title +
    '</h5><h5 class="text-primary">$' +
    listings[i].rate +
    ' /night</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p></div></div></div>'
    $('#listings').append(listingCardString);
});







// Creating markers and their info window.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 40.731918, lng: -73.995016 },
  });

  // Create an info window to share between markers.
  const infowindow = new google.maps.InfoWindow();


  // Create the markers.
  listings.forEach((singleListing,i) => {
    var gpsData = [];
    gpsData.lat = singleListing.lat;
    gpsData.lng = singleListing.lng;

    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<img class="card-img-top" src="https://media.architecturaldigest.com/photos/62bdb5fda47d113b36863416/16:9/w_1738,h_977,c_limit/Mod%20Tree%202.jpeg" alt="Card image cap">' +
    '<h1 id="firstHeading" class="firstHeading">' + 
    singleListing.title +
    '</h5>' +
    '<h5 class="text-primary">' +
    singleListing.rate +
    ' /night</h5>' +
    '<div id="bodyContent">' +
    "<p>"+ 
    singleListing.description +
    "</p>" +
    '<button button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fullscreenModal">See Details</button>'+
    "</div>" +
    "</div>";

    const marker = new google.maps.Marker({
      position: gpsData,
      map,
      title: contentString,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infowindow.close();
      infowindow.setContent(marker.getTitle());
      infowindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;






