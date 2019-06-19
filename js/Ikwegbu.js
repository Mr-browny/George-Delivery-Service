// alert(screen.height);
// alert(screen.width);
// alert(location.href);
// alert(location.hostname);
// alert(navigator.appName+','+navigator.appCodeName);
// alert(navigator.product);
// alert(navigator.appVersion);
// alert(navigator.userAgent);
// alert(navigator.platform);
// alert(navigator.language);
var currentSlide = 1;
var slider = $('.slides');
var slideCount = slider.children().length;
var slideTime = 5000;
var animationTime = 800;
var screenWidth = screen.width;

// This is the intro slide
  setInterval(function(){
    if ((screenWidth >= 320) && (screenWidth <= 500)) {
      slider.animate({
        marginLeft: "-=300px"
      },animationTime, function(){
        currentSlide++;
        if (currentSlide === slideCount) {
          currentSlide = 1;
          $(this).css('margin-left','0px');
        }
      });
    }else if ((screenWidth >= 501) && (screenWidth <= 777)) {
      slider.animate({
        marginLeft: "-=400px"
      },animationTime, function(){
        currentSlide++;
        if (currentSlide === slideCount) {
          currentSlide = 1;
          $(this).css('margin-left','0px');
        }
      });
    }else {
      slider.animate({
        marginLeft: "-=935px"
      },animationTime, function(){
        currentSlide++;
        if (currentSlide === slideCount) {
          currentSlide = 1;
          $(this).css('margin-left','0px');
        }
      });
    }

}, slideTime);


// setInterval(function(){
// slider.animate({
//   marginLeft: "-=900px"
// },animationTime, function(){
//   currentSlide++;
//   if (currentSlide === slideCount) {
//     currentSlide = 1;
//     $(this).css('margin-left','0px');
//   }
// });
// }, slideTime);
// end of the intro slide


// This is for the slides section, ends here

// This is for the intro search input
var search = $('.search-cat');
search.focus();
// ends here

var contactBtn = $('.contactBtn');
var contact = $('#contact');

contactBtn.click(function(){
  $('html, body').animate({scrollTop: 5600},(1500));
});

// This is used to delete an upload png starts here
 var deleteUpload = $('.upload span.glyphicon.glyphicon-trash');

 deleteUpload.click(function(){
   var that = $(this);
   // that.parent().remove();
   var reply = confirm('Delete?');
   if(reply == 1){
     that.parent().fadeOut('slow').remove();
   }else{
     //
   }
 });
// This is used to delete an upload png ends here

// This is for the upload button to preview image starts here
var fileUpload = $(':file.upload-file');
var fileUpload1 = $(':file.upload-file1');
var uploadBox = $('.uploaded-content');
var uploadBtn = $('.upload button.uploadBtn');
var uploadBtn1 = $('.upload button.uploadBtn1');
var selectedImage = fileUpload.val();
var author = $('.image-author');
var author1 = $('.image-author1');
var description = $('.image-description');
var description1 = $('.image-description1');
var category = $('.image-category');
var category1 = $('.image-category1');
var errMsg = $('.upload-action #errorMessage');


fileUpload.change(function(){
  var t = $(this);
  var newImage = $('#newImage');
  $('.uploaded-details :text').each(function(){
    var that = $(this);
    if ((that.val() == '') || category.html() == 'Select category') {
      uploadBtn.attr('disabled','disabled');
    }else{
      uploadBtn.removeAttr('disabled','disabled');
    }
  });
  $('.uploaded-details :text').blur(function(){
    var that = $(this);
    if ((that.val().length ==  0) || category.html() == 'Select category') {
      uploadBtn.attr('disabled','disabled');
    }else{
      uploadBtn.removeAttr('disabled','disabled');
    }
  });

uploadBtn.click(function(){

  var data = {
    image: newImage.html(),
    author: author.val(),
    description: description.val(),
    category: category.val()
    // This data is what will be sent to the php file using ajax
  }
    // errMsg.html('File Uploaded.');
    // fileUpload.removeAttr('type').attr('type','file');
    // uploadBox.hide();
    // uploadBtn.hide();
    // author.val('');
    // description.val('');
    // category.val('select category');

  $.ajax({
    type: 'POST',
    url: '../_inc/logout.php',
    data: {imageAuthor: data.author, imageDescription: data.description, imageCategory: data.category}
  }).done(function(data){
    errMsg.html('File Uploaded.');
    fileUpload.removeAttr('type').attr('type','file');
    uploadBox.hide();
    uploadBtn.hide();
    author.val('');
    description.val('');
    category.val('select category');
  }).fail(function(data){
    errMsg.html('File Not Uploaded.');
  });

  // $.ajax({
  //   type: 'post',
  //   url: '../_inc/file.php',
  //   data: {id: 'obi'}
  // }).done(function(data,status){
  //   alert('success: '+status);
  // }).fail(function(data,status){
  //   alert('Failed: '+status);
  // });

  });
});

