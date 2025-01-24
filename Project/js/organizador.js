const attendees = [
    { name: "Clara", lastname: "Correa", code: "OFQ0E", attended: false},
    { name: "Agustin", lastname: "Villanueva", code: "C61WW", attended: false},
    { name: "Camila", lastname: "Flores", code: "GF6GF", attended: false},
    { name: "Nahuel", lastname: "Cuevas", code: "ZJP24", attended: false},
    { name: "Tamara", lastname: "Chimchirian", code: "F0R9I", attended: false},
    { name: "Marcelo", lastname: "Chimchirian", code: "BIURW", attended: false},
    { name: "Agustina", lastname: "Chimchirian", code: "JB99A", attended: false},
    { name: "Veronica", lastname: "Avakian", code: "0ZLXE", attended: false},
    { name: "Brittsaira", lastname: "Ospina", code: "OTG7X", attended: false},
    { name: "Jessica", lastname: "Orellano", code: "W59G7", attended: false},
    { name: "Fabian", lastname: "Rodriguez", code: "CYMYJ", attended: false},
    { name: "Camila", lastname: "Montes", code: "QRIQV", attended: false},
    { name: "Genesis", lastname: "Medina", code: "CGXXY", attended: false},
    { name: "Ambar", lastname: "Medina", code: "7F3OY", attended: false},
    { name: "Maria Laura", lastname: "Orellano", code: "P6SWZ", attended: false},
    { name: "Mariano", lastname: "Farias", code: "MN0BZ", attended: false},
    { name: "Emma", lastname: "Farias", code: "DMUO7", attended: false},
    { name: "Olivia", lastname: "Farias", code: "UCCTV", attended: false},
    { name: "Carlos", lastname: "Baez", code: "BUQP4", attended: false},
    { name: "Tamara", lastname: "Belli", code: "H9M7L", attended: false},
    { name: "Sofia", lastname: "Almeida", code: "5MOB9", attended: false},
    { name: "Sofia Temis", lastname: "Martino Belay", code: "X4UPT", attended: false},
    { name: "Marina", lastname: "Furman", code: "0HKUO", attended: false},
    { name: "Jorge", lastname: "Poletilo", code: "SVML4", attended: false},
    { name: "Nenufar", lastname: "Torrealba", code: "PW4B5", attended: false},
    { name: "Luis", lastname: "Fuentes", code: "LWW9H", attended: false},
    { name: "Ludmila", lastname: "Suarez", code: "P4SYT", attended: false},
    { name: "Claudia", lastname: "Ahumada", code: "1HKKU", attended: false},
    { name: "Antonia", lastname: "Ahumada", code: "KUKMG", attended: false},
    { name: "Nicole", lastname: "Ruiz", code: "HA648", attended: false},
    { name: "Katia", lastname: "Pereira", code: "SWXBK", attended: false},
    { name: "Julio Cesar", lastname: "Rodriguez", code: "HURJP", attended: false},
    { name: "Valeria", lastname: "Rodriguez", code: "C5TT7", attended: false},
    { name: "Guadalupe", lastname: "Orellano", code: "7I1HQ", attended: false},
    { name: "Isabel", lastname: "Soilan", code: "2Y9YJ", attended: false},
    { name: "Pedro", lastname: "Orellano", code: "P4P6Z", attended: false},
    { name: "Lucas", lastname: "Ponce", code: "2069B", attended: false},
    { name: "Martin", lastname: "Davalos", code: "Z3GHI", attended: false},
    { name: "Bautista", lastname: "Braco", code: "PSDSZ", attended: false},
    { name: "Esteban", lastname: "Miranda", code: "LW09M", attended: false},
    { name: "Gladys", lastname: "Crespo", code: "O6ZY3", attended: false},
    { name: "Eduardo", lastname: "Miranda", code: "GM61O", attended: false}
  ];
  
  function renderAttendeeTable() {
    const tableBody = document.querySelector("#attendee-table tbody");
    tableBody.innerHTML = "";
    attendees.forEach((attendee) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${attendee.name}</td>
        <td>${attendee.lastname}</td>
        <td>${attendee.code}</td>
        <td>${attendee.attended ? "Sí" : "No"}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function verifyCode() {
    const code = document.getElementById("code-input").value.trim();
    const message = document.getElementById("verify-message");
    const attendeeIndex = attendees.findIndex((a) => a.code === code);
  
    if (attendeeIndex !== -1) {
      const attendee = attendees[attendeeIndex];
      if (!attendee.attended) {
        attendee.attended = true;
        renderAttendeeTable();
        message.innerText = `Código válido. Invitado: ${attendee.name} ${attendee.lastname}`;
      } else {
        message.innerText = "Este código ya fue registrado.";
      }
    } else {
      message.innerText = "Código no válido.";
    }
  }
  
  // Inicializar tabla al cargar la página
  renderAttendeeTable();
  