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



let places = [new Place(1,"Stephen Sutton Log House", "1712 Longbourne St.", new Pos(39.0856379, -84.3943801, 75.54, 0, 1)),
            new Place(2, "Miller-Leuser Log House", "6540 Clough Pike", new Pos(39.101747, -84.369583, 75, 0, 0.5)),
            new Place(3, "John B. Bridges Home", "7216 Bridges Lane", new Pos(39.0899351, -84.3589903, 0, 0, 1)),
            new Place(7, "Stephen Davis House (S. Corbley Home)", "2210 Salvador St. (Mt. Washington)", new Pos(39.0946252,	-84.3856005, 100, 0, null)),
            new Place(9, "Stephen Corbly (Dr. J.I. Richmond Home)",	"6703 Main St. (Newtown)", new Pos(39.1241926, -84.3689705, 180, null, null)),
            new Place(14, "Marvin-Garard House ( NRHP)*", "6836 School St. (Newtown)", new Pos(39.129294, -84.359711, 30, null, null)),
            new Place(16, "Old Mercer House", "6713 Main St. (Newtown)", new Pos(39.124148, -84.368629, 180, null, null)),
            new Place(21, "Alyea-Hine Home", "1481 Sutton Rd.", new Pos(39.0805415, -84.3916325, 280, null, null)),
            new Place(22, "John Mears Home", "6068 Heis Terrace (Mt. Washington)", new Pos(39.0814851, -84.3921075, 294, 7, null))];