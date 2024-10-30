$(document).ready(function() {

  
      $.get('html/otsingud.html', function(data) {
          $("#otsingutulemused").html(data);
      });

$('#search').keyup(function() {//when key is pressed in search bar
 var searchTerm = $(this).val(); //val of search bar
 var myExp = new RegExp(searchTerm, "i"); //regular experation
 $( '#keeled' ).hide();
 $( '#pealkiri' ).hide();
 $( '.item' ).hide();
 $( '#otsingutulemused' ).show();
///////////////////////////////////////////////////////////////////////
 $.getJSON('json/index1.json', function(data){//get the json file
  var output = "<ul id='result1'>";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output += '<li class="1">';
    output += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output += '</li>';
   }
  });//end each
  output += "</ul>";
  $('#update1').html(output);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
 $.getJSON('json/index2.json', function(data){//get the json file
    var output2 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output2 += '<li class="2">';
    output2 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output2 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update2').html(output2);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index3.json', function(data){//get the json file
    var output3 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output3 += '<li class="2">';
    output3 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output3 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update3').html(output3);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index4.json', function(data){//get the json file
    var output4 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output4 += '<li class="2">';
    output4 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output4 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update4').html(output4);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index5.json', function(data){//get the json file
    var output5 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output5 += '<li class="2">';
    output5 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output5 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update5').html(output5);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index6.json', function(data){//get the json file
    var output6 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output6 += '<li class="2">';
    output6 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output6 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update6').html(output6);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index7.json', function(data){//get the json file
    var output7 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output7 += '<li class="2">';
    output7 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output7 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update7').html(output7);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index8.json', function(data){//get the json file
    var output8 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output8 += '<li class="2">';
    output8 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output8 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update8').html(output8);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index9.json', function(data){//get the json file
    var output9 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output9 += '<li class="2">';
    output9 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output9 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update9').html(output9);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index10.json', function(data){//get the json file
    var output10 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output10 += '<li class="2">';
    output10 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output10 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update10').html(output10);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index11.json', function(data){//get the json file
    var output11 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output11 += '<li class="2">';
    output11 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output11 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update11').html(output11);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index12.json', function(data){//get the json file
    var output12 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output12 += '<li class="2">';
    output12 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output12 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update12').html(output12);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index13.json', function(data){//get the json file
    var output13 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output13 += '<li class="2">';
    output13 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output13 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update13').html(output13);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index14.json', function(data){//get the json file
    var output14 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output14 += '<li class="2">';
    output14 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output14 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update14').html(output14);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index15.json', function(data){//get the json file
    var output15 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output15 += '<li class="2">';
    output15 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output15 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update15').html(output15);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index16.json', function(data){//get the json file
    var output16 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output16 += '<li class="2">';
    output16 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output16 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update16').html(output16);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index17.json', function(data){//get the json file
    var output17 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output17 += '<li class="2">';
    output17 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output17 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update17').html(output17);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index18.json', function(data){//get the json file
    var output18 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output18 += '<li class="2">';
    output18 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output18 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update18').html(output18);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index19.json', function(data){//get the json file
    var output19 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output19 += '<li class="2">';
    output19 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output19 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update19').html(output19);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index20.json', function(data){//get the json file
    var output20 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output20 += '<li class="2">';
    output20 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output20 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update20').html(output20);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index21.json', function(data){//get the json file
    var output21 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output21 += '<li class="2">';
    output21 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output21 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update21').html(output21);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index22.json', function(data){//get the json file
    var output22 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output22 += '<li class="2">';
    output22 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output22 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update22').html(output22);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index23.json', function(data){//get the json file
    var output23 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output23 += '<li class="2">';
    output23 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output23 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update23').html(output23);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index24.json', function(data){//get the json file
    var output24 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output24 += '<li class="2">';
    output24 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output24 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update24').html(output24);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index25.json', function(data){//get the json file
    var output25 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output25 += '<li class="2">';
    output25 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output25 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update25').html(output25);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index26.json', function(data){//get the json file
    var output26 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output26 += '<li class="2">';
    output26 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output26 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update26').html(output26);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index27.json', function(data){//get the json file
    var output27 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output27 += '<li class="2">';
    output27 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output27 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update27').html(output27);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index28.json', function(data){//get the json file
    var output28 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output28 += '<li class="2">';
    output28 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output28 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update28').html(output28);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index29.json', function(data){//get the json file
    var output29 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output29 += '<li class="2">';
    output29 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output29 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update29').html(output29);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index30.json', function(data){//get the json file
    var output30 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output30 += '<li class="2">';
    output30 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output30 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update30').html(output30);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index31.json', function(data){//get the json file
    var output31 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output31 += '<li class="2">';
    output31 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output31 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update31').html(output31);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index32.json', function(data){//get the json file
    var output32 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output32 += '<li class="2">';
    output32 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output32 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update32').html(output32);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index33.json', function(data){//get the json file
    var output33 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output33 += '<li class="2">';
    output33 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output33 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update33').html(output33);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index34.json', function(data){//get the json file
    var output34 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output34 += '<li class="2">';
    output34 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output34 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update34').html(output34);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index35.json', function(data){//get the json file
    var output35 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output35 += '<li class="2">';
    output35 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output35 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update35').html(output35);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index36.json', function(data){//get the json file
    var output36 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output36 += '<li class="2">';
    output36 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output36 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update36').html(output36);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index37.json', function(data){//get the json file
    var output37 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output37 += '<li class="2">';
    output37 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output37 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update37').html(output37);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index38.json', function(data){//get the json file
    var output38 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output38 += '<li class="2">';
    output38 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output38 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update38').html(output38);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index39.json', function(data){//get the json file
    var output39 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output39 += '<li class="2">';
    output39 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output39 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update39').html(output39);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////
$.getJSON('json/index40.json', function(data){//get the json file
    var output40 = "";
  $.each(data, function(key, val){
   if(val.name.search(myExp) != -1){//search for the data in the json file
    output40 += '<li class="2">';
    output40 += '<a href=#!'+val.i+'>' +val.name+ '</a>';
    output40 += '</li>';
   }
  });//end each
  //output2 += "</ul>";
  $('#update40').html(output40);//output result to the update div
 });
///////////////////////////////////////////////////////////////////////

});



$(function(){
        $.param.fragment.ajaxCrawlable( true );
    // Keep a mapping of url-to-container for caching purposes.
    var cache = {
    // If url is '' (no fragment), display this div's content.
        '': {
          title: "Puiduterminoloogia",
          elem: $('.avaleht')
        }
    };
  
  // Bind an event to window.onhashchange that, when the history state changes,
  // gets the url from the hash and displays either our cached content or fetches
  // new content to be displayed.
  $(window).bind( 'hashchange', function(e) {
    // Get the hash (fragment) as a string, with any leading # removed.
    var url = $.param.fragment();
    // Remove .current class from any previously "current" link(s).
    $( 'a.current' ).removeClass( 'current' );
    // Hide any visible ajax content.
    $( '.content' ).children( ':visible' ).hide();
    // Add .current class to "current" nav link(s), only if url isn't empty.
    url && $( 'a[href="#!' + url + '"]' ).addClass( 'current' );
  
    if ( cache[ url ] ) {
      // Since the element is already in the cache, it doesn't need to be
      // created, so instead of creating it again, let's just show it!
      cache[ url ].elem.show();
      // Update the document title.
      document.title = cache[ url ].title;
    } else {
      // Show "loading" content while AJAX content loads.
      $( '.loading' ).show();
      // Load external content (stored in the XML data file) via AJAX. The
      // purpose of page.php is simply to provide the data stored in XML in
      // the more friendly JSON format.
//window.location.hash
  var ww = window.location.hash;

  var phrase = ww.replace('#!', '');

  $.getJSON( 'json/' + phrase + '.json', function(data){
    //$.getJSON( 'json/', phrase +'.json' , function(data){
      //$.getJSON( 'json/', url+'.json' , function(data){
        // Ensure that data was actually returned. You could easily go a step
        // further and check that data.attr.status isn't '404', for example.
        if ( data ) {
          // Update the document title.
          document.title = data.eesti;
          // Update the internal cache with a reference to this element as well
          // as its title.
          cache[ url ] = {
            title: data.eesti,
            elem: $( '<div class="item"/>' ).html( "<h1>" + data.eesti + "</h1><div id=\"tolked\"><ul ><li>Inglise keeles: " + data.inglise + "</li><li>Saksa keeles: " + data.saksa + "</li><li>Vene keeles: " + data.vene + "</li><li>Soome keeles: " + data.soome + "</li></ul></div><p>" + data.seletuseesti + "</p>").appendTo( '.content' )
          };
          
        }
        // Content loaded, hide "loading" content.
        $( '.loading' ).hide();
        $( '#otsingutulemused' ).hide();
      });
    }
  });
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );
  
});

 });