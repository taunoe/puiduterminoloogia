$(document).ready(function() {
      $("#home").click(function() {
        $( '.avaleht' ).show();
        $( '#keeled' ).show();
        $( '#pealkiri' ).show();
        $( '#otsingutulemused' ).hide();
        $( '.item' ).hide();
        window.location.hash = $(this).attr('href');//Puhastame urli 

      });

      $( "#eesti-link" ).click(function() {
        $.get('html/index-eesti.html', function(data) {
          $("#ava").html(data);
        });
      });
      
      $("#inglise-link").click(function() {
        $.get('html/index-inglise.html', function(data) {
          $("#ava").html(data);
        });
      });

      $("#saksa-link").click(function() {
        $.get('html/index-saksa.html', function(data) {
          $("#ava").html(data);
        });
      });

      $("#soome-link").click(function() {
        $.get('html/index-soome.html', function(data) {
          $("#ava").html(data);
        });
      });

      $("#vene-link").click(function() {
        $.get('html/index-vene.html', function(data) {
          $("#ava").html(data);
        });
      });

  });