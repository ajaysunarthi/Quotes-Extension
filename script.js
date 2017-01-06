var $ = document.getElementById.bind(document);

var quoteApp = function(el) {
    this.el = el;

    if (this.quotes) {

        // you have quotes now render DOM
        this.renderQuote();

    } else {
        // fetch some quotes
        this.loadQuotes();
        
    }
}

quoteApp.prototype.loadQuotes = function() {
    this.Ajax('./quotes.json');
}

quoteApp.prototype.Ajax = function(url) {

    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse( xhr.responseText );
            self.save(response);
            self.renderQuote();
        }
    };

    xhr.open('GET', chrome.extension.getURL(url), true);
    xhr.send();
}

quoteApp.prototype.save = function(response) {
	localStorage.Quotes = JSON.stringify(response);
	this.Quotes = response;
}

quoteApp.prototype.renderQuote = function() {
	var size = this.Quotes.length;
	var randomIndex = Math.floor(Math.random()*(size-1));
	var quote = this.Quotes[randomIndex];
	this.html(quote);
}

quoteApp.prototype.html = function(html) {
	
	var h1 = document.createElement("H1");
    var t1 = document.createTextNode(html.quote);
    h1.appendChild(t1);
    h1.className = 'quote';

    var h2 = document.createElement("H2");
    var t2 = document.createTextNode(html.author);
    h2.appendChild(t2);
    h2.className = 'author';

    this.el.appendChild(h1);
    this.el.appendChild(h2);
}

window.quoteApp = new quoteApp($('app'));



























