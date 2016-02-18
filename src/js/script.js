// $(document).ready(function(){

  // var  owl = $('.photogalley__thumbs'),
  // galleryItemIndex;
  // owl.owlCarousel({
  //   center: true,
  //   items: 5,
  //   // loop: true,
  //   stagePadding: 50,
  //   merge: true,
  // }).find('a').on('click', function(e){
  //   e.preventDefault();
  //   $(this).closest('.photogalley')
  //   .find('.photogallery__main-img')
  //   .attr('src', (this).attr('href'));
  //   owl.trigger('to.owl.carousel', $(this).parent().index());
  // });

// });

var tabs = document.querySelectorAll(".tabs a");
var contents = document.querySelectorAll(".tab-content .content");

function changeTab(){
  for (var i=0;i<tabs.length;i++) {
    tabs[i].parentNode.classList.remove("tab-active");
  }
  this.parentNode.classList.add("tab-active");

  for (i=0;i<contents.length;i++) {
    contents[i].classList.remove("content-active");
  }
  var link = this.getAttribute("href");
  document.querySelector(link).classList.add("content-active");
}

for (var i=0;i<tabs.length;i++){
  tabs[i].addEventListener('click', changeTab);
}