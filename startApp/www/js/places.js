const pos = {lat, long, head, pitch, zoom};
const place = {id, name, address, pos};

function Pos (lat, long, head, pitch, zoom) {
    this.latitude = lat;
    this.longitude = long;
    this.heading = head;
    this.pitch = pitch;
    this.zoom = zoom;
}

function Place (id, name, address, pos) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.pos = pos;
}



// let places = [new Place(1,"Stephen Sutton Log House", "1712 Longbourne St.", new Pos(39.0856379, -84.3943801, 75.54, 0, 1)),
//             new Place(2, "Miller-Leuser Log House", "6540 Clough Pike", new Pos(39.101747, -84.369583, 75, 0, 0.5)),
//             new Place(3, "John B. Bridges Home", "7216 Bridges Lane", new Pos(39.0899351, -84.3589903, 0, 0, 1)),
            // new Place(7, "Stephen Davis House (S. Corbley Home)", "2210 Salvador St. (Mt. Washington)", new Pos(39.0946252,	-84.3856005, 100, 0, 1)),
            // new Place(9, "Stephen Corbly (Dr. J.I. Richmond Home)",	"6703 Main St. (Newtown)", new Pos(39.1241926, -84.3689705, 180, 0, 1)),
            // new Place(14, "Marvin-Garard House ( NRHP)*", "6836 School St. (Newtown)", new Pos(39.129294, -84.359711, 30, 0, 1)),
            // new Place(16, "Old Mercer House", "6713 Main St. (Newtown)", new Pos(39.124148, -84.368629, 180, 0, 1)),
            // new Place(21, "Alyea-Hine Home", "1481 Sutton Rd.", new Pos(39.0805415, -84.3916325, 280, 0, 1)),
            // new Place(22, "John Mears Home", "6068 Heis Terrace (Mt. Washington)", new Pos(39.0814851, -84.3921075, 294, 7, 1)),
            // new Place(29, "R.W. Turpin Home (Moore Funeral Home)",	"6708 Main Street (Newtown)",	new Pos(39.1245713,	-84.3689508,	0,	0,	0.5)),
            new Place(31, "Corbly Home",	"6217 Crestview Place (Mt. Washington)",	new Pos(39.096932,	-84.386362,	145,	5,	1)),
            new Place(32, "Jonathon Corbly Home",	"2320 Beechmont Ave. (Mt. Washington)",	new Pos(39.0969245,	-84.3872746,	87,	7,	1.4)),
            new Place(33, "Oldest Res. in California",	"5929 Kellogg Avenue",	new Pos(39.0645174,	-84.4232712,	200,	0,	1)),
            new Place(40, "John H. Gerard Home (TP White Funeral Home)",	"2050 Beechmont Ave. (Mt. Washington)", new Pos(	39.0917584,	-84.3870005,	117,	5,	1)),
            new Place(41, "A.J.'s Road House (Old Coach Stop)",	"6735 Kellogg Road.",	new Pos(39.0499721,	-84.395334,	193,	0,	0.75)),
            // new Place(48, "Newtown Sch. (District #11)",	"3511 Debolt St. (Now Masonic Hall)",	new Pos(39.1250468,	-84.3654087,	285,	6,	1)),
            // new Place(60, "Regular Baptist Church (Now Fire Dept.)",	"3537 Church St. (Newtown)",	new Pos(39.1256365,	-84.3610881,	313,	0,	0.75)),
            // new Place(63, "Universalist Church & Odd Fellows Hall",	"3609 Church St. (Newtown)",	new Pos(39.1266264,	-84.3603927,	313,	7,	0.25)),
            // new Place(64, "St. Jerome Roman Catholic Church",	"Rohde Ave. & Honey St. (California)",	new Pos(39.066286,	-84.4258322,	333,	10,	0.4)),
            // new Place(65, "Salem United Methodist Church (NRHP)",	"SE Corner Salem & Sutton Rds",	new Pos(39.0749624, -84.3912865,	195,	5,	1 )),
            // new Place(66, "Methodist Episcopal Church",	"3546 Church St. (Newtown)", 	new Pos(39.1260376,	-84.3608001,	123,	10,	1)),
            // new Place(73, "Rose Hill Cemetery",	"Batavia Rd. (SR 32) @ Mt. Carmel Rd.",	new Pos(39.1139637,	-84.3105201,	0,	-10,	1)),
            // new Place(79, "Flag Spring Cemetery", null, new Pos(39.1272153, -84.3547002, 302, 0, 1)),
            // new Place(89, "Guardian Angels Cemetery", "N. Side of Beechmont Ave. at Salem", new Pos(39.0732434, -84.3607794, 0, 0, 1))
        ];

        var panorama;
      function initialize() {
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
              position: {lat: 37.869260, lng: -122.254811},
              pov: {heading: 165, pitch: 0},
              zoom: 1
            });
      }