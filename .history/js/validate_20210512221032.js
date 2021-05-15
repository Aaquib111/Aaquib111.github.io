function validateForm() {
    var x = document.forms["nameEntry"]["firstname"].value;
    var err = document.getElementsByClassName("invalid-feedback");
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }