function validateForm() {
    var x = document.forms["nameEntry"]["firstname"].value;
    var err = document.getElementsByClassName("invalid-feedback");
    if (x.toLowerCase() == "") {
      alert("Name must be filled out");
      return false;
    }
  }