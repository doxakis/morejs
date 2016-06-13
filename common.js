$(function () {
    // Prevent double submit.
    $('form').submit(function () {
        $('input[type="submit"]', this).attr('disabled', 'disabled');
    });

    // Load jquery-ui datepicker.
    if ($.fn.datepicker) {
        $(".datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
    }

    // Load select2 (https://select2.github.io/)
    if ($.fn.select2) {
        $(".select2").select2({
            placeholder: function () {
                return $(this).data('placeholder');
            }
        });
    }
});
