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
$(document).ready(function(){

  // This is the email section starts here
  // div containers starts here
var position = $('.emailSection');
var composeDiv = $('.part-three');
var composeMessage = $('.composeMessage');
var AllInbox = $('.part-one');
var msgContent = $('.part-two');
var inboxDiv = $('.table.Inbox');
var sentDiv = $('.table.Sent');
var draftDiv = $('.table.Draft');
var trashDiv = $('.table.Trash');
var replyDiv = $('.part-two .replyDiv');
var contentEmail = $('.content-email');
var contentName = $('.content-name');
var sectionContent = $('.part-two .section-content');
var senderEmail = $('.sender-email');
var senderId = $('.sender-id');
var actionDiv = $('.hidden-btn');
var feedBack = $('.feedBack');
var singleChat = $('.single-chat');
var groupChat = $('.group-chat');
 // Div containers ends here

 // Div buttons starts here
var composeBtn = $('.compose');
var inboxBtn = $('.inbox');
var sentBtn = $('.sent');
var draftBtn = $('.draft');
var trashBtn = $('.trash');
var actionBtn = $('.fa.fa-cubes.action');
var saveBtn = $('.save');
var deleteBtn = $('.delete');
var replyBtn = $('.reply');
var forwardBtn = $('.forward');
var msgcontentBtn = $('.table tr td');
var coAdminSingleChatBtn = $('.admin');
var adminSingleChatBtn = $('.coadmin');
var groupChatBtn = $('.group');
// Div buttons ends here

inboxDiv.show();
composeDiv.hide();
sentDiv.hide();
draftDiv.hide();
trashDiv.hide();
msgContent.hide();
replyDiv.hide();
senderEmail.hide();
actionDiv.hide();
senderId.hide();
feedBack.hide();
groupChat.hide();

    // This is the email section ends here


///////test
var links = $('.col-sm-2 ul li');
links.on('click', 'a', function(){
  var that = $(this);
  var Class = that.attr('class');

  if (Class == 'compose') {
    composeDiv.show();
    AllInbox.hide();
    msgContent.hide();
    position.html('Compose');

  } else if (Class == 'inbox') {
    AllInbox.show();
    inboxDiv.show();
    composeDiv.hide();
    sentDiv.hide();
    draftDiv.hide();
    trashDiv.hide();
    msgContent.hide();
    replyDiv.hide();
    position.html('Inbox');
  }else if(Class == 'sent'){
    AllInbox.show();
    inboxDiv.hide();
    composeDiv.hide();
    sentDiv.show();
    draftDiv.hide();
    trashDiv.hide();
    msgContent.hide();
    replyDiv.hide();
    position.html('Sent');
  }else if (Class == 'draft') {
    AllInbox.show();
    inboxDiv.hide();
    composeDiv.hide();
    sentDiv.hide();
    draftDiv.show();
    trashDiv.hide();
    msgContent.hide();
    replyDiv.hide();
    position.html('Draft');
  }else if (Class == 'trash') {
    AllInbox.show();
    inboxDiv.hide();
    composeDiv.hide();
    sentDiv.hide();
    draftDiv.hide();
    trashDiv.show();
    msgContent.hide();
    replyDiv.hide();
    position.html('Trash');
  }







});

msgcontentBtn.click(function(){
  var that = $(this);
  var name,message,date,email,gravatarDiv,gravatar,Id;
  Id = that.parent().children().next().html();
  name = that.parent().children().next().next().html();
  message = that.parent().children().next().next().next().html();
  email = that.parent().children().next().next().next().next().html();
  date = that.parent().children().next().next().next().next().next().html();
  gravatarDiv = $('.content-gravatar');
  gravatar = name.slice(0,1).toUpperCase();

  gravatarDiv.html(gravatar);
  contentName.html(name);
  contentEmail.html(email);
  sectionContent.html(message);

  contentEmail.html(email);
  msgContent.show('slow');
  sentDiv.hide();
  draftDiv.hide();
  trashDiv.hide();
  inboxDiv.hide();
  replyDiv.hide();
  position.html('Mail Content');



  actionBtn.click(function(){
    if(actionDiv.is(':hidden')){
      actionDiv.slideDown();
    }else{
      actionDiv.slideToggle();
    }
  });

  saveBtn.click(function(){
    $.ajax({
      type: 'Post',
      url: '../_inc/file.php',
      data: {DataID: Id}
    }).done(function(data){
      feedBack.fadeIn().hide(500);
      feedBack.html('saved successfully');
    }).fail(function(data){
      feedBack.fadeIn().hide(500);
      feedBack.html('saved Unsuccessfully');
    });
  });

  deleteBtn.click(function(){
    var response = confirm('Are you sure?');
    if (response == 1) {
      $.ajax({
        type: 'Post',
        url: '../_inc/file.php',
        data: {DataID: Id}
      }).done(function(data){
        feedBack.fadeIn().hide(500);
        feedBack.html('Delete successfully');
      }).fail(function(data){
        feedBack.fadeIn().hide(500);
        feedBack.html('Delete Unsuccessfully');
      });
    } else {
      return false;
    }
  });

  replyBtn.click(function(){
    if (replyDiv.is(':hidden')) {
      replyDiv.slideDown();
    } else {
      replyDiv.slideToggle();
    }
  });

  forwardBtn.click(function(){
    msgContent.hide();
    composeDiv.show();
    composeMessage.html(message);
  });

});


coAdminSingleChatBtn
adminSingleChatBtn
groupChatBtn

coAdminSingleChatBtn.click(function(){
  groupChat.hide();
  singleChat.show('slow');
});

adminSingleChatBtn.click(function(){
  groupChat.hide();
  singleChat.show('slow');
});

groupChatBtn.click(function(){
  groupChat.show('slow');
  singleChat.hide();
});


// This section is for the table of users starts here
var editBtn = $('.Edit-action');
var delBtn = $('.Delete-action');
var searchInput = $('input[type="search"]');
var searchCategory = $('.office option');
var tableName = $('.table-name');
var key = 'customer';


var customerTable = $('.table.customer-table');
var restaurantTable = $('.table.restaurant-table');
var staffTable = $('.table.staff-table');
var agentTable = $('.table.agent-table');

var markAll = $('input:checkbox.markAll');

var singleMark = $('.table.'+key+'-table tr td input[type="checkbox"]');

var userName = $('.names');

customerTable.show();
restaurantTable.hide();
staffTable.hide();
agentTable.hide();



searchInput.keyup(function(){
  var that = $(this);
  var value = that.val();
  var table = $('.table.'+key+'-table tr');
    table.each(function(){
      $(this).children(".names:contains('" + value + "')").parent().show();
         if ($.trim(value) != '') {
             $(this).children(".names").not(":contains('" + value + "')").parent().hide();
         }
    });

});


markAll.change(function(){
  var that = $(this);
  if (that.is(":checked")) {
    singleMark.attr('checked','checked');
  }else if(that.not(":checked")){
    singleMark.removeAttr('checked','checked');
  }
});

delBtn.click(function(){
  singleMark.each(function(){
    var that = $(this);
    // var userID = that.parent().next().html();

    if (that.is(":checked")) {
      // $.ajax({
      //   type: 'post',
      //   url: '../_inc/test.php',
      //   data: {
      //     id: userId;
      //   }
      // }).done(function(data){
      //   that.parent().parent().remove();
      // }).fail(function(data){
      //   alert('Not Deleted');
      // });
      that.parent().parent().remove();
    }
  });
});

searchCategory.click(function(){
  var that = $(this);
  var value = that.attr('value').toLowerCase();
  if (value == 'customer') {
    customerTable.fadeIn('slow');
    restaurantTable.hide();
    staffTable.hide();
    agentTable.hide();
    tableName.html(value);


  }else if (value == 'restaurant') {
    var singleMark = $('.table.'+value+'-table tr td input[type="checkbox"]');
    customerTable.hide();
    restaurantTable.fadeIn('slow');
    staffTable.hide();
    agentTable.hide();
    tableName.html(value);

    // ========================
    searchInput.keyup(function(){
      var that = $(this);
      var Value = that.val();
      var table = $('.table.restaurant-table tr');
      // alert('.table.'+key+'-table tr');
        table.each(function(){
          $(this).children(".names:contains('" + Value + "')").parent().show();
             if ($.trim(Value) != '') {
                 $(this).children(".names").not(":contains('" + Value + "')").parent().hide();
             }
        });

    });
    // =============================
    // ===============================
    markAll.change(function(){
      var that = $(this);
      if (that.is(":checked")) {
        singleMark.attr('checked','checked');
      }else if(that.not(":checked")){
        singleMark.removeAttr('checked','checked');
      }
    });
    // ================================
    // ===================================
    delBtn.click(function(){
      singleMark.each(function(){
        var that = $(this);

        if (that.is(":checked")) {
          that.parent().parent().remove();
        }
      });
    });
    // ====================================

  }else if (value == 'staff') {
    var singleMark = $('.table.'+value+'-table tr td input[type="checkbox"]');
    customerTable.hide();
    restaurantTable.hide();
    staffTable.fadeIn('slow');
    agentTable.hide();
    tableName.html(value);
    // ========================
    searchInput.keyup(function(){
      var that = $(this);
      var Value = that.val();
      var table = $('.table.staff-table tr');
      // alert('.table.'+key+'-table tr');
        table.each(function(){
          $(this).children(".names:contains('" + Value + "')").parent().show();
             if ($.trim(Value) != '') {
                 $(this).children(".names").not(":contains('" + Value + "')").parent().hide();
             }
        });

    });
    // =============================
    // ===============================
    markAll.change(function(){
      var that = $(this);
      if (that.is(":checked")) {
        singleMark.attr('checked','checked');
      }else if(that.not(":checked")){
        singleMark.removeAttr('checked','checked');
      }
    });
    // ================================
    // ===================================
    delBtn.click(function(){
      singleMark.each(function(){
        var that = $(this);

        if (that.is(":checked")) {
          that.parent().parent().remove();
        }
      });
    });
    // ====================================
  }else if (value == 'agent') {
    var singleMark = $('.table.'+value+'-table tr td input[type="checkbox"]');
    customerTable.hide();
    restaurantTable.hide();
    staffTable.hide();
    agentTable.fadeIn('slow');
    tableName.html(value);
    // ========================
    searchInput.keyup(function(){
      var that = $(this);
      var Value = that.val();
      var table = $('.table.agent-table tr');
      // alert('.table.'+key+'-table tr');
        table.each(function(){
          $(this).children(".names:contains('" + Value + "')").parent().show();
             if ($.trim(Value) != '') {
                 $(this).children(".names").not(":contains('" + Value + "')").parent().hide();
             }
        });

    });
    // =============================
    // ===============================
    markAll.change(function(){
      var that = $(this);
      if (that.is(":checked")) {
        singleMark.attr('checked','checked');
      }else if(that.not(":checked")){
        singleMark.removeAttr('checked','checked');
      }
    });
    // ================================
    // ===================================
    delBtn.click(function(){
      singleMark.each(function(){
        var that = $(this);

        if (that.is(":checked")) {
          that.parent().parent().remove();
        }
      });
    });
    // ====================================
  }
});

// This section is for the table of users ends here

// This section is for the order table control starts here
var orderName = $('.order-type');
var foodBtn = $('.order-content a.Food');
var courierBtn = $('.order-content a.Courier');
var completedOrderBtn = $('.order-content a.completed');
var completedCourierBtn = $('.order-content a.completedC');
var completedFoodBtn = $('.order-content a.completedF');


var foodDiv = $('.order-content .table-responsive .table.food');
var courierDiv = $('.order-content .table-responsive .table.courier');
var completedFoodDiv = $('.order-content .table-responsive .table.completedfood');
var CompletedCourierDiv = $('.order-content .table-responsive .table.completedcourier');

var foodDetailsBtn = $('.table.food tr[data-target="#foodModal"]');
var foodModalDetails = $('#foodModal form');
var courierDetailsBtn = $('.table.courier tr[data-target="#courierModal"]');
var courierModalDetails = $('#courierModal form');

var completedFoodDetailsBtn = $('.table.completedfood tr[data-target="#foodModal"]');
var completedFoodModalDetails = $('#foodModal form');
var completedCourierDetailsBtn = $('.table.courier tr[data-target="#courierModal"]');
var completedCourierModalDetails = $('#courierModal form');

var searchBar = $('.order-content input[type="search"]');

var foodTable = $('.order-content .table.food tr');
var courierTable = $('.order-content .table.courier tr');
var completedFoodTable = $('.order-content .table.completedfood tr');
var CompletedCourierTable = $('.order-content .table.completedcourier tr');



searchBar.focus();
completedCourierBtn.hide();
completedFoodBtn.hide();
completedFoodDiv.hide();
CompletedCourierDiv.hide();

completedOrderBtn.click(function(){
  if ((completedCourierBtn.is(':hidden')) && (completedFoodBtn.is(':hidden'))) {
    completedCourierBtn.fadeIn('slow');
    completedFoodBtn.fadeIn('slow');
  } else {
    completedCourierBtn.fadeOut('slow');
    completedFoodBtn.fadeOut('slow');
  }
  foodDiv.hide();
  courierDiv.hide();
  completedFoodDiv.fadeIn('slow');

});

completedCourierBtn.click(function(){
  CompletedCourierDiv.fadeIn('slow');
  completedFoodDiv.hide();
  $(this).css({
    backgroundColor: '#ff9800',
    color: '#2b7683'
  });
  completedFoodBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  });
  foodDiv.hide();
  courierDiv.hide();
  orderName.html('Courier History');
  foodBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  });
  courierBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  });
  searchBar.focus();

  searchBar.on('keyup', function(){
    var that = $(this);
    var val = that.val();
    CompletedCourierTable.each(function(){
      var That = $(this);
      That.children('.ccInvoice:contains("'+val+'")').parent().show();
      if ($.trim(val) != '') {
        $(this).children(".ccInvoice").not(":contains('" + val + "')").parent().hide();
      }
    });
  });
});

completedFoodBtn.click(function(){
  completedFoodDiv.fadeIn('slow');
  CompletedCourierDiv.hide();
  $(this).css({
    backgroundColor: '#ff9800',
    color: '#2b7683'
  });
  completedCourierBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  });
  foodDiv.hide();
  courierDiv.hide();
  orderName.html('Food History');
  foodBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  });
  courierBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  });
  searchBar.focus();

  searchBar.on('keyup', function(){
    var that = $(this);
    var val = that.val();
    completedFoodTable.each(function(){
      var That = $(this);
      That.children('.cfInvoice:contains("'+val+'")').parent().show();
      if ($.trim(val) != '') {
        $(this).children(".cfInvoice").not(":contains('" + val + "')").parent().hide();
      }
    });
  });

});


foodDetailsBtn.click(function(){
  var that = $(this);
  var TableData = {
    sN: that.find('.sN').html(),
    name: that.find('.name').html(),
    number: that.find('.number').html(),
    location: that.find('.location').html(),
    date: that.find('.date').html(),
    item: that.find('.item').html(),
    price: that.find('.price').html(),
    quantity: that.find('.quantity').html(),
    charge: that.find('.charge').html(),
    total: that.find('.total').html(),
    invoice: that.find('.invoice').html(),
    billing: that.find('.billing').html()
  };

  foodModalDetails.find('.Name').val(TableData.name);
  foodModalDetails.find('.Telephone').val(TableData.number);
  foodModalDetails.find('.Location').val(TableData.location);
  foodModalDetails.find('.Date').val(TableData.date);
  foodModalDetails.find('.Item').val(TableData.item);
  foodModalDetails.find('.Price').val(TableData.price);
  foodModalDetails.find('.Quantity').val(TableData.quantity);
  foodModalDetails.find('.Charge').val(TableData.charge);
  foodModalDetails.find('.Total').val(TableData.total);
  foodModalDetails.find('.Invoice').val(TableData.invoice);
  foodModalDetails.find('.Billing').val(TableData.billing);
});

