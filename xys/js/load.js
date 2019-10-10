var hobbyH2 = document.querySelector(".main-content h2");
var hobbyLi = document.querySelectorAll(".main-content .content-hobby li");
var travelH2 = document.querySelector(".main-travel h2");
var travelLi = document.querySelectorAll(".main-travel .travel-address li");
var travelImg = document.querySelectorAll(".main-travel .travel-address li img");


window.onscroll = function() {
	loadHobbyH2(hobbyH2);
	loadHobbyLi(hobbyLi);
	loadTravelH2(travelH2);
	loadTravelLi(travelLi);
	loadTravelImg(travelImg);
}


var elementHeight = document.documentElement.clientHeight;

function loadHobbyH2(item) {
	if (item.getBoundingClientRect().top < elementHeight) {
		tools.addClass(item, "fadeInLeft");
		item.style.opacity = "1";
	}
}

function loadHobbyLi(item) {
	for (var i = 0; i < item.length; i++) {
		if (item[i].getBoundingClientRect().top < elementHeight) {
			tools.addClass(item[i], "fadeInLeft");
			item[i].style.animationDelay = (i * 0.3) + "s";
			setTimeout(function() {
				for (var j = 0; j < item.length; j++) {
					item[j].style.opacity = "1";
				}
			}, 1800)
		}
	}
}

function loadTravelH2(item) {
	if (item.getBoundingClientRect().top < elementHeight) {
		tools.addClass(item, "fadeInLeft");
		item.style.opacity = "1";
	}
}

function loadTravelLi(item) {
	for (var i = 0; i < item.length; i++) {
		if (item[i].getBoundingClientRect().top < elementHeight) {
			tools.addClass(item[i], "fadeInLeft");
			item[i].style.animationDelay = (i * 0.3) + "s";
			setTimeout(function() {
				for (var j = 0; j < item.length; j++) {
					item[j].style.opacity = "1";
				}
			}, 1800)
		}
	}
}

function loadTravelImg(item) {
	for (var i = 0; i < item.length; i++) {
		if (item[i].getBoundingClientRect().top < elementHeight) {
			item[i].src = item[i].dataset.src;
		}
	}
}
