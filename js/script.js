function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

 /* WEBP */
 const images = document.querySelectorAll('.rot_img');
images.forEach(function(item){
  item.addEventListener("mouseenter", function(item){
    this.classList.add("active")
    this.nextElementSibling.classList.add("active")
  })
  item.addEventListener("mouseleave", function(item){
    this.classList.remove("active")
    this.nextElementSibling.classList.remove("active")
  })

});
 /* Hover */

$(document).ready((function(){
    $(".burger_span").click((function(s){
      $(".nav_burger, .overlay,.burger_menu_box,.burger_span,.burger_box").toggleClass("active");

    }))}));
  $(document).ready((function(){
    $(".search_btn").click((function(s){
      $(".main_search").addClass("active");

  }))}));
 /* Burger */


  