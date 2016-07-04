var disqus_config = function() {
	this.page.url = (document.querySelector('link[rel="canonical"]')||location).href.replace(/^http:\/\//i, 'https://');
	this.page.identifier = this.page.url; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
}
