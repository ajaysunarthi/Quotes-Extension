var $ = document.getElementById.bind(document);

var quoteApp = function(el) {
    this.el = el;

    if (this.quotes) {
        // you have quotes now render DOM
    } else {
        this.loadQuotes();
        // fetch some quotes
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
            var response = xhr.responseText;
            console.log((JSON.parse(response) ));
        }
    };

    xhr.open('GET', chrome.extension.getURL(url), true);
    xhr.send();

}

window.quoteApp = new quoteApp($('app'));
