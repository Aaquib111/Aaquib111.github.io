function validateForm() {
    var x = document.forms["nameEntry"]["firstname"].value;
    var err = document.getElementsByClassName("invalid-feedback");
    if (x.toLowerCase() != "X") {
      err.style.setProperty('display', 'contents');
      return false;
    }
  }