$(document).ready(function(){

  var owl = $('.gallery__thumbs'),
      galleryItemIndex;
  owl.owlCarousel({
    center: true,
    items: 5,
    loop: true,
    stagePadding: 50,
    merge: true,
  }).find('a').on('click', function(e){
    e.preventDefault();
    $(this).closest('.gallery').find('.gallery__main-img').attr('src', $(this).attr('href'));
    galleryItemIndex = $(this).closest('.owl-item').index();
    console.log(galleryItemIndex);
    owl.trigger('to.owl.carousel', galleryItemIndex);
  });


  var link_href;
  $('.features__tab').on('click', function(e){
    e.preventDefault();
    $(this)
    .closest('.features__tabs-list')
    .find('.features__tab.features__tab--active')
    .removeClass('features__tab--active');
    $(this)
    .closest('.features__tab')
    .addClass('features__tab--active');
    $(this)
    .closest('.features__tabs')
    .find('.features__type.features__type--active')
    .removeClass('features__type--active');
    link_href = $(this).attr('href');
    $(link_href).addClass('features__type--active');
  });

});