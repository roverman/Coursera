var listings = [
    {
    "title":"Newport绝佳河景1B1B",
    "rate":"50",
    "neogitable":"Yes",
    "location":"Queens",
    "address":"310 Livington St, Newport, NJ",
    "lat":"40.7271548",
    "lng":"-74.0325778",
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
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"",
    "wechat":"cocolemon",
    "cell":"284-342-5346",
    },
    {
    "title":"LIC绝佳河景房",
    "rate":"50",
    "neogitable":"True",
    "location":"Queens",
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
    "startDate":"08/12/2023",
    "endDate":"08/19/2023",
    "minStay":"5",
    "description":"",
    "wechat":"cocolemon",
    "cell":"284-342-5346",
    },
    {
    "Link":"https://chat.openai.com/chat",
    },
    {
    "Link":"https://chat.openai.com/chat",
    },
];


$.each(listings, function(i){
    var listingCardString = '<div class="card-wrap col-lg-4 col-md-12"><div class="card"><img class="card-img-top" src="https://media.architecturaldigest.com/photos/62bdb5fda47d113b36863416/16:9/w_1738,h_977,c_limit/Mod%20Tree%202.jpeg" alt="Card image cap"><div class="card-body"><h5>'+ listings[i].title +'</h5><h5 class="text-primary">$'+ listings[i].rate +' /night</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p></div></div></div>'
    $('#listings').append(listingCardString);
});



















function initMap() {
  const uluru = { lat: 40.7271548, lng: -74.0325778 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<img class="card-img-top" src="https://media.architecturaldigest.com/photos/62bdb5fda47d113b36863416/16:9/w_1738,h_977,c_limit/Mod%20Tree%202.jpeg" alt="Card image cap">' +
    '<h1 id="firstHeading" class="firstHeading">' + 
    listings[0].title +
    '</h1>' +
    '<div id="bodyContent">' +
    "<p>"+ listings[0].description
    "</p>" +
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


