/*global $,  alert, console*/

$(function () { 
    "use strict";
    
    // Trigger Nice Scroll Plugin
    
    $("html").niceScroll();
    
    // Change Header Height
    
    $(".header").height($(window).height());
    
    // scroll to features
    
    $(".header .arrow i").click(function () {
        
    $("html, body").animate({
           
           scrollTop:$(".featurs").offset().top 
           
       }, 1000);
        
    });
});
$(function (){
    "use strict";
    
    var winh    =$(window).height(),
        navh    =$("navbar").innerHeight();
    
});