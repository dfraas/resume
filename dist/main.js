var profilY = $("#profil").position().top;
var lebenslaufY = $("#lebenslauf").position().top;
var skillsY = $("#skills").position().top;
var projekteY = $("#projekte").position().top;

var birthday = new Date('1994-09-07');
var age = Math.abs(new Date((Date.now() - birthday.getTime())).getUTCFullYear() - 1970);
$("#age-info").text(age);

var profiltypewriter = new Typewriter("#profil-typewriter", {
    cursor: "_",
    delay: 30
});
var lebenslauftypewriter = new Typewriter("#lebenslauf-typewriter", {
    cursor: "_",
    delay: 30
});

var skillstypewriter = new Typewriter("#skills-typewriter", {
    cursor: "_",
    delay: 30
});

var projekttypewriter = new Typewriter("#projekt-typewriter", {
    cursor: "_",
    delay: 30
});

var currentScrollElement = "";

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < lebenslaufY){
    if(currentScrollElement != "profil"){
      $(".nav").children(".active").removeClass("active");
      $(".nav").children(".nav-link").eq(0).addClass("active");
      if($("#profil-typewriter").children(".Typewriter__wrapper").text() == ""){
        profiltypewriter.typeString('Informationen über mich.').start();
      }
      currentScrollElement = "profil";
    }
  }

  if (y >= lebenslaufY && y < skillsY){
    if(currentScrollElement != "lebenslauf"){
    $(".nav").children(".active").removeClass("active");
    $(".nav").children(".nav-link").eq(1).addClass("active");
    if($("#lebenslauf-typewriter").children(".Typewriter__wrapper").text() == ""){
      lebenslauftypewriter.typeString('Bildung und Beruf.').start();
    }
    currentScrollElement = "lebenslauf";
    }
  }

  if (y >= skillsY && y < projekteY){
    if(currentScrollElement != "skills"){
    $(".nav").children(".active").removeClass("active");
    $(".nav").children(".nav-link").eq(2).addClass("active");
    if($("#skills-typewriter").children(".Typewriter__wrapper").text() == ""){
      skillstypewriter.typeString('Technische Fähigkeiten.').start();
    }
    currentScrollElement = "skills";
    }
  }

  if (y >= projekteY){
    if(currentScrollElement != "projekte"){
    $(".nav").children(".active").removeClass("active");
    $(".nav").children(".nav-link").eq(3).addClass("active");
    if($("#projekt-typewriter").children(".Typewriter__wrapper").text() == ""){
      projekttypewriter.typeString('Projekte aus Studium und Privat.').start();
    }
    currentScrollElement = "projekte";
    }
  }

  if(y <= 200){
    $('.header-box').removeClass("fixed");
  }
  else{
    $('.header-box').addClass("fixed");
  }
  if(y <= 400){
    $('.header-text').css('font-size',"3.5rem");
    $('.header-fixed').css('background-color',"rgba(69, 103, 255, 0)");
    $('.header-addition').fadeIn(100);
    $('.navbar').removeClass("fixed");
  }
  else{
    $('.navbar').addClass("fixed");
    $('.header-addition').fadeOut(100);
  }
  if(y > 400 && y <= 465){
    var size = 2.5 + ((465-y)/65);
    $('.header-text').css('font-size',size + "rem");
    var opacity = 1 - (465-y)/65;
    $('.header-fixed').css('background-color',"rgba(69, 103, 255," + opacity + ")");
  }
  if(y > 465){
    $('.header-addition').fadeOut(100);
    $('.header-text').css('font-size',"2.5rem");
    $('.header-fixed').css('background-color',"rgba(69, 103, 255, 1)");
    $('.header-fixed').addClass("fixed");
  }
  else{
    $('.header-fixed').removeClass("fixed");
  }
});
