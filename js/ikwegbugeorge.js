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

// var markAll = $('.markAll');
var markAll = $('input:checkbox.markAll');

// var singleMark = $('.table tr td input[type="checkbox"]');
var singleMark = $('.table.'+key+'-table tr td input[type="checkbox"]');

var userName = $('.names');

// var userNameVal = $('.names').html().toLowerCase();

alert('working');

customerTable.show();
restaurantTable.hide();
staffTable.hide();
agentTable.hide();



searchInput.keyup(function(){
  var that = $(this);
  var value = that.val();
  var table = $('.table.'+key+'-table tr');
  // alert('.table.'+key+'-table tr');
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

    // ========================
    searchInput.keyup(function(){
      var that = $(this);
      var Value = that.val();
      var table = $('.table.customer-table tr');
      // alert('.table.'+key+'-table tr');
        table.each(function(){
          $(this).children(".names:contains('" + Value + "')").parent().show();
             if ($.trim(Value) != '') {
                 $(this).children(".names").not(":contains('" + Value + "')").parent().hide();
             }
        });

    });
    // =============================

  }else if (value == 'restaurant') {
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

  }else if (value == 'staff') {
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
  }else if (value == 'agent') {
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
  }
});



// This section is for the table of users ends here

// This section is for the order table control starts here

// This section is for the order table control ends here






















});