courierDetailsBtn.click(function(){
  var that = $(this);
  var TableData = {
    sn: that.find('.sN').html(),
    name: that.find('.cName').html(),
    number: that.find('.cTelephone').html(),
    pickLocation: that.find('.cpLocation').html(),
    deliveryLocation: that.find('.cdLocation').html(),
    deliveryOption: that.find('.cOption').html(),
    category: that.find('.cCategory').html(),
    image: that.find('.cImagery img').attr('src'),
    info: that.find('.cAddInfo').html(),
    invoice: that.find('.cInvoice').html()
  };
  courierModalDetails.find('.cName').val(TableData.name);
  courierModalDetails.find('.cTelephone').val(TableData.number);
  courierModalDetails.find('.cpLocation').val(TableData.pickLocation);
  courierModalDetails.find('.cdLocation').val(TableData.deliveryLocation);
  courierModalDetails.find('.cOption').val(TableData.deliveryOption);
  courierModalDetails.find('.cCategory').val(TableData.category);
  courierModalDetails.find('.cName').val(TableData.name);
  courierModalDetails.find('.cImagery').attr('src',TableData.image);
  courierModalDetails.find('.cInfo').val(TableData.info);
  courierModalDetails.find('.cInvoice').val(TableData.invoice);

});

completedFoodDetailsBtn.click(function(){
  var that = $(this);
  var TableData = {
    sN: that.find('.sN').html(),
    name: that.find('.name').html(),
    number: that.find('.number').html(),
    location: that.find('.location').html(),
    date: that.find('.date').html(),
    item: that.find('.item').html(),
    price: that.find('.price').html(),
    quantity: that.find('.quantity').html(),
    charge: that.find('.charge').html(),
    total: that.find('.total').html(),
    invoice: that.find('.invoice').html(),
    billing: that.find('.billing').html()
  };

  completedFoodModalDetails.find('.Name').val(TableData.name);
  completedFoodModalDetails.find('.Telephone').val(TableData.number);
  completedFoodModalDetails.find('.Location').val(TableData.location);
  completedFoodModalDetails.find('.Date').val(TableData.date);
  completedFoodModalDetails.find('.Item').val(TableData.item);
  completedFoodModalDetails.find('.Price').val(TableData.price);
  completedFoodModalDetails.find('.Quantity').val(TableData.quantity);
  completedFoodModalDetails.find('.Charge').val(TableData.charge);
  completedFoodModalDetails.find('.Total').val(TableData.total);
  completedFoodModalDetails.find('.Invoice').val(TableData.invoice);
  completedFoodModalDetails.find('.Billing').val(TableData.billing);
});

