var vm1=new Vue({
	el:"#comm",
	data:{
		word: "v-text指令",
		docum: "v-html指令",
		content: "v-bind绑定事件",
		class1: "class1",
		some: "news",
		title:"title属性绑定",
	},
	methods: {
		warning:function(){
			alert('dog sir');
		},
	},
});

var vm=new Vue({
	el:"#root",
	data:{
		title:"this is hello world!",
		content: "this is content",
	},
});