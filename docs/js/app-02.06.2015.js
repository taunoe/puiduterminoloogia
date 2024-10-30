$(document).ready(function() {
      $("#home").click(function() {
        $( '.avaleht' ).show();
        $( '#keeled' ).show();
        $( '#pealkiri' ).show();
        $( '#otsingutulemused' ).hide();
        $( '.item' ).hide();
      });
      $("#inglise-link").click(function() {
        $.get('html/index-inglise.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#eesti-link").click(function() {
        $.get('html/index-eesti.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#saksa-link").click(function() {
        $.get('html/index-saksa.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#soome-link").click(function() {
        $.get('html/index-soome.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#vene-link").click(function() {
        $.get('html/index-vene.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
  });