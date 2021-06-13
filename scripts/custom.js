$(window).load(function () {
        "use strict";
        //------------------------------------------------------------------------
        //						PRELOADER SCRIPT
        //------------------------------------------------------------------------
        $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('#preloader .loading-data').fadeOut(); // will first fade out the loading animation
        //------------------------------------------------------------------------
        //						NAVBAR SLIDE SCRIPT
        //------------------------------------------------------------------------ 		
        $(window).scroll(function () {
            if ($(window).scrollTop() > $("nav").height()) {
                $("nav.navbar-slide").addClass("show-menu");
            }
            else {
                $("nav.navbar-slide").removeClass("show-menu");
                $(".navbar-slide .navMenuCollapse").collapse({
                    toggle: false
                });
                $(".navbar-slide .navMenuCollapse").collapse("hide");
                $(".navbar-slide .navbar-toggle").addClass("collapsed");
            }
        });
        //------------------------------------------------------------------------
        //						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
        //------------------------------------------------------------------------ 		
        $('.nav a').on('click', function () {
            if ($('.navbar-toggle').css('display') != 'none') {
                $(".navbar-toggle").click()
            }
        });
    })
    //------------------------------------------------------------------------
    //						Scrolling based on links and buttons.
    //------------------------------------------------------------------------ 	
$(function () {
    $('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});

    // google map with color options.
    function initMap() {
        var styledMapType = new google.maps.StyledMapType(
          [{
                "stylers": [{
                    "saturation": -100
                        }, {
                    "gamma": 1
                        }]
                    }, {
                "elementType": "labels.text.stroke"
                , "stylers": [{
                    "visibility": "off"
                        }]
                    }, {
                "featureType": "poi.business"
                , "elementType": "labels.text"
                , "stylers": [{
                    "visibility": "off"
                        }]
                    }, {
                "featureType": "poi.business"
                , "elementType": "labels.icon"
                , "stylers": [{
                    "visibility": "off"
                        }]
                    }, {
                "featureType": "poi.place_of_worship"
                , "elementType": "labels.text"
                , "stylers": [{
                    "visibility": "off"
                        }]
                    }, {
                "featureType": "poi.place_of_worship"
                , "elementType": "labels.icon"
                , "stylers": [{
                    "visibility": "off"
                        }]
                    }, {
                "featureType": "road"
                , "elementType": "geometry"
                , "stylers": [{
                    "visibility": "simplified"
                        }]
                    }, {
                "featureType": "water"
                , "stylers": [{
                    "visibility": "on"
                        }, {
                    "color": "#00acb3"
                        }]
                    }, {
                "featureType": "administrative.neighborhood"
                , "elementType": "labels.text.fill"
                , "stylers": [{
                    "color": "#333333"
                        }]
                    }, {
                "featureType": "road.local"
                , "elementType": "labels.text"
                , "stylers": [{
                    "weight": 0.5
                        }, {
                    "color": "#333333"
                        }]
                    }, {
                "featureType": "transit.station"
                , "elementType": "labels.icon"
                , "stylers": [{
                    "gamma": 1
                        }, {
                    "saturation": 50
                        }]
                    }], {
                name: 'Styled Map'
            });
        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 40.6714619
                , lng: -74.1290726
            }
            , zoom: 10
            , scrollwheel: false
            , mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain'
                    , 'styled_map']
            }
            
        });
        var myLatLng = {lat: 40.6714619, lng: -74.1290726};
      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
        
        
        
        
        
        
        
        

// To add the marker to the map, call setMap();
marker.setMap(map);
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
    }
	
$(document).ready(function () {
    "use strict";
    //------------------------------------------------------------------------
    //						ANCHOR SMOOTHSCROLL SETTINGS
    //------------------------------------------------------------------------
    $('a.goto, .navbar .nav a').smoothScroll({
        speed: 1200
    });
    //------------------------------------------------------------------------
    //						FULL HEIGHT SECTION SCRIPT
    //------------------------------------------------------------------------
    $(".screen-height").css("min-height", $(window).height());
    $(window).resize(function () {
        $(".screen-height").css("min-height", $(window).height());
    });
    //submits the form to php files using ajax
    jQuery("#contact_form").submit(function (event) {
        jQuery('#msg').attr('class', 'alert processing').html('Processing your request').show();
        var data = jQuery(this).serialize();
        jQuery.post("mail.php", data, function (response) {
            jQuery('#msg').attr('class', "alert alert-" + response.status).html(response.message).show();
            if (response.status == "success" && ga) {
                var path = location.pathname.substring(location.pathname.length - 1, location.pathname.length) == "/" ? location.pathname + "thankyou" : location.pathname + "/thankyou";
                ga('send', {
                    hitType: 'pageview'
                    , page: path
                });
            }
            setTimeout(function () {
                jQuery('#msg').hide();
            }, 10000);
            
        }, 'json');
        event.preventDefault();
    });
	
	//subscribe using Mailchimp
    jQuery("#subscribe_form").submit(function (event) {
        var data = jQuery(this).serialize();
        jQuery.post("subscribe.php", data, function (response) {
            jQuery('#msg2').attr('class', response.status).html(response.message).show();
            setTimeout(function () {
                jQuery('#msg2').hide();
            }, 10000);
            
        }, 'json'); 
        event.preventDefault();
    });
	
	

    // vertical slider on home page
    // Verical Slider
    var $row = $('.vertical-slider__item');
    var $container = $('.vertical-slider');
    var currentMarginTop = 0;
    var itemHeight = $row.height();
    $(".text-slider__dynamic").hide();
    var rowsNr = $row.length;
    var maxPadd = (rowsNr - 1) * itemHeight;
    //console.log(itemHeight);
    function setHeight() {
        //console.log(itemHeight);
        $('.text-slider__dynamic').css({
            'height': itemHeight
        });
        $(".text-slider__dynamic").show();
    }

    function animateSlider() {
        //setInterval(moveRows,2000);
        setHeight();

        function moveRows() {
            $container.animate({
                'margin-top': currentMarginTop - itemHeight
            }, 500);
            currentMarginTop -= itemHeight;
        }
        if (currentMarginTop == -(maxPadd)) {
            $container.animate({
                'margin-top': 0
            }, 100);
            currentMarginTop = 0;
            // moveRows();
        }
        else {
            moveRows();
        }
    }

    function automateSlider(interval) {
        setInterval(animateSlider, interval);
    }
    automateSlider(3000);
});