function validateForm() {
  let x = document.forms["myForm"]["fname"]["name"]["email"]["phone"]["contact"]["questionnaire"]["interest"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
