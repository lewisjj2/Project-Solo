
/*Owl Carousel*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: false,
        slideBy: "page",
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i><i class="fas fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
            items: 1
            },
            //breakpoint from 480 up
            480: {
            items: 2 
            }
        }
            
    });
});

/*Progress Bars*/

$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();


    }, {
        offset: 'bottom-in-view'
    });


});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});



/* =========================================
               Portfolio
============================================ */

$(window).on('load', function(){
    
    // Initialize Isotope
    
    $("#isotope-container").isotope({
        
    });
    //Filter Items on button click
    
    $("#isotope-filters").on('click', 'button', function(){
        
        var filterValue = $(this).attr('data-filter');
        
        //Filter Value
         $("#isotope-container").isotope({
                filter: filterValue
       });
        
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* =========================================
               Portfolio
============================================ */


$(function () {
    
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* =========================================
               Testimonials
============================================ */

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: false,
        slideBy: "page",
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i> <i class="fas fa-angle-right"></i>']
    });
});


/* =========================================
               Stats
============================================ */

$(function () {
  
    $(".counter").counterUp({
    delay: 10,
    time: 2000
    });
    
 });


/* =========================================
               Clients
============================================ */


$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: false,
        slideBy: "page",
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i> <i class="fas fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
            items: 2
            },
            //breakpoint from 480 up
            480: {
            items: 3 
            },
             //breakpoint from 768 up
            768: {
            items: 6 
            }
        }
    });
});


/* =========================================
               Google Map
============================================ */

$(window).on('load', function (){
    
    var addressString = '79th Street, Central Park West, New York, NY 10024';
    var myLatlng = {lat: 40.781190, lng: -73.971550};
    
    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });
    
    //2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to see address"
    });
    
    //3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    
    //4. Show Info Window on click
    marker.addListener('click', function(){
        infowindow.open(map, marker);
    });
    
    //5.Resize Function
    google.maps.event.addDomListener(window, 'resize', function(){
        
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
        
    });
});



/* =========================================
               Navigation
============================================ */

$(function () {
    
    //Show/Hide nav on page load
    showHideNav();
    
    $(window).scroll(function(){
        
        //Show/Hide nav on page scroll
        showHideNav();
        
     });
    
    function showHideNav () {
         if( $(window).scrollTop() > 50 ){
           
            //Show White Nav
            $("nav").addClass("white-nav-top");
            
            //Show Dark Logo
            $(".navbar-brand img").attr("src", "Images/solo-images/logo/logo-dark.png");
             
             //Show Back to top Button
             $("#back-to-top").fadeIn();
            
           } else {
           
               //Hide White Nav
               $("nav").removeClass("white-nav-top");
               
               //Show Logo
               $(".navbar-brand img").attr("src", "Images/solo-images/logo/logo.png");
               
               //Hide Back to top Button
             $ ("#back-to-top").fadeOut();
           }
    }
    
});




/*Smoooth Scroll*/

$(function () {
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        //get section id
        
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop:  $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
        
    });
});


/*Mobile Menu Open*/
$(function () {
    /*Show Mobile Menu*/
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height", "100%");
    });
    
    /*Hide Mobile Menu*/
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height", "0%");
    });
    
    
    
});

/*==========================
            Wow Animations
===========================*/
        
 $(document).ready(function() {
     new WOW().init();
});

$(window).on('load', function (){
    ("#arrow-down i").addClass("animated fadeInDown infinite");
});



