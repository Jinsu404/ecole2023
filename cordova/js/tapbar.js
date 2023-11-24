//refresh
$(document).ready(function() {
    $("#refresh").on("click", function() {
        location.reload(true);
    });
});
 //search
function openPop(){
    var popup = window.open('http://www.google.com', '구글팝업', 'width=500px,height=600px,left=60,top=200,scrollbars=yes');
}

//info
function dialog() {

    var dialogBox = $('.dialog'),
        dialogTrigger = $('.dialog__trigger'),
        dialogClose = $('.dialog__close'),
        dialogTitle = $('.dialog__title'),
        dialogContent = $('.dialog__content'),
        dialogAction = $('.dialog__action');

    dialogTrigger.on('click', function(e) {
        dialogBox.toggleClass('dialog--active');
        e.stopPropagation()
    });

    dialogClose.on('click', function() {
        dialogBox.removeClass('dialog--active');
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
        dialogBox.removeClass('dialog--active');
        }
    });

    $(document).on("click", function(e) {
        if ($(e.target).is(dialogBox) === false &&
            $(e.target).is(dialogTitle) === false &&
            $(e.target).is(dialogContent) === false &&
            $(e.target).is(dialogAction) === false) {
        dialogBox.removeClass("dialog--active");
        }
    });
};

    $(function() {
    dialog();
    }
);
//chart
function chart() {

    var chartBox = $('.chart'),
        chartTrigger = $('.chart__trigger'),
        chartClose = $('.chart__close'),
        chartTitle = $('.chart__title')

        chartTrigger.on('click', function(e) {
            chartBox.toggleClass('chart--active');
        e.stopPropagation()
    });

    chartClose.on('click', function() {
        chartBox.removeClass('chart--active');
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            chartBox.removeClass('chart--active');
        }
    });

    $(document).on("click", function(e) {
        if ($(e.target).is(chartBox) === false &&
            $(e.target).is(chartTitle) === false ) {
                chartBox.removeClass("chart--active");
        }
    });
};

    $(function() {
        chart();
    }
);
