window.onload = function() {
	var mainNode = document.querySelector(".main .parents .main-img");
	var fontNode = document.querySelectorAll(".main .main-font");
	var liNode = document.querySelectorAll(".main .parents .main-img li");
	
	
	//开机动画,覆盖层等待图片加载完成之后再消失
	loadingAn();
	function loadingAn() {
		var shade = document.querySelector(".shade");
		var arr = ['img_bg_1.jpg','img_bg_2.jpg','img_bg_3.jpg'];
		for(var i=0;i<arr.length;i++) {
			var img = new Image();
			img.src= "img/"+arr[i];
			img.onload = function() {
				setTimeout(function() {
					shade.style.display = "none";
					fontNode[0].style.transition = "1s";
					fontNode[0].style.marginTop = "0px";
					document.documentElement.style.overflowY = "auto";
					document.body.style.overflowY = "auto";
				}, 2000);
			}
		}
	}
	
	//设置li背景图片的高度
	height();
	function height() {
		var broadside = document.querySelector(".broadside");
		var shade = document.querySelector(".page-all .shade");
		for (var i = 0; i < liNode.length; i++) {
			liNode[i].style.height = document.documentElement.clientHeight + "px";
		}
		mainNode.style.height = liNode[0].clientHeight + "px";
		//左侧边栏
		broadside.style.height = document.documentElement.clientHeight + "px";
		//覆盖层
		shade.style.height = document.documentElement.clientHeight + "px";
	}
	//设置高度
	origin();
	function origin() {
		var origin = document.querySelector(".main-origin");
		var paging = document.querySelector(".main-paging");
		var pars = document.querySelector(".parents");
		origin.style.top = (mainNode.offsetHeight - 30) + "px";
		paging.style.height = mainNode.offsetHeight + "px";
		pars.style.height = mainNode.offsetHeight + "px";
	}
	
	//列表按钮和关闭按钮click
	click();
	function click() {
		var open = document.querySelector(".open");
		var close = document.querySelector(".close");
		var broadside = document.querySelector(".broadside");
		var main = document.querySelector(".main");

		open.onclick = function() {
			open.style.display = "none";
			close.style.display = "block";
			broadside.style.transform = "translateX(0)";
			main.style.transform = "translateX(270px)";
		}
		close.onclick = function() {
			open.style.display = "block";
			close.style.display = "none";
			broadside.style.transform = "translateX(-270px)";
			main.style.transform = "translateX(0px)";
		}
	}

	//图片轮播
	moyu.shuffling();

}
