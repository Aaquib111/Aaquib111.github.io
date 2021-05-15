function validateForm() {
    var x = document.forms["nameEntry"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }