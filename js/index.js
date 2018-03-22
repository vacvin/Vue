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

	var app5 = new Vue({
	  el: '#app5',
	  data: {
	    message: 'Hello Vue.js!'
	  },
	  methods: {
	    reverseMessage: function () {
	      this.message = this.message.split('').reverse().join('')
	    }
	  }
	})

	var app6 = new Vue({
	  el: '#app6',
	  data: {
	    message: 'Hello Vue!'
	  }
	})

	// Define a new component called todo-item
	Vue.component('todo-item', {
		// The todo-item component now accepts a
		// "prop", which is like a custom attribute.
		// This prop is called todo.
		props: ['todo'],
		template: '<li>{{ todo.text }}</li>'
	})

	var app7 = new Vue({
		el: '#app7',
		data: {
			groceryList: [
				{ id: 0, text: 'Vegetables' },
				{ id: 1, text: 'Cheese' },
				{ id: 2, text: 'Whatever else humans are supposed to eat' }
			]
		}
	})
}