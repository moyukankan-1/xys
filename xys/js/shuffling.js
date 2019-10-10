+(function(w) {
	w.moyu = {}
	w.moyu.shuffling = function() {
		var prev = document.querySelector(".main .main-paging .prev");
		var next = document.querySelector(".main .main-paging .next");
		var fontNode = document.querySelectorAll(".main .main-font");
		var liNode = document.querySelectorAll(".main .parents .main-img li");
		var aksNode = document.querySelectorAll(".main .main-origin li a");
		var timer;
		var n = 0;
		//上一张
		prev.onclick = function() {
			nextPage(false);
		}
		//下一张
		next.onclick = function() {
			nextPage(true);
		}
		//鼠标移入按钮停止轮播
		prev.onmouseenter = function() {
			clearInterval(timer)
		}
		prev.onmouseleave = function() {
			autoNextPage()
		}
		next.onmouseenter = function() {
			clearInterval(timer)
		}
		next.onmouseleave = function() {
			autoNextPage()
		}

		autoNextPage();
		//	自动循环下一张
		function autoNextPage() {
			timer = setInterval(function() {
				nextPage(true);
			}, 4000)
		}

		function nextPage(next) {
			if (typeof next == "boolean") {
				if (next) {
					n++;
					if (n == 3) {
						n = 0;
					}
					for (var i = 0; i < liNode.length; i++) {
						liNode[i].style.transition = "1s opacity";
						liNode[i].style.opacity = 0;
					}
					liNode[n].style.transition = "1s opacity";
					liNode[n].style.opacity = 1;
				} else {
					n--;
					if (n == -1) {
						n = 2;
					}
					for (var i = 0; i < liNode.length; i++) {
						liNode[i].style.opacity = 0;
					}
					liNode[n].style.transition = "1s opacity";
					liNode[n].style.opacity = 1;
				}
			} else {
				for (var i = 0; i < liNode.length; i++) {
					liNode[i].style.opacity = 0;
				}
				liNode[next].style.transition = "1s opacity";
				liNode[next].style.opacity = 1;
				n = next;
			}
			updateCircle(n);
			fonts();
		}
		//更新圆点
		function updateCircle(next) {
			for (var i = 0; i < aksNode.length; i++) {
				tools.removeClass(aksNode[i], "pos");
			}
			tools.addClass(aksNode[next], "pos");
		}
		clickCircle();
		//给所有的圆点加监听
		function clickCircle() {
			for (var i = 0; i < aksNode.length; i++) {
				aksNode[i].index = i;
				aksNode[i].onclick = function() {
					clearInterval(timer)
					if (this.index != n) {
						nextPage(this.index);
					}
				}
			}
		}
		//文字渐变
		function fonts() {
			for (var i = 0; i < fontNode.length; i++) {
				fontNode[i].style.visibility = "hidden";
				fontNode[i].style.opacity = "0";
				fontNode[i].style.marginTop = "100px";
				fontNode[i].style.transition = "none";
			}
			fontNode[n].style.visibility = "visible";
			fontNode[n].style.transition = "1.5s";
			fontNode[n].style.marginTop = "0px";
			fontNode[n].style.opacity = "1";
		}
	}
})(window)
