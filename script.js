var $  = document.getElementById.bind(document);

var quoteApp = function (el) {
	this.el = el;

	if(this.quotes){
		// fetch some quotes
	}else {
		// you have quotes now render DOM
	}
}

window.quoteApp = new quoteApp($('app'));