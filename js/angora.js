 
 $(document).ready(function(){
    $(".loading").fadeOut(3500,function(){
      $("body").css("overflow","visible");
    })
   });
 
 ///// rejax
 let nameInput =document.getElementById('names');
 let emailInput =document.getElementById('Email');
  nameInput.onkeydown = function(){
  let rejaxName =/^[a-z A-Z]{2,20}$/;
  let testName= rejaxName.test(nameInput.value);
  if (testName == true) {
    nameInput.classList.add('is-valid');
    nameInput.classList.remove('is-invalid');
  }else{
    nameInput.classList.add('is-invalid');
    nameInput.classList.remove('is-valid');

  }
 }
 emailInput.onkeydown = function(){
  let rejaxEmail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let testEmail= rejaxEmail.test(emailInput.value);
  if (testEmail == true) {
    emailInput.classList.add('is-valid');
    emailInput.classList.remove('is-invalid');
  }else{
    emailInput.classList.add('is-invalid');
    emailInput.classList.remove('is-valid');

  }
 }
 ///////
 let aboutOffset = $(".about").offset().top;
 let carouselOffset = $(".carousel-caption").offset().top;

 $(window).scroll(function(){
   if ($(window).scrollTop()> aboutOffset){
    $('.icon-cet').css({'opacity':'1','transitionDuration': '3s'})
   }
   else{
    $('.icon-cet').css({'opacity':'0','transitionDuration':'1.5s'})
   }
   if($(window).scrollTop()> carouselOffset){
    $('.navbar').css({'backgroundColor':'#232323','transitionDuration': '1s'})
   }
   else{
    $('.navbar').css({'backgroundColor':'transparent', 'transitionDuration': '1s'})
   }
 });
 $(".icon-cet").click(function(){
  $("body,html").animate({scrollTop:0},2000)
 });
 /////
 $(".nav-link").click(function(){
    let currentHref = $(this).attr('href');
    let currentSet = $(currentHref).offset().top;
    $("body,html").animate({scrollTop:currentSet},2000);
   });
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,
      breakpoints: {
      0: {
          slidesPerView: 1,
        },
      550: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
      loop:true,
      grabCursor:true,
  });