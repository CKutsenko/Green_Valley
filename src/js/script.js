$(document).ready(function(){

  var  owl = $('.photogalley__thumbs'),
  galleryItemIndex;
  owl.owlCarousel({
    center: true,
    items: 5,
    // loop: true,
    stagePadding: 50,
    merge: true,
  }).find('a').on('click', function(e){
    e.preventDefault();
    $(this).closest('.photogalley')
    .find('.photogallery__main-img')
    .attr('src', (this).attr('href'));
    owl.trigger('to.owl.carousel', $(this).parent().index());
  });

});