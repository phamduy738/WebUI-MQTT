 $(document).ready(function() { 
        
        
         window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
        }
    
        window.expiredRecaptchaCallback = function () {
            $('input[data-recaptcha]').val("").trigger('change');
        }
        // $('#loginAPI').validator();
       
        $('#loginAPI').submit(function(e) { 
            e.preventDefault()
            var username = $("input#username").val();
            var password = $("input#password").val();
             console.log(username);
             var dataS = {
              "login":username,
              "password":password
              };
            $.ajax({
            dataType: "json",
            type: "POST",
            url: "http://dnccloud.cnc24h.vn/dnc/api/auth/login",
            data: dataS,
            success: function(data) {
                console.log(data);
                // localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('userName', data.user.name);
                Cookies.set("cnc24h", data.token, { expires: 7777 });
                window.location.href = 'index.html';
               
            },
            error: function(error) {
                console.log(error);
                alert("User or Password is wrong");
            }
            });
            return false;
               

            }); 


      
    });