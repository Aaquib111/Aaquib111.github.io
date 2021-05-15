function validateForm() {
    var x = document.forms["nameEntry"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }