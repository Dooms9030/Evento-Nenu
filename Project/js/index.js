function goToGuestMode() {
    window.location.href = "guest.html";
  }
  
  function verifyOrganizerMode() {
    document.getElementById("organizer-login").style.display = "block";
  }
  
  function checkOrganizerAccess() {
    const organizerName = document.getElementById("organizer-name").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    if (organizerName === "Harold Montana") {
      window.location.href = "organizer.html";
    } else {
      errorMessage.textContent = "Acceso denegado. Solo Harold Montana puede acceder.";
    }
  }
  