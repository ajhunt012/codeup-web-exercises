"use strict";
(function () {
    $(document).ready(function () {

        // $('.toggle').click(function () {
        //     $('.invisible').removeClass();
        // });


        $('.toggle').click(function (e) {
            e.preventDefault();
            $('dd').toggleClass('invisible');
        })


        $('dt').click(function () {
            $(this).css('background-color', 'yellow');
        });

        $('dt').dblclick(function () {
            $(this).css('background-color', 'white');
        });

        //
        // $('dt').click(function (e){
        //     e.preventDefault();
        //     $(this).css('background-color', 'yellow');
        // })

        // We could use jQuery to highlight every other li element using the .each() method:

        // $('li').each(function(index) {
        //     if (index % 2 !== 0) {
        //         $(this).css('background-color', '#FF0');
        //     }
        // });

        // $('.parksBtn').click(function (){
        // $('li').last().css('background-color', 'yellow');
        // });

        $('.parksBtn').click(function (e) {
            e.preventDefault();
            $('ul').each(function () {
                $(this).children().last().css('background-color', 'yellow')
            })
        });

        // anytime an h3 is clicked, bolds all the list items under
        $('h3').click(function () {
            $(this).next().css('font-weight', 'bold');
        })


        // $('each').click(function (e) {
        //     e.preventDefault();
        //     $('ul').each(function () {
        //         $(this).parent().first().css('color', 'blue')
        //     })
        // });


    })

})();