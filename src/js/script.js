$(document).ready(function(){

  var owl = $('.gallery__thumbs'),
      galleryItemIndex;
  owl.owlCarousel({
    center: true,
    loop: true,
    responsive: {
      0 : {
        items: 1,
      },
      480 : {
        items: 2,
      },

      768 : {
        items: 5,
        stagePadding: 50,
        merge: true,
      }
    }
  }).find('a').on('click', function(e){
    e.preventDefault();
    $(this).closest('.gallery').find('.gallery__main-img').attr('src', $(this).attr('href'));
    galleryItemIndex = $(this).closest('.owl-item').index();
    console.log(galleryItemIndex);
    owl.trigger('to.owl.carousel', galleryItemIndex);
  });

  $(".room-info__slider").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    loop: true,
    items: 1,
  });


  $(".offers__slider").owlCarousel({
    center: true,
    loop: true,
    merge: true,
    items: 1,
  });

  $(".review-carousel").owlCarousel({
    loop: true,
    merge: true,
    nav: true,
    navText: false,
    responsive: {
      0 : {
        items: 1,
      },
      768 : {
        items: 2,
      }
    }
  });

  $('.cottages__input').on('click', function() {
    var idInput = $(this).attr('id');
    var idBlock = '#house-description--'+idInput;
    $('.house-description').hide();
    $(idBlock).show();
  });

  $('#menu_trigger').click(function(e){
    e.preventDefault();
    $('#additional-menu').slideToggle('slow');
  });

    // $('#mainform').submit(function(){ // пeрeхвaтывaeм всe при сoбытии oтпрaвки
    // var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
    // var error = false; // прeдвaритeльнo oшибoк нeт
    // form.find('input, textarea').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
    //   if ($(this).val() == '') { // eсли нaхoдим пустoe
    //     $(this).addClass("error");
    //     error = true; // oшибкa
    //   } else { // если пол не пустое
    //     $(this).removeClass("error"); // снимаем класс
    //     error = false; // сбрасываем ошибку
    //   }
    // });

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

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

  });