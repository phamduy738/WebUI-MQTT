/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

/* eslint-disable camelcase */
document.getElementById("userName").innerHTML = localStorage.getItem('userName');
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

   var bucketName = "dnctest";
   var bucketRegion = "ap-southeast-1";
   var IdentityPoolId = "ap-southeast-1:163d20f7-633d-423c-8aee-8025702d651b";

   AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
                })
            });

            var s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {Bucket: bucketName}
        });
  var host = 'localhost'
  var port = 9001;
  var topic = 'duy/test';
  var useTLS = false;
  var cleansession = true;
  var mqtt;
  var reconnectTimeout = 2000;
  var tempData = new Array();
  var topicMessage;
  var  path = '/';
  var listData = [];
  var messageValue = {}; 
  var jsonValue;
  var data = "";
  var name = "";
  var width = 0;
  var dataKey = "";
  var totalSize = 0
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
  function MQTTconnect() {
      if (typeof path == "undefined") {
        path = '/';
      }
      mqtt = new Paho.MQTT.Client(host, port, path, "mqtt_panel1" + parseInt(Math.random() * 100, 10));
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
      mqtt.onMessageDelivered = onMessageDelivered;
      console.log("Host: "+ host + ", Port: " + port + ", Path: " + path + " TLS: " + useTLS);
      mqtt.connect(options);
  }

  function onConnect() {
      var serial = getUrlParameter('serial');
      console.log(serial);
      mqtt.subscribe(serial + "/list", {qos: 0});

  };
  function onMessageDelivered(message) {
      var topic = message.destinationName;
      var serial = getUrlParameter('serial');
      if(topic ==serial +"/upload"){
        var payload = JSON.parse(message.payloadString);
        // console.log('Message "' + message['status'] + '" delivered');
        if(payload['status'] == 'end'){
           console.log("Upload success");
        }
       }
      if(topic ==serial +"/delete"){
        var payload = message.payloadString;
        var jsonString = JSON.parse(payload)
        console.log(jsonString);
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

      if(topic.indexOf('/pg') != -1){
        var count = parseInt(payload);
        console.log(payload);
        if(count != -1){
            width = parseInt(20 + count*80/100);
            console.log(width);
        }else{
            width = -1;
        }
       

      }
      if(topic.indexOf('/list') != -1){ 

        var jsonString = JSON.parse(payload)
        console.log("Topic: " + topic + ", Message payload: " + payload);
        console.log(jsonString);
        var tableMQTT = $('#example1').DataTable({
          stripeClasses: [ 'odd-row', 'even-row' ],
          data: jsonString,
          destroy: true,
          order: [[ 1, "asc" ]],
          columns: [
              { data: null,
                render: function ( data, type, row , meta) {
                return meta.row+1;
                }
              },
              { 
                data: "filename" 
              },
              { 
                data: "size"
              },
              {
                data: null,
                render:function(data, type, row, meta){
                  var b = '<button  type="button" class="btn btn btn-success btn-block myDownload"  data-toggle="modal" data-target="#modal-download">Download</button>'+
                          '<button  type="button" class="btn btn btn-danger btn-block myDel"  data-toggle="modal" data-target="#modal-sm">Delete</button>';
                  return b;
                }
              }
            ],
            initComplete: function(settings, json) {
              listData =  $('#example1').DataTable().rows().data();
              console.log(listData);
            }

        
          });     
         }
         if(topic.indexOf('/response') != -1){ 
            $("#overlay").fadeOut(300);
            if (payload == "failed") {
                alert("download failed, please try again!");
            }else{             
                top.location.href = payload;
                var arr = payload.split('.com/');
                var key_dec = decodeURIComponent(arr[1]);
                //console.log(key_dec);
                var params = {
                  Bucket: 'dnctest',
                  Key: key_dec

                };

                s3.deleteObject(params, function(err, data) {
                  if (err) console.log(err, err.stack);  // error
                  else     console.log("deleted");                 // deleted
                });
            }
            
          }
    
     
      
  };
  
  // async function loadFile(file) {
  //     let text = await file.text();
  //     dataMessage = text
  //     console.log(text);
  // }
  var fileName =  "";
  var fileType =  "";
  document.getElementById('customFile').addEventListener('change', function(){
        var file = $('#customFile').prop('files')[0];
        fileName = file.name;
        fileType = file.type;
        var fr = new FileReader();
        fr.onload = function(e){
            data= e.target.result;
            name = "/"+file.name;
        };
        fr.readAsText(file);
        
  }, false);

  var m = 0;

  function move() {
      if (m == 0) {
        m = 1;
        width = 0;
        var elem = document.getElementById("uploadBar");
        
        var id = setInterval(frame, 100);
        function frame() {
          if (width != -1){
              if (width >= 100) {
                elem.style.width = "100%";
                elem.innerHTML =  "100%";
                clearInterval(id);
                var serial = getUrlParameter('serial');
                mqtt.unsubscribe(serial + '/pg');
                m = 0;
                var params = {
                  Bucket: 'dnctest',
                  Key: dataKey

                };

                s3.deleteObject(params, function(err, data) {
                  if (err) console.log(err, err.stack);  // error
                  else     console.log("deleted");                 // deleted
                });
              } else {
                //width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
          }else{
                elem.style.width =  "0%";
                elem.innerHTML = "fail";
                m = 0;
                clearInterval(id);
                var serial = getUrlParameter('serial');
                mqtt.unsubscribe(serial + '/pg');
                var params = {
                  Bucket: 'dnctest',
                  Key: dataKey

                };

                s3.deleteObject(params, function(err, data) {
                  if (err) console.log(err, err.stack);  // error
                  else     console.log("deleted");                 // deleted
                });
          }
        
        }
      }
    }
  $('#uploadFile').click(function() {
    var serial = getUrlParameter('serial');
    mqtt.subscribe(serial + '/pg', {qos: 0});
    move();
    var files = document.getElementById('customFile').files;
    if (files) 
    {
        var file = files[0];
        var fileName = file.name;
        var keyName =  serial + "/";
        var fileType = file.type;
        var fileSize = file.size;

        dataKey = keyName + fileName;
        var upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: bucketName,
            Key: dataKey,
            Body: file,
            ACL: "public-read",
            ContentType: fileType
          }
    });

    var promise = upload.on('httpUploadProgress', function (progress) {
            
      var uploaded = parseInt((progress.loaded * 20) / progress.total);
      console.log("Uploaded :: " + uploaded+'%');
      //$("#progressbar").attr('value', parseInt((progress.loaded * 100) / progress.total));
      var progressBar = document.getElementById("uploadBar");
      width = uploaded;

    
    }).promise();

    promise.then(
        function(data) {
          console.log("Successfully uploaded data.");
          //console.log(data.Location);
          //console.log(data);
          messageValue['url'] = data.Location
          messageValue['size'] = fileSize
          messageValue['file_name'] = "/"+files[0].name;
          jsonValue = JSON.stringify(messageValue);
          topicMessage = new Paho.MQTT.Message(jsonValue);
          topicMessage.destinationName = serial +"/upload";
          topicMessage.qos = 0;
          mqtt.send(topicMessage);
        },
        function(err) {
            return alert("There was an error uploading your data: ", err.message);
          }
      );
    }
  });
  $('#example1').on('click', '.myDel', function (e) {
      e.preventDefault();
      var serial = getUrlParameter('serial');
      var rowIndex = $(this).closest('tr');
      var file_name = $('#example1').DataTable().row(rowIndex).data().filename;
      console.log(file_name);
      $("#modal-sm .modal-body").text('Do you want to delete '+ file_name + '?');
      $("#modal-sm").on('click', '.delete-file',function() {
          console.log(file_name);
          var messageDelete = {}; 
          messageDelete['file_name'] = file_name;
          jsonValue = JSON.stringify(messageDelete);
          topicMessage = new Paho.MQTT.Message(jsonValue);
          topicMessage.destinationName = serial +"/delete";
          topicMessage.qos = 0;
          mqtt.send(topicMessage);
          $('#modal-sm').modal('toggle');
      });
    });
    $('#example1').on('click', '.myDownload', function (e) {
      e.preventDefault();
      var serial = getUrlParameter('serial');
      var rowIndex = $(this).closest('tr');
      var file_name = $('#example1').DataTable().row(rowIndex).data().filename;
      //console.log(file_name);
      $("#modal-download .modal-body").text('Do you want to download '+ file_name + '?');
      $("#modal-download").on('click', '.download-file',function() {
          
          $("#overlay").fadeIn(300);　
          var messageDownload = {}; 
          messageDownload['file_name'] = file_name;
          console.log(messageDownload);
          jsonValue = JSON.stringify(messageDownload);
          topicMessage = new Paho.MQTT.Message(jsonValue);
          topicMessage.destinationName = serial +"/download";
          topicMessage.qos = 0;
          mqtt.send(topicMessage);
          mqtt.subscribe(serial + '/response', {qos: 0});
          $('#modal-download').modal('toggle');
          $("#modal-download").off('click', '.download-file');
      });
    });

  /*
  $('#uploadFile').click(function() {
      localStorage.clear();
      move();
      if(data != ""){
        var serial = getUrlParameter('serial');
        mqtt.subscribe(serial + '/pg', {qos: 0});
        var j;
        for (j = 0; j < listData.length; j++) {
            if(name == listData[j].filename){
                alert("This file is exist");
                return;
            }
        }

        var n = 1000;
        var totalData = data.length
        if(totalData < n*3){
            n = Math.floor(totalData/3);
            console.log(n);
        }
        
        var re =  new RegExp('(.|[\r\n]){1,'+ n +'}', 'g');
        var dataSplit  = data.match(re);
        var i;
        messageValue['file_name'] = name;
        messageValue['total'] = dataSplit.length;
        totalSize = dataSplit.length;
        // console.log(dataSplit);
        console.log(dataSplit.length)
        for (i = 0; i < dataSplit.length; i++) {
            if (i==0){
                messageValue['status'] = 'start';
                messageValue['count'] =(i+1).toString();
                messageValue['data'] = dataSplit[i];
                jsonValue = JSON.stringify(messageValue);
                topicMessage = new Paho.MQTT.Message(jsonValue);
                topicMessage.destinationName = serial +"/upload";
                topicMessage.qos = 0;
                mqtt.send(topicMessage);
            }else if (i == dataSplit.length-1){
                messageValue['status'] = 'end';
                messageValue['count'] = (i+1).toString();
                messageValue['data'] = dataSplit[i];
                jsonValue = JSON.stringify(messageValue);
                topicMessage = new Paho.MQTT.Message(jsonValue);
                topicMessage.destinationName = serial +"/upload";
                topicMessage.qos = 0;
                mqtt.send(topicMessage);
            }else{
                messageValue['status'] = "pending";
                messageValue['count'] = (i+1).toString();
                messageValue['data'] = dataSplit[i];
                jsonValue = JSON.stringify(messageValue);
                topicMessage = new Paho.MQTT.Message(jsonValue);
                topicMessage.destinationName = serial +"/upload";
                topicMessage.qos = 0;
                mqtt.send(topicMessage);
            }
          
        }
       
      }
  });
  */


  
 
 /* $('#example').on('click', '.myDownload', function () {
    var rowIndex = $(this).closest('tr');
    var data = tableMQTT.row(rowIndex).data().serial;
   

  });*/
    


  $(document).ready(function() {
      MQTTconnect();
  });

  
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

