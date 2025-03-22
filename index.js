function $(id) { return document.getElementById(id) }

(function(){

if(window.RogueMon) {
	var source = $('source'),
		rogueMon = $('rogueMon');
		
	source.onscroll = function() {
		rogueMon.scrollTop = source.scrollTop;
	}
}

(window.onhashchange = function() {
	var target, page, previousPage;
	
	if(location.hash) {
		page = target = document.querySelector(location.hash);
		
		while(page && page.className != 'page') {
			page = page.parentNode;
		}
	}
	
	(previousPage = document.querySelector('.current.page')) && (previousPage.className = 'page');
	
	if(page) {
		page.className = 'current page';
		
		document.body.className = 'in-page';
	}
	else {
		document.body.className = 'home';
	}

	if(target) {
		target.scrollIntoView(true);
	}
})();
		
})();