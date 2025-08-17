
$(document).ready(function() {
    // Reset all videos to hidden and images to visible on page load
    $('.publication-mousecell video').css('display', 'none');
    $('.publication-mousecell img').css('display', 'inline-block');
    
    $('.publication-mousecell').mouseover(function() {
        $(this).find('video').css('display', 'inline-block');
        $(this).find('img').css('display', 'none');
    });
    $('.publication-mousecell').mouseout(function() {
        $(this).find('video').css('display', 'none');
        $(this).find('img').css('display', 'inline-block');
    });
})
