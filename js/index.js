window.onload = function () {
	init();
}

init = function () {
	var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue!'
	  }
	});
}