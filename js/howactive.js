$(function(){
	$('.filter-list button').click(function(){
		// console.log('kiemtra');
		$('.filter-list button').removeClass('how-active');
		$(this).addClass('how-active');

	})

	$('.filter-search .btn-search ').click(function(){
		console.log('kiemtra');
		$('.search-product').slideToggle(500);
	})
	$('.wrap-num-product .btn-num-down').click(function(){
		// console.log('kiemtra');
		var b =Number($(this).next().val());
		
		if ( b <= 0) {
			
		}else{
			$(this).next().val(b-1);
		}
	})
	$('.wrap-num-product .btn-num-up').click(function(){
		// console.log('kiemtra');
		
			
		var a =Number($(this).prev().val()) ; //prev la phan tu dang sau
		$(this).prev().val(a+1);
	})
})

