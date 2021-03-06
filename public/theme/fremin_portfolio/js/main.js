$(document).ready(function(){

    // external js: isotope.pkgd.js

// init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.card-project',
        layoutMode: 'fitRows'
    });
// filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };
// bind filter button click
    $('.first-navigation, .second-navigation').on( 'click', 'li', function() {
        var filterValue = $(this).attr('class');
        console.log(filterValue);
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

    var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);

});