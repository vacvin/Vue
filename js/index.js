window.onload = function () {
	init();
}

init = function () {
	var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'You loaded this page on ' + new Date().toLocaleString()
	  }
	})
}