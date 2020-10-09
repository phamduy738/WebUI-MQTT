/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

/* eslint-disable camelcase */
$(document).ready(function() { 
    var cookieValue = Cookies.get("cnc24h");
    // console.log(cookieValue);
    $.ajax({
      url: "http://dnccloud.cnc24h.vn/dnc/api/auth/me",
      type: 'GET',
      crossDomain: true,
      // Fetch the stored token from localStorage and set in the header
      headers: {"Authorization": "Bearer "+cookieValue},
      success: function(data) {
          // console.log(data);
          // Cookies.set("cnc24h", data.token, { expires: 7 });
          localStorage.setItem('userId', data.user.id);
          localStorage.setItem('userName', data.user.name);
      },
      error: function(xhr, textStatus, errorThrown) {
          console.log(errorThrown);
          // window.location.href = 'login.html';
      }
    });
});

document.getElementById("userName").innerHTML = localStorage.getItem('userName');

$("#logout").click(function(){
  // localStorage.setItem('token', "");
  // localStorage.setItem('userId', "");
  // localStorage.setItem('userName', "");
  Cookies.remove('cnc24h')
  localStorage.clear();
  window.location.href = 'login.html';
});


(function ($) {
  'use strict'

  var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)

  var navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray'
  ]

  var navbar_light_skins = [
    'navbar-light',
    'navbar-warning',
    'navbar-white',
    'navbar-orange'
  ]

  $container.append(
    '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
  )

  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0')
    } else {
      $('.main-header').removeClass('border-bottom-0')
    }
  })
  var $no_border_container = $('<div />', { class: 'mb-1' }).append($no_border_checkbox).append('<span>No Navbar border</span>')
  $container.append($no_border_container)

  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm')
    } else {
      $('body').removeClass('text-sm')
    }
  })
  var $text_sm_body_container = $('<div />', { class: 'mb-1' }).append($text_sm_body_checkbox).append('<span>Body small text</span>')
  $container.append($text_sm_body_container)

  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm')
    } else {
      $('.main-header').removeClass('text-sm')
    }
  })
  var $text_sm_header_container = $('<div />', { class: 'mb-1' }).append($text_sm_header_checkbox).append('<span>Navbar small text</span>')
  $container.append($text_sm_header_container)

  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm')
    } else {
      $('.nav-sidebar').removeClass('text-sm')
    }
  })
  var $text_sm_sidebar_container = $('<div />', { class: 'mb-1' }).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>')
  $container.append($text_sm_sidebar_container)

  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm')
    } else {
      $('.main-footer').removeClass('text-sm')
    }
  })
  var $text_sm_footer_container = $('<div />', { class: 'mb-1' }).append($text_sm_footer_checkbox).append('<span>Footer small text</span>')
  $container.append($text_sm_footer_container)

  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat')
    } else {
      $('.nav-sidebar').removeClass('nav-flat')
    }
  })
  var $flat_sidebar_container = $('<div />', { class: 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>')
  $container.append($flat_sidebar_container)

  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy')
    } else {
      $('.nav-sidebar').removeClass('nav-legacy')
    }
  })
  var $legacy_sidebar_container = $('<div />', { class: 'mb-1' }).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>')
  $container.append($legacy_sidebar_container)

  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact')
    } else {
      $('.nav-sidebar').removeClass('nav-compact')
    }
  })
  var $compact_sidebar_container = $('<div />', { class: 'mb-1' }).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>')
  $container.append($compact_sidebar_container)

  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent')
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent')
    }
  })
  var $child_indent_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>')
  $container.append($child_indent_sidebar_container)

  var $child_hide_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-collapse-hide-child'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-collapse-hide-child')
    } else {
      $('.nav-sidebar').removeClass('nav-collapse-hide-child')
    }
  })
  var $child_hide_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_hide_sidebar_checkbox).append('<span>Sidebar nav child hide on collapse</span>')
  $container.append($child_hide_sidebar_container)

  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand')
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand')
    }
  })
  var $no_expand_sidebar_container = $('<div />', { class: 'mb-1' }).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>')
  $container.append($no_expand_sidebar_container)

  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm')
    } else {
      $('.brand-link').removeClass('text-sm')
    }
  })
  var $text_sm_brand_container = $('<div />', { class: 'mb-4' }).append($text_sm_brand_checkbox).append('<span>Brand small text</span>')
  $container.append($text_sm_brand_container)

  $container.append('<h6>Navbar Variants</h6>')

  var $navbar_variants = $('<div />', {
    class: 'd-flex'
  })
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function () {
    var color = $(this).data('color')
    var $main_header = $('.main-header')
    $main_header.removeClass('navbar-dark').removeClass('navbar-light')
    navbar_all_colors.forEach(function (color) {
      $main_header.removeClass(color)
    })

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark')
    } else {
      $main_header.addClass('navbar-light')
    }

    $main_header.addClass(color)
  })

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
  ]

  var accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
  ]

  // $(document).ready(function() {
  //     MQTTconnect();
  // });

  //var host = '13.229.90.245';
  var host = 'localhost';
  var port = 9001;
  var topic = '';
  var useTLS = false;
  var cleansession = true;
  var mqtt;
  var reconnectTimeout = 2000;
  var tempData = new Array();
  var dataMessage = "";
  var topicMessage;
  var  path = '/';
  var listData = []
  var idFactory;
  var base = 'http://dnccloud.cnc24h.vn/dnc'
  function MQTTconnect() {
      if (typeof path == "undefined") {
        path = '/';
      }
      mqtt = new Paho.MQTT.Client(host, port, path, "mqtt_panel" + parseInt(Math.random() * 100, 10));
      var options = {
                timeout: 3,
                useSSL: useTLS,
                cleanSession: cleansession,
                onSuccess: onConnect,
                onFailure: function (message) {
                    console.log(message.errorMessage);
                    //$('#status').html("Connection failed: " + message.errorMessage + "Retrying...");
                    setTimeout(MQTTconnect, reconnectTimeout);
                }
            };

      mqtt.onConnectionLost = onConnectionLost;
      mqtt.onMessageArrived = onMessageArrived;
      console.log("Host: "+ host + ", Port: " + port + ", Path: " + path + " TLS: " + useTLS);
      mqtt.connect(options);
  }

  function onConnect() {
      //$('#status').html('Connected to ' + host + ':' + port + path);
      
      // listData.forEach(function (tp) {
      //    console.log(tp.name);
      // });
      var i;
      for (i = 0; i < listData.length; i++) {
          // console.log(listData[i].name);
          mqtt.subscribe(listData[i].serial + '/status', {qos: 0});

      }
  };

  function onConnectionLost(response) {
      setTimeout(MQTTconnect, reconnectTimeout);
      console.log("Connection lost: " + response.errorMessage + ". Reconnecting...");
      //$('#status').html("Connection lost: " + response.errorMessage + ". Reconnecting...");
  };

  function onMessageArrived(message) {
      var topic = message.destinationName;
      var payload = message.payloadString;
      console.log(payload);
      console.log("Topic: " + topic + ", Message payload: " + payload);
      var table = $('#example').DataTable();

      var indexes = table.rows().eq( 0 ).filter( function (rowIdx) {
        return table.cell( rowIdx, 1 ).data() + '/status' === topic ? true : false;
      } );
      
      // console.log(payload);
      var status;
      if(payload.trim() ==='online'){
        status = '<span class="status text-success">&bull;</span> online' ;
        table.cell(indexes[0],2).data(status).draw(false);
      }else{
        status = '<span class="status text-danger">&bull;</span> offline' ;
        table.cell(indexes[0],2).data(status).draw(false);
      }
      
      
       
      
  };
  function initTable(id){
        // console.log(id)
        $('#example').DataTable({
              language: {
                emptyTable: "No data available in table", // 
                loadingRecords: "Please wait .. ", // default Loading...
                zeroRecords: "No matching records found"
              },
              stateSave: true,
              destroy: true,
              stripeClasses: [ 'odd-row', 'even-row' ],
              ajax: {
                url: base + '/api/v1/device/'+ id,
                method: "GET",
                crossDomain: true,
                
              },
              autoFill: false,
              
              columns: [
                  { title: 'id',
                    data: null,
                    render: function ( data, type, row , meta) {
                    return meta.row+1;
                    }},
                  { data: "serial" },
                  { 
                    data: "status",
                    render:function(data, type, row, meta){
                      if (row.status == 'offline' ||row.status == '<span class="status text-danger">&bull;</span> offline' ){
                        return '<span class="status text-danger">&bull;</span> offline' ;
                        }
                      return row.status;
                     } 
                  },
                  { data: "name" },
                  {
                    data: null,
                    render:function(data, type, row, meta){
                      var b = '<button  type="button" class="btn btn-primary btn-block myView">View</button>'+
                              '<button  type="button" class="btn btn btn-danger btn-block myDel" data-toggle="modal" data-target="#modal-sm">Delete</button>';
                      return b;
                    }
                  }
              ],
              initComplete: function(settings, json) {
                listData =  $('#example').DataTable().rows().data();
                MQTTconnect();
              }
          });


        $('#example').on('click', '.myDel', function (e) {
          e.preventDefault();
          
          // var rowIndex = $(this).closest('tr');
          
          var rowIndex = $(this).closest('tr');
          var serial =  $('#example').DataTable().row(rowIndex).data().serial;
          var deviceName =  $('#example').DataTable().row(rowIndex).data().name;
          $("#modal-sm .modal-body").text('Do you want to delete '+ deviceName + '?');
          $("#modal-sm").on('click', '.delete-machine',function() {
               $.ajax({ 
                  type:'GET', 
                  url:base + '/api/v1/device/'+ serial + '/delete', 
                  success:function(data){ 
                       $('#example').DataTable().row(rowIndex).remove().draw();
                       $('#modal-sm').modal('toggle');
                  }
                
              }); 
            });
        });
          
         

        $('#example').on('click', '.myView', function (e) {
          e.preventDefault();

          var rowIndex = $(this).closest('tr');
          var data =  $('#example').DataTable().row(rowIndex).data().serial;
          var status =  $('#example').DataTable().row(rowIndex).data().status;
          // console.log(status);
          if(status.includes("online")){
             $('#selectFactory').prop('selectedIndex',0);
             window.location.href ="data-inner.html?serial=" + data;
          }else{
            alert('This device is offline');
          }
         
        });
    }

  $.ajax({
          url: base + '/api/v1/factory',
          method: "GET",
          crossDomain: true,
          success: function(data){
              // console.log(data.data);
              $.each(data.data, function(key, modelName){
                  var option = new Option(modelName, modelName);
                  $(option).html(modelName.name).val(modelName.id);
                  $("#selectFactory").append(option);
              });

          },
          complete: function(data) {
            if(data.responseJSON.data.length>0){
              idFactory = data.responseJSON.data[0].id;
              // console.log(data.responseJSON.data[0].id);
              initTable(idFactory);
            }
          }

      });
  $("#modalAddMachine").on('click', '.btnAddMachine',function() {
      console.log('click');
      var inputSerial = $("#inputSerial").val();
      var inputPassword = $("#inputPassword").val();
      var inputName = $("#inputName").val();
      var dataS = {
              "name": inputName,
              "serial": inputSerial,
              "status": "offline",
              "factory_id": idFactory,
              "password": inputPassword
              };
      $.ajax({ 
          type:'POST',
          dataType: "json", 
          data: dataS,
          url:base + '/api/v1/device', 
          success:function(data){ 
            if(data.status_code == 201){
              $('#modalAddMachine').modal('toggle');
              var tableMQTT = $('#example').DataTable();
              tableMQTT.ajax.reload();
            }else if(data.status_code == 202){
              //console.log(data.status_code);
              document.getElementById("passwordHelp").innerHTML = "Duplicate serial."
       
            }else{
              //console.log(data.status_code);
              document.getElementById("passwordHelp").innerHTML = "Wrong serial or password."
              
            }
          },
          error: function (jqXHR, exception) {
              console.log(jqXHR);
              // Your error handling logic here..
          }
        
      }); 
  });

  $("#selectFactory").on('change',function ()
  {   
       idFactory = $(this).val();
       initTable(id)
  });
  
  


  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}
  $container.append('<h6>Accent Color Variants</h6>')
  var $accent_variants = $('<div />', {
    class: 'd-flex'
  })
  $container.append($accent_variants)
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).data('color')
    var accent_class = color
    var $body = $('body')
    accent_colors.forEach(function (skin) {
      $body.removeClass(skin)
    })

    $body.addClass(accent_class)
  }))

  $container.append('<h6>Dark Sidebar Variants</h6>')
  var $sidebar_variants_dark = $('<div />', {
    class: 'd-flex'
  })
  $container.append($sidebar_variants_dark)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color')
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  $container.append('<h6>Light Sidebar Variants</h6>')
  var $sidebar_variants_light = $('<div />', {
    class: 'd-flex'
  })
  $container.append($sidebar_variants_light)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color')
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  var logo_skins = navbar_all_colors
  $container.append('<h6>Brand Logo Variants</h6>')
  var $logo_variants = $('<div />', {
    class: 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: '#'
  }).text('clear').on('click', function (e) {
    e.preventDefault()
    var $logo = $('.brand-link')
    logo_skins.forEach(function (skin) {
      $logo.removeClass(skin)
    })
  })
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color')
    var $logo = $('.brand-link')
    logo_skins.forEach(function (skin) {
      $logo.removeClass(skin)
    })
    $logo.addClass(color)
  }).append($clear_btn))

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      class: 'd-flex flex-wrap mb-3'
    })

    colors.forEach(function (color) {
      var $color = $('<div />', {
        class: (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      })

      $block.append($color)

      $color.data('color', color)

      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      })

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
      })

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }

  $('.product-image-thumb').on('click', function () {
    var image_element = $(this).find('img')
    $('.product-image').prop('src', $(image_element).attr('src'))
    $('.product-image-thumb.active').removeClass('active')
    $(this).addClass('active')
  })
})(jQuery)

