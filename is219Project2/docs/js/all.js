(function ($) {
    $('#freshmanTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "Sex" },
            { "data": "Weight_lbs" },
            { "data": "Sep" },
            { "data": "Weight_lbs2" },
            { "data": "Apr" },
            { "data": "BMI_Sep" },
            { "data": "BMI_April" }

        ]
    } );

})(jQuery);