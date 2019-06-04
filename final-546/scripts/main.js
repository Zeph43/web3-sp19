  $(".carousel-caption .btn-primary").click(function () {
    if (window.location.hash) {
          var wndHash = window.location.hash;
          var tab = wndHash + "Tab";
          // if hash exist on doc ready then remove class "active" from all tabs        
          $("#tabs li").removeClass('active');
          // show the tab content and make tab list item (li) active
          $(wndHash).fadeIn();            
          $(tab).parent().addClass("active");
          console.log(wndHash, $(wndHash), tab, $(tab));
      } else {
          // if no hash make the BeforeTab active
          $("#streetwear").fadeIn();            
          $("#streetwear-tab").parent().addClass("active");
      }
    });

      $(".hamburger").click(function(){
        $(".menu").toggleClass("menu-active");
       $(".hamburger .top").toggleClass("hamburger-top");
       $(".hamburger .bottom").toggleClass("hamburger-bottom");
       $(".hamburger .center").toggleClass("hamburger-center");
     });


// A rather useful page: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

function changeButtonAndSendIfValid() {
  // check that all the fields are valid
  // if they are, turn off the button and send the form

  var canWeSend = 1;

  var checkFields = document.querySelectorAll("input");
  var checkText = document.querySelector("textarea");

  checkFields.forEach(function(currentField) {
    if (currentField.validity.valid !== true) {
      canWeSend = 0;
    }
  });

  if (checkText.validity.valid == false) {
    canWeSend = 0;
  }

  console.log("can we send? " + canWeSend);

  if (canWeSend == 1) {
    this.classList.add("js-disable-button");
    //this.disabled = true;
    this.value = "one moment...";
    // change this to 'false' if you want to check the styling of your button
    return true;
  }
}

var getButton = document.querySelector('form input[type="submit"]');
getButton.onclick = changeButtonAndSendIfValid;
