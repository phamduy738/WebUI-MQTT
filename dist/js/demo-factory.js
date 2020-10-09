document.getElementById("userName").innerHTML = localStorage.getItem('userName');
$("#logout").click(function(){
  // localStorage.setItem('token', "");
  // localStorage.setItem('userId', "");
  // localStorage.setItem('userName', "");
  Cookies.remove('cnc24h')
  localStorage.clear();
  window.location.href = 'login.html';
});

var base = 'http://dnccloud.cnc24h.vn/dnc';
var userId = localStorage.getItem('userId');
var tableMQTT = $('#example2').DataTable({
        language: {
          emptyTable: "No data available in table", // 
          loadingRecords: "Please wait .. ", // default Loading...
          zeroRecords: "No matching records found"
        },
        stripeClasses: [ 'odd-row', 'even-row' ],
        ajax: {
          url: base + '/api/v1/factory/' + userId,
          method: "GET",
          crossDomain: true,
         
        },
        autoFill: false,
        columns: [
            { 
              // title: 'No',
              // data: null,
              // render: function ( data, type, row , meta) {
              // return meta.row+1;
              // }
              data:"id"
            },
            { data: "name" },
            {
              data: null,
              render:function(data, type, row, meta){
                var b = '<button  type="button" class="btn btn-primary btn-block myEdit">Edit Name</button>'+
                '<button  type="button" class="btn btn btn-danger btn-block myDel">Delete</button>';
                return b;
              }
            }
        ],
        initComplete: function(settings, json) {
                // tableMQTT.columns( [1] ).visible( false );
        }
    });

 
  $('#example2').on('click', '.myDel', function (e) {
    e.preventDefault();
    $("#modalDel").modal("show");
    var rowIndex = $(this).closest('tr');
    var id =  $('#example2').DataTable().row(rowIndex).data().id;
    $("#modalDel").on('click', '.delFactory',function() {
      $.ajax({ 
              type:'GET', 
              url:base + '/api/v1/factory/'+ id + '/delete', 
              success:function(data){ 
                  console.log(data);
                 $("#modalDel").modal("toggle");
                 tableMQTT.ajax.reload();
              }
            
          }); 
    });
  });
  $('#example2').on('click', '.myEdit', function (e) {
      e.preventDefault();
      $("#modalEdit").modal("show");
      var rowIndex = $(this).closest('tr');
      var id =  $('#example2').DataTable().row(rowIndex).data().id;
      $("#modalEdit").on('click', '.editChange',function() {
          var nameFactory = $("#inputName2").val();
          var dataS = {
                  "name":nameFactory
                  };
          
          
          // console.log(id);
           $.ajax({ 
                type:'PUT',
                dataType: "json", 
                data: dataS, 
                url:base + '/api/v1/factory/'+ id , 
                success:function(data){ 
                    $("#modalEdit").modal("toggle");
                    tableMQTT.ajax.reload();
                }
              
            }); 
       });
  });
  
  $('#addFactory').on('click',  function (e) {
      var nameFactory = $("#inputName").val();
      var dataS = {
              "name": nameFactory,
              "user_id": userId
              };
      $.ajax({ 
          type:'POST',
          dataType: "json", 
          data: dataS,
          url:base + '/api/v1/factory', 
          success:function(data){ 
              $('#modalAdd').modal('toggle');
               tableMQTT.ajax.reload();
          }
        
      }); 
  });