"use strict";
(function () {
    $(document).ready(function () {

        // $('.toggle').click(function () {
        //     $('.invisible').removeClass();
        // });


  $('.toggle').click(function (e){
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
s
    })
})();