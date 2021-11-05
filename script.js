window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if ((document.body.scrollTop > 65) || (document.documentElement.scrollTop > 65)) {
    document.getElementById("brand").style.display = "none";
    document.getElementById("mainNavbar").style.background = "rgb(121, 140, 147, 0.97)";
    document.getElementById("mainNavbar").style.height = "3rem";
    // document.getElementById("brandLogo").style.width = "5rem";
    document.getElementById("brandLogo").style.width= "3rem";

    // document.getElementById("brandLogo").style.top = "1rem";

  }else {
    document.getElementById("brand").style.display = "inline";
    document.getElementById("brandLogo").style.width = "5.5rem";
    // document.getElementById("brandLogo").style.width = "5.5rem";

    document.getElementById("mainNavbar").style.height = "10rem";
    document.getElementById("mainNavbar").style.background = "none";
    // document.getElementById("brandLogo").style.top = "0";

  }
}
