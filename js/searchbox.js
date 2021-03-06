/* panel and sections of the articles slide toggle*/
$(document).ready(function(){
  $(".panel-heading").click(function(){
    $(".panel-body").slideToggle("slow");
  });
  $(".panel-body [class*='head' i]").click(function(){  //[class*='head' i]=matches every element whose attribute value containing a specified value. i=case insensitive
    $(this).next().slideToggle("slow");
  });
/* end panel and sections of the articles */

/* Specific and general search metadata */
$('#article1body .metadata input[type="checkbox"]').click(function(){
    var name = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        $("#article1 span[about="+name+"]").css('background-color', '#ffb370');  //give me all the instances where the value of about==value of name
        $("#article1 span[class~="+name+"]").css('background-color', '#ffb370'); //example: name="flour", about="food ingredients flour"-->give me all the instances where flour (name value), is contained in the class.
        if ($("#article1 span[about="+name+"]").length){   //check if the element exists
          var topPos = $("#article1 span[about="+name+"]:first").offset().top; //take the first instance, give me the coordinates of the top of the element
          var scrolled = $("#article1").scrollTop();  //recover the position of the scrollbar (hidden)
          $("#article1").animate({scrollTop:scrolled + topPos-$("#article1").parent().offset().top}, 1000); //parent = col-4
        }
      }
      else if($(this).prop("checked") == false){
        $("#article1 span[about="+name+"]").css('background-color', 'transparent');
        $("#article1 span[class~="+name+"]").css('background-color', 'transparent');
      }
  });
  $('#article2body .metadata input[type="checkbox"]').click(function(){
    var name = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        $("#article2 span[about="+name+"]").css('background-color', '#ffb370');
        $("#article2 span[class~="+name+"]").css('background-color', '#ffb370');
        if ($("#article2 span[about="+name+"]").length){
          var topPos = $("#article2 span[about="+name+"]:first").offset().top;
          var scrolled = $("#article2").scrollTop();
          $("#article2").animate({scrollTop:scrolled + topPos-$("#article2").parent().offset().top}, 1000);
        }
        $('#article2body > div[class~="body"] input[type="checkbox"]').prop('checked', true);
        $('#article2body div[class~="body"] + div[class="subBody"] input[type="checkbox"]').prop('checked', true);
      }
      else if($(this).prop("checked") == false){
        $("#article2 span[about="+name+"]").css('background-color', 'transparent');
        $("#article2 span[class~="+name+"]").css('background-color', 'transparent');
      }
  });
  $('#article3body .metadata input[type="checkbox"]').click(function(){
    var name = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        $("#article3 span[about="+name+"]").css('background-color', '#ffb370');
        $("#article3 span[class~="+name+"]").css('background-color', '#ffb370');
        if ($("#article3 span[about="+name+"]").length){
          var topPos = $("#article3 span[about="+name+"]:first").offset().top;
          var scrolled = $("#article3").scrollTop();
          $("#article3").animate({scrollTop:scrolled + topPos-$("#article3").parent().offset().top}, 1000);
        }
      }
      else if($(this).prop("checked") == false){
        $("#article3 span[about="+name+"]").css('background-color', 'transparent');
        $("#article3 span[class~="+name+"]").css('background-color', 'transparent');
      }
  });
/* end specific and general search metadata */

