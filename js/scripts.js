//business logic
function Contact(first, last, street, city, state, zip) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.fullAddress = function() {
  return this.street + "," + this.city;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedZip = $("input#new-zip").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState, inputtedZip);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $("#full-address").text(newContact.fullAddress());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".city").text(newContact.city);
      $(".state").text(newContact.state);
      $(".zip").text(newContact.zip);

    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
