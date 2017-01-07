document.addEventListener('plusready',function(){
   var ws = plus.webview.currentWebview();
   var goodsid = ws.goodsid;
   var html = "";
   $.ajax({ 
	   	type:"get",
	   	url:apiRoot+"/home/shop/exchangoods",
	   	data : {
	   		goodsid : goodsid 
	   	},
	   	dataType:'json', 
	   	success:function(data){   
	   		console.log(JSON.stringify(data));
		  $('#exchangimg > img').attr('src', webRoot+data.litpic);
		  $('#exchangename').text(data.title); 
		  $('#money').text(Number(data.price));
		  html +='<li class="mui-table-view-cell mui-col-xs-6 mui-text-left">'+
				 '<p>'+data.description+'</p><p>'+data.body.replace(/src="/g ,'src="'+webRoot)+'</p>';
		$.each(data.pho,function(k,v){
			html +='<p><img src ="'+webRoot+v+'" style="width:100%;"></p>';
		})
			html +=	 '</li>';
				 
		  $('#exchangxix').html(html); 
		
	   	},error:function(e){
	   		
	   	}
	});
	
	$('#duihuan').on('click',function(){
   	  plus.webview.create('./buy-ok.html','buy-ok.html',{},{goodsid : goodsid, fenlei : 1 ,spage : 1}).show('pop-in',200);
   })
   
})
function exchangegoods(id){
	plus.webview.create('./exchange-goods.html','exchange-goods.html',{},{goodsid : id}).show('pop-in',200);
}
