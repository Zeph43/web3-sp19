$( document ).ready(function(){
    $("#fade").fadeTo("slow", 0.5);
    $("#noFade").fadeTo("slow", 0.5);
  });

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

     
     