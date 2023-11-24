$('#popupimage').click(function() {
    
    var imgSrc = $(this).attr('src');
    
    $('#popup-image').attr('src', imgSrc);
    
    $('#popup-container').fadeIn();
});

$('#popup-container').click(function() {
    $(this).fadeOut();
});