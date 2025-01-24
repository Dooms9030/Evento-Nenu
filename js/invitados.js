const attendees = [
    { name: "Clara", lastname: "Correa", code: "OFQ0E"},
    { name: "Agustin", lastname: "Villanueva", code: "C61WW"},
    { name: "Camila", lastname: "Flores", code: "GF6GF"},
    { name: "Nahuel", lastname: "Cuevas", code: "ZJP24"},
    { name: "Tamara", lastname: "Chimchirian", code: "F0R9I"},
    { name: "Marcelo", lastname: "Chimchirian", code: "BIURW"},
    { name: "Agustina", lastname: "Chimchirian", code: "JB99A"},
    { name: "Veronica", lastname: "Avakian", code: "0ZLXE"},
    { name: "Brittsaira", lastname: "Ospina", code: "OTG7X"},
    { name: "Jessica", lastname: "Orellano", code: "W59G7"},
    { name: "Fabian", lastname: "Rodriguez", code: "CYMYJ"},
    { name: "Camila", lastname: "Montes", code: "QRIQV"},
    { name: "Genesis", lastname: "Medina", code: "CGXXY"},
    { name: "Ambar", lastname: "Medina", code: "7F3OY"},
    { name: "Maria Laura", lastname: "Orellano", code: "P6SWZ"},
    { name: "Mariano", lastname: "Farias", code: "MN0BZ"},
    { name: "Emma", lastname: "Farias", code: "DMUO7"},
    { name: "Olivia", lastname: "Farias", code: "UCCTV"},
    { name: "Carlos", lastname: "Baez", code: "BUQP4"},
    { name: "Tamara", lastname: "Belli", code: "H9M7L"},
    { name: "Sofia", lastname: "Almeida", code: "5MOB9"},
    { name: "Sofia Temis", lastname: "Martino Belay", code: "X4UPT"},
    { name: "Marina", lastname: "Furman", code: "0HKUO"},
    { name: "Jorge", lastname: "Poletilo", code: "SVML4"},
    { name: "Nenufar", lastname: "Torrealba", code: "PW4B5"},
    { name: "Luis", lastname: "Fuentes", code: "LWW9H"},
    { name: "Ludmila", lastname: "Suarez", code: "P4SYT"},
    { name: "Claudia", lastname: "Ahumada", code: "1HKKU"},
    { name: "Antonia", lastname: "Ahumada", code: "KUKMG"},
    { name: "Nicole", lastname: "Ruiz", code: "HA648"},
    { name: "Katia", lastname: "Pereira", code: "SWXBK"},
    { name: "Julio Cesar", lastname: "Rodriguez", code: "HURJP"},
    { name: "Valeria", lastname: "Rodriguez", code: "C5TT7"},
    { name: "Guadalupe", lastname: "Orellano", code: "7I1HQ"},
    { name: "Isabel", lastname: "Soilan", code: "2Y9YJ"},
    { name: "Pedro", lastname: "Orellano", code: "P4P6Z"},
    { name: "Lucas", lastname: "Ponce", code: "2069B"},
    { name: "Martin", lastname: "Davalos", code: "Z3GHI"},
    { name: "Bautista", lastname: "Braco", code: "PSDSZ"},
    { name: "Esteban", lastname: "Miranda", code: "LW09M"},
    { name: "Gladys", lastname: "Crespo", code: "O6ZY3"},
    { name: "Eduardo", lastname: "Miranda", code: "GM61O"}
  ];

  function registerGuest() {
    const guestName = document.getElementById("guest-name").value.trim();
    const guestLastname = document.getElementById("guest-lastname").value.trim();
    const guestCodeElem = document.getElementById("guest-code");
  
    if (guestName && guestLastname) {
      const attendee = attendees.find(
        (a) => a.name === guestName && a.lastname === guestLastname
      );
  
      if (attendee) {
        guestCodeElem.innerText = `Tu código es: ${attendee.code}`;
      } else {
        guestCodeElem.innerText = "No estás registrado en la base de datos.";
      }
    } else {
      alert("Por favor, ingresa tu nombre y apellido.");
    }
  }
  