completedCourierDetailsBtn.click(function(){
  var that = $(this);
  var TableData = {
    sn: that.find('.sN').html(),
    name: that.find('.cName').html(),
    number: that.find('.cTelephone').html(),
    pickLocation: that.find('.cpLocation').html(),
    deliveryLocation: that.find('.cdLocation').html(),
    deliveryOption: that.find('.cOption').html(),
    category: that.find('.cCategory').html(),
    image: that.find('.cImagery img').attr('src'),
    info: that.find('.cAddInfo').html(),
    invoice: that.find('.cInvoice').html()
  };
  completedCourierModalDetails.find('.cName').val(TableData.name);
  completedCourierModalDetails.find('.cTelephone').val(TableData.number);
  completedCourierModalDetails.find('.cpLocation').val(TableData.pickLocation);
  completedCourierModalDetails.find('.cdLocation').val(TableData.deliveryLocation);
  completedCourierModalDetails.find('.cOption').val(TableData.deliveryOption);
  completedCourierModalDetails.find('.cCategory').val(TableData.category);
  completedCourierModalDetails.find('.cName').val(TableData.name);
  completedCourierModalDetails.find('.cImagery').attr('src',TableData.image);
  completedCourierModalDetails.find('.cInfo').val(TableData.info);
  completedCourierModalDetails.find('.cInvoice').val(TableData.invoice);

});


