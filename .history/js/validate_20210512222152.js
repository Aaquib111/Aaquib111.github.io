function validateForm() {
    var x = document.forms["nameEntry"]["firstname"].value;
    var err = document.getElementsByClassName("invalid-feedback");
    if (x.toLowerCase() == "X") {
      return true;
    }
    err.style.setProperty('display', 'contents');
  }