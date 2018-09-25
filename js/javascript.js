var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var phone = document.getElementById('phone');

 var usernameRgx=/^([a-zA-Z]{3,20})$/;
 var passwordRgx =/^([a-zA-Z0-9]{6,20})$/;
 var emailRgx =/^([a-zA-Z0-9]{3,20})+@+([a-z]{3,10})\.([a-z]{3,5})$/;
 var phoneRgx = /^037+([0-9]{8,19})$/;

 btn.onclick =function(){
 	if (username.value == '') {
 		alert("Bạn phải nhập tên tài khoản ");
 		username.focus();
 		return false;
 	}else {
 		if (!(usernameRgx.test(username.value))) {
 			alert("Tên tài khoản phải từ 3 kí tự trở lên")
 			username.focus();
 			return false;

 		}
 	}
 	if (password.value == '') {
 		alert("Bạn phải nhập mật khẩu ");
 		password.focus();
 		return false;
 	}else{
 		if (!(passwordRgx.test(password.value))) {
 			alert("Mật khẩu phải từ 6 đến 20 ký tự ");
 			password.focus();
 			return false;

 		}
 	}
 	if (email.value =='') {
 		alert("Bạn phải nhập password ");
 		email.focus();
 		return false;
 	}else{
 		if (!(emailRgx.test(email.value))) {
 			alert("Email không đúng ");
 			email.focus();
 			return false;
 		}
 	}
 	if (phone.value == '') {
 		alert("Bạn phải nhập số điện thoại ");
 		phone.focus();
 		return false;
 	}else{
 		if (!(phoneRgx.test(phone.value))) {
 			alert("số điện thoại sai ");
 			phone.focus();
 			return false;	
 		}
 	}
 	alert("Bạn đã đăng nhập thành công ");	
 }