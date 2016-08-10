/*!
 * more.js (https://github.com/doxakis/morejs)
 * Copyright 2016 Philip Doxakis
 * Licensed under the MIT license
 */

$(function () {
    // If select2 is loaded.
    // More info here: https://select2.github.io/
    if ($.fn.select2) {
        $(".select2").select2({
            width: '100%',
            placeholder: function () {
                return $(this).data('placeholder');
            }
        });
    }

    // If jquery-ui datepicker is loaded.
    // More info here: https://jqueryui.com/datepicker/
    if ($.fn.datepicker) {
        $(".datepicker").each(function () {
            var dateFormat = $(this).data('dateformat');
            var options = { dateFormat: dateFormat };
            $(this).datepicker(options);
        })
    }

    // If stacktable is loaded.
    // More info here: https://github.com/johnpolacek/stacktable.js/
    if ($.fn.stacktable) {
        $(".stacktable").stacktable();
    }

    // Prevent double submit.
    $('.form-prevent-double-submit').submit(function () {
        $('input[type="submit"]', this).attr('disabled', 'disabled');
        $('button[type="submit"]', this).attr('disabled', 'disabled');
    });

    // Disable autocomplete.
    $(".form-autocompleteoff").attr('autocomplete', 'off');
});
