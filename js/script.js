// alert("hi");
//$('.h1').css("color", '#549889');
// console.log("fg tfystx_1");
// /*progress*/
// let skills = document.querySelector('.skills');
// let bars = document.querySelector('.Allprogress .progress .progress-bar');
// window.onscroll = function() {
//     if (Window.scrollY >= skills.offsetTop + 100) {
//         // console.log("fg tfystx");
//         bars.forEach((span) => {
//             span.style.width = span.dataset.width;
//         });
//     }
// }
// console.log("fg tfystx_2");
// $(document).ready(function() {
//   alert("hi");
//   /*==================1==================*/
//   /*header -> style to links*/
//           /*1-> select li*/
//     $(".nav-item a").on("click", function() {
//         /*style to links*/
//         $(this).addClass("active").parent().siblings().find("a").removeClass("active");
//         /*to go page links*/
//         var id = $(this).attr("id");
//         var className = $("." + id);
//         var headerHeight = $(".navbar").innerHeight();
//         $("body,html").animate({
//             scrollTop: className.offset().top - headerHeight -100
//         }, 100);
//     });
// /*==================1==================*/
//     /////////////////////////////*/
//         }) /*End-Scope**/ ;
//---------------------------------------------
//---------------------------------------------
//=============contact_btn============ //
// var goContact = document.querySelector('.goContact');
// console.log(goContact);
$(".goContact").on("click", function() {
    var contactHeight = $(".contactme").innerHeight();
    $("body,html").animate({
        scrollTop: $("body,html").innerHeight() - contactHeight
    }, 900);

});
$(".About_me").on("click", function() {
    var contactHeight = $(".aboutt").innerHeight();
    $("body,html").animate({
        scrollTop: contactHeight
    }, 500);

});
$(".skills_me").on("click", function() {
    var contactHeight = $(".skills").innerHeight();
    $("body,html").animate({
        scrollTop: contactHeight + 600
    }, 500);

});
$(".Project_me").on("click", function() {
    var contactHeight = $(".project").innerHeight();
    $("body,html").animate({
        scrollTop: contactHeight + 1020
    }, 500);

});
/** animation when go to thing */
let skillsSection = document.querySelector('.skills');
var progress_bars = document.querySelectorAll('.progress-bar');
window.onscroll = function() {
        if (window.scrollY >= skillsSection.offsetTop) { // reach to it
            console.log('wejbjkbc jksbc ');
            progress_bars.forEach((bar) => {
                bar.getElementsByClassName.width = bar.dataset.width;
            });

        }
    }
    /**/
$('.btns button').click(function() {
    var myclass = console.log($(this).attr('class'));
    $('.Allprogress .button').hide;
    $('.Allprogress .' + myclass).fadeIn();
});