courierDiv.hide();

courierBtn.click(function(){
  orderName.html('Courier');
  courierDiv.fadeIn('slow');
  foodDiv.hide();
  searchBar.focus();
  $(this).css({
    backgroundColor: '#ff9800',
    color: '#2b7683'
  });
  foodBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  }).fadeIn('slow');
  completedFoodBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  }).hide();
  completedCourierBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  }).hide();

  searchBar.on('keyup', function(){
    var that = $(this);
    var val = that.val();
    courierTable.each(function(){
      var That = $(this);
      That.children('.cInvoice:contains("'+val+'")').parent().show();
      if ($.trim(val) != '') {
        $(this).children(".cInvoice").not(":contains('" + val + "')").parent().hide();
      }
    });
  });

  completedFoodDiv.hide();
  CompletedCourierDiv.hide();
});
foodBtn.click(function(){
  orderName.html('Food');
  foodDiv.fadeIn('slow');
  courierDiv.hide();
  $(this).css({
    backgroundColor: '#ff9800',
    color: '#2b7683'
  }).fadeIn('slow');
  courierBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  });

  completedFoodDiv.hide();
  CompletedCourierDiv.hide();
  completedFoodBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  }).hide();
  completedCourierBtn.css({
    backgroundColor: '#2b7683',
    color: '#ff9800'
  }).hide();
});



searchBar.on('keyup', function(){
  var that = $(this);
  var val = that.val();
  foodTable.each(function(){
    var That = $(this);
    That.children('.invoice:contains("'+val+'")').parent().show();
    if ($.trim(val) != '') {
      $(this).children(".invoice").not(":contains('" + val + "')").parent().hide();
    }
  });
});

// This section is for the order table control ends here






















});