/* metadata: opacity on unselected articles */
  $('input[name="check1"]').click(function(){
      if($(this).prop("checked") == false){  //if the article has been unchecked
        $("#article1 [style]").css('background-color', 'transparent');  // then, remove all the highlighting performed on the metadata and add a background transparent
        $("#article1").css('opacity', '0.3'); //give opacity on the unchecked article (it remains readable)
        $("#article1body").css('opacity', '0.3'); //give opacity on the searchbox too
        $(".metadata1 input[type='checkbox']").attr("disabled", true); //disable any operation on the checkboxes of the unselected article
        $(".metadata1 input[type='checkbox']").attr("checked", false); //remove the check on all the metadata previously checked
        $(".body-sectionsArt1 input[type='checkbox']").attr("disabled", true);//disable any operation on the checkboxes of the sections of the unselected article
        $(".body-sectionsArt1 input[type='checkbox']").attr("checked", false); //set to unchecked all the sections of the unselected article
  }
      else if($(this).prop("checked") == true){ //if the article has been checked
        $("#article1").css('opacity', '1'); //then, reset the opacity to the normal condition on the article
        $("#article1body").css('opacity', '1'); // and on the searchbox
        $(".body-sectionsArt1 input[type='checkbox']").attr("disabled", false); //reactivate the checkboxes in the sections part
        $(".metadata1 input[type='checkbox']").attr("disabled", false); //and in the metadata part of the searchbox
      }
    });
    $('input[name="check2"]').click(function(){
      if($(this).prop("checked") == false){
        $("#article2 [style]").css('background-color', 'transparent');
        $("#article2").css('opacity', '0.3');
        $("#article2body").css('opacity', '0.3');
        $(".metadata2 input[type='checkbox']").attr("disabled", true);
        $(".metadata2 input[type='checkbox']").attr("checked", false);
        $(".body-sectionsArt2 input[type='checkbox']").attr("disabled", true);
        $(".body-sectionsArt2 input[type='checkbox']").attr("checked", false);
  }
      else if($(this).prop("checked") == true){
        $("#article2").css('opacity', '1');
        $("#article2body").css('opacity', '1');
        $(".body-sectionsArt2 input[type='checkbox']").attr("disabled", false);
        $(".metadata2 input[type='checkbox']").attr("disabled", false);
    }
  });
        $('input[name="check3"]').click(function(){
        if($(this).prop("checked") == false){
          $("#article3 [style]").css('background-color', 'transparent');
          $("#article3").css('opacity', '0.3');
          $("#article3body").css('opacity', '0.3');
          $(".metadata3 input[type='checkbox']").attr("disabled", true);
          $(".metadata3 input[type='checkbox']").attr("checked", false);
          $(".body-sectionsArt3 input[type='checkbox']").attr("disabled", true);
          $(".body-sectionsArt3 input[type='checkbox']").attr("checked", false);
        }
        else if($(this).prop("checked") == true){
          $("#article3").css('opacity', '1');
          $("#article3body").css('opacity', '1');
          $(".body-sectionsArt3 input[type='checkbox']").attr("disabled", false);
          $(".metadata3 input[type='checkbox']").attr("disabled", false);
    }
  });
  /* metadata: end opacity on unselected articles */

  /* metadata: scroll to different section */
  $('#article1body .body-sectionsArt1 input[type="checkbox"]').click(function(){
    var section = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        var topPos = document.getElementById(section).offsetTop; //get the top of the section
        $("#article1").animate({scrollTop:topPos-$("#article1").parent().offset().top}, 1000); //animate and scroll to the section
        $("#article1 [id="+section+"]").css('background-color', 'rgba(173, 217, 203, 0.7)'); //add a background color with a little bit of transparency
      }
      else if($(this).prop("checked") == false){
        $("#article1 [id="+section+"]").css('background-color', 'transparent');
      }
  });
  $('#article2body .body-sectionsArt2 input[type="checkbox"]').click(function(){
    var section = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        var topPos = document.getElementById(section).offsetTop;
        $("#article2").animate({scrollTop:topPos-$("#article2").parent().offset().top}, 1000);
        $("#article2 [id="+section+"]").css('background-color', 'rgba(173, 217, 203, 0.7)');
      }
      else if($(this).prop("checked") == false){
        $("#article2 [id="+section+"]").css('background-color', 'transparent');
      }
  });
  $('#article3body .body-sectionsArt3 input[type="checkbox"]').click(function(){
    var section = $(this).attr("name");
      if ($(this).prop("checked") == true)
        {
        var topPos = document.getElementById(section).offsetTop;
        $("#article3").animate({scrollTop:topPos-$("#article3").parent().offset().top}, 1000);
        $("#article3 [id="+section+"]").css('background-color', 'rgba(173, 217, 203, 0.7)');
      }
      else if($(this).prop("checked") == false){
        $("#article3 [id="+section+"]").css('background-color', 'transparent');
      }
  });
  /*end scroll to different sections*/

  /*reverse search metadata: click on an element in the article and open the metadata panel*/
  $('#article1 span[about]').click(function(){
    var name = $(this).attr('about'); //get the name of the about attribute in the markupped article
    var checkname = $("#article1body [name="+name+"]"); //fin the corresponding checkbox in the searchbox
    checkname.attr("checked", true); //check the checkbox
    $("#article1 span[about="+name+"]").css('background-color', '#ffb370'); //highlight all same elements
    $("#article1 span[class~="+name+"]").css('background-color', '#ffb370'); //highlight all same alements
    checkname.parentsUntil(".panel-body").slideDown("slow"); //open all of the superclasses of this checkbox in the searchbox
    $(".panel-body").slideDown("slow"); //if it wasn't opened, open the searchbox
    var topPos = checkname.offset().top; //get the position of the checkbox inside the searchbox
    var scrolled = $("#article1body").scrollTop(); //get the position of the scrollbar (hidden)
    $("#article1body").animate({scrollTop:scrolled + topPos- $("#article1body").parent().offset().top}, 1000); //scroll in the panel of the searchbox
  });
  $('#article2 span[about]').click(function(){
    var name = $(this).attr('about');
    var checkname = $("#article2body [name="+name+"]");
    checkname.attr("checked", true);
    $("#article2 span[about="+name+"]").css('background-color', '#ffb370');
    $("#article2 span[class~="+name+"]").css('background-color', '#ffb370');
    checkname.parentsUntil(".panel-body").slideDown("slow");
    $(".panel-body").slideDown("slow");
    var topPos = checkname.offset().top;
    var scrolled = $("#article2body").scrollTop();
    $("#article2body").animate({scrollTop:scrolled + topPos- $("#article2body").parent().offset().top}, 1000);
  });
  $('#article3 span[about]').click(function(){
    var name = $(this).attr('about');
    var checkname = $("#article3body [name="+name+"]");
    checkname.attr("checked", true);
    $("#article3 span[about="+name+"]").css('background-color', '#ffb370');
    $("#article3 span[class~="+name+"]").css('background-color', '#ffb370');
    checkname.parentsUntil(".panel-body").slideDown("slow");
    $(".panel-body").slideDown("slow");
    var topPos = checkname.offset().top;
    var scrolled = $("#article3body").scrollTop();
    $("#article3body").animate({scrollTop:scrolled + topPos- $("#article3body").parent().offset().top}, 1000);
  });
    /*end reverse search metadata: click on an element in the article and open the metadata panel*/

  /*Selects all descendants of a category and block panel when checked */
  $('.metadata input[type="checkbox"]').click(function(){
    if ($(this).prop("checked")==true && $(this).parent().attr("class").toLowerCase().includes("head")){ //if the checkbox is checked and the parent of the checkbox includes "head"
      $(this).parent().next().find(":checkbox").prop('checked', true); //select the sibling of the parent (body) and check all his descendants
        }
    else if ($(this).prop("checked")==false && $(this).parent().attr("class").toLowerCase().includes("head")){
      $(this).parent().next().find(":checkbox").prop('checked', false);
    }
  });
});
