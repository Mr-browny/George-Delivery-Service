
var overlay = $('.overlay');
var showCartBtn = $('a[href="cart.html"]');
var closeCartBtn = $('#close');
var cartPage = $('.cartPage');
var initPrice = $('.item-actual-price');
var price = $('.item-price');
var itemQty = $('.item-quantity');
var addBtn = $('.fa.fa-plus');
var subBtn = $('.fa.fa-minus');
var deleteItem = $('.deleteItem');

overlay.hide();

initPrice.show();
price.parent().hide();

showCartBtn.click(function(e){
  e.preventDefault();
  // overlay.show(1000);
  overlay.fadeIn('slow');
});

 closeCartBtn.click(function(){
   overlay.fadeOut('slow');
 });

cartPage.click(function(){
  location.assign('cart.html');
});


addBtn.click(function(){
  var that = $(this);

  var actualPrice = that.parent().parent().find('.item-actual-price');
  var Price = that.parent().parent().find('.item-price');
  var Quantity = that.parent().parent().find('.item-quantity')
  var ap = actualPrice.html();
  var ip = Price.html();
  var b = parseInt(ap) + parseInt(ip);
  Price.html(b);
  qt = parseInt(Quantity.html()) + 1;
  Quantity.html(qt);
  actualPrice.parent().hide();
  Price.parent().show();

});

subBtn.click(function(){
  var that = $(this);

  var actualPrice = that.parent().parent().find('.item-actual-price');
  var Price = that.parent().parent().find('.item-price');
  var Quantity = that.parent().parent().find('.item-quantity')
  var ap = actualPrice.html();
  var ip = Price.html();
  var b = parseInt(ip) - parseInt(ap);
  Price.html(b);

  var quantityValue = parseInt(Quantity.html());

  qt = parseInt(Quantity.html()) - 1;
  Quantity.html(qt);

  if (quantityValue <= 1) {
    Quantity.html(1);
    Price.html(ap);
  } else {

  }
  actualPrice.parent().hide();
  Price.parent().show();

});

deleteItem.click(function(){
  $(this).parent().parent().remove();
});

// This section is for the cart steps form filling starts here
var details = $('#details');
var detailsDiv = $('.cart-details');
var info = $('#info');
var infoDiv = $('.delivery-info');
var payment = $('#pay');
var paymentDiv = $('.payment');

var inputs = $('.delivery-info :text');



infoDiv.hide();
paymentDiv.hide();

details.click(function(){

  var that = $(this);
  that.prop('class','active');
  info.removeProp('class');
  payment.removeProp('class');
  detailsDiv.show();
  infoDiv.hide();
  paymentDiv.hide();
});

info.click(function(){
  var that = $(this);
  that.prop('class','active');
  details.removeProp('class');
  payment.removeProp('class');
  detailsDiv.hide();
  infoDiv.show();
  paymentDiv.hide();

  inputs.each(function(){
    if ($(this).val() == 0) {
      payment.hide();
    } else {
      payment.show();
    }
  });

  inputs.blur(function(){
    inputs.each(function(){
      if ($(this).val() == 0) {
        payment.hide();
      } else {
        payment.show();
      }
    });
  });

});

payment.click(function(){
  var that = $(this);
  that.prop('class','active');
  details.removeProp('class');
  info.removeProp('class');
  detailsDiv.hide();
  infoDiv.hide();
  paymentDiv.show();
});
// This section is for the cart steps form filling ends here

var dateBtn = $('.date');
var date = $('#date');



  dateBtn.click(function(){
    var t = new Date();
    var day, month, year;
    day = t.getDate();

    month = t.getMonth() + 1;
    year = t.getFullYear();
    var D = day+' / '+month+' / '+year;
    date.val(D);
  });
