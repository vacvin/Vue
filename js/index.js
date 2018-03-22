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

    var app2 = new Vue({
      el: '#app2',
      data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    });

	var app3 = new Vue({
		el: '#app3',
		data: {
			seen: true
		},
	    methods: {
	        hideMessage: function(){
	            this.seen = false;
	        }
	    }
	})

	var app4 = new Vue({
	  el: '#app4',
	  data: {
	    todos: [
	      { text: 'Learn JavaScript' },
	      { text: 'Learn Vue' },
	      { text: 'Build something awesome' }
	    ]
	  }
	})
}