fileUpload1.change(function(){
  var t = $(this);
  var newImage = $('#newImage1');
  // sdfghj
  $('.uploaded-details :text').each(function(){
    var that = $(this);
    if (that.val() == ''){
      uploadBtn1.attr('disabled','disabled');
      // alert('empty');
    }else{
      uploadBtn1.removeAttr('disabled','disabled');
      // alert('not empty');
    }
  });
  $('.uploaded-details :text').blur(function(){
    var that = $(this);
    if (that.val()==  ''){
      uploadBtn1.attr('disabled','disabled');
      // alert('still empty  bbbb');
    }else{
      uploadBtn1.removeAttr('disabled','disabled');
      // alert('Not still empty');
    }
  });

uploadBtn1.click(function(){
  var data = {
    image: newImage.html(),
    author: author1.val(),
    description: description1.val(),
    category: category1.val()
    // This data is what will be sent to the php file using ajax
  }
  // alert(data.author+ ',' +data.description+ ',' +data.category);
  //   errMsg.html('File Uploaded.');
  //   fileUpload1.removeAttr('type').attr('type','file');
  //   uploadBox.hide();
  //   uploadBtn1.hide();
  //   author1.val('');
  //   description1.val('');
  //   category1.val('select category');

  // $.ajax({
  //   type: 'POST',
  //   url: '../_inc/file.php',
  //   data: {imageAuthor: data.author, imageDescription: data.description, imageCategory: data.category}
  // }).done(function(data){
  //   errMsg.html('File Uploaded.');
  //   fileUpload1.removeAttr('type').attr('type','file');
  //     uploadBox.hide();
  //     uploadBtn1.hide();
  //     author1.val('');
  //     description1.val('');
  //     category1.val('select category');
  // }).fail(function(data){
  //   errMsg.html('File Not Uploaded.');
  // });



  });
});

// This is for the upload button to preview image ends here

// This secion takes care of the userAgent Notification section starts here

var removeNotification = $('#Notification .glyphicon.glyphicon-remove-sign');
removeNotification.click(function(){
  var that = $(this);
  that.parent().parent().fadeOut('slow');
});
// This secion takes care of the userAgent Notification section ends here

// This is section for the modal download starts here
var body = $('body');
var modal = $('.modal-box');
var modalBtn = $('.myModal');
var modalCloseBtn = $('.modal-close');
var modalclosebtn = $('.modal-header .glyphicon-remove-sign');
var modalImage = $('.modal-image .image');
var modalAuthor = $('.modal-side-details :text.author');
var modalDescription = $('.modal-side-details textarea.description');
var modalCat = $('.modal-side-details :text.category');

modalBtn.click(function(){
  modal.show('slow');
  // body.css('filter','hue(5%)');
  var that = $(this);
  var Image = that.attr('src');
  var Author = that.attr('data-author');
  var Description = that.attr('data-description');
  var Category = that.attr('data-category');

// Inserting the selected image into the modal box
  modalImage.attr('src',Image);
  modalAuthor.val(Author);
  modalDescription.val(Description);
  modalCat.val(Category);
  // Inserting the necessary attributes into the modal image
  modalImage.attr('alt',Description);
  modalImage.attr('author',Author);
  modalImage.attr('category',category);

});
// This function loops through the authors other images and uploads them into the modal image while still within the modal.
var authorFiles = $('.modal-author-files ul li img');
authorFiles.click(function(){
  var that = $(this);
  var Image = that.attr('src');
  var Author = that.attr('author');
  var Description = that.attr('description');
  var Category = that.attr('category');
  // Inserting the selected image into the modal box
    modalImage.attr('src',Image);
    modalAuthor.val(Author);
    modalDescription.val(Description);
    modalCat.val(Category);
});
modalCloseBtn.click(function(){
  modal.hide('slow');
  body.css('background-color','white');
});
modalclosebtn.click(function(){
  modal.hide('slow');
  body.css('background-color','white');
});

var boxModal = document.getElementById('modal-box');
// boxModal.style.display = 'block';
window.onclick = function(event) {
    if (event.target == boxModal) {
        boxModal.style.display = "none";
    }
}
// This is section for the modal download ends here

 // This section takes care of the location.assign for the most download and the latest download starts here
var most = $('.mostDownload .action .most');
var latest = $('.action .latest');


most.click(function(){
  location.assign('mostdownload.html');
});
latest.click(function(){
  location.assign('mostdownload.html');
});

var newPost = $('.postpage');
newPost.click(function(e){
  e.preventDefault();
  location.assign('pngfiles.html');
});
  // This section takes care of the location.assign for the most download and the latest download ends here


// This section takes care of the pngfiles category starts here
var catName = $('.pngfiles-category-name');
var catDescription = $('.pngfiles-category-description');
var catBtn = $('.dropdown-menu.caty');

  catBtn.on('click', 'li a', function(a){
    var that = $(this);
    a = that.attr('id');
    if (a == 'Electronics') {
      catName.html(a);
      catDescription.html('Home & Office Appliances|Gadgets');
    } else if(a == 'Nature'){
      catName.html(a);
      catDescription.html('Human Beings|Animals|Trees|Habitat|mother nature...');
    }else if(a == 'Transport'){
      catName.html(a);
      catDescription.html('Air Crafts|Vehicles|Water crafts|Trains...');
    }else if(a == 'Food'){
      catName.html(a);
      catDescription.html('Meals|Beverages|Fruits|Liquid...');
    }else if(a == 'Buildings'){
      catName.html(a);
      catDescription.html('Skyscrappers|Bungalows|Duplex|3D prints...');
    }else if(a == 'Engineering'){
      catName.html(a);
      catDescription.html('Tools|Machines|Equipments|Attires(Wears)...');
    }else if(a == 'Music'){
      catName.html(a);
      catDescription.html('Equipments|Materials|Instruments...');
    }else if(a == 'Accesories'){
      catName.html(a);
      catDescription.html('Wrist watches|Perfumes|Ear rings...');
    }else if(a == 'Wears'){
      catName.html(a);
      catDescription.html('Male cloths|Female cloths|kids...');
    }else if(a == 'Sports'){
      catName.html(a);
      catDescription.html('Jersey|Kits|Balls|Glooves|Attire...');
    }
  });
// This section takes care of the pngfiles category ends here
