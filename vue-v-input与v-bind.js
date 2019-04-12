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

var vm2=new Vue({
	el:"#root",
	data:{
		title:"this is hello world!",
		content: "this is content",
	},
});

var vm3=new Vue({
	el:"#temp",
	data:{
		firstName: "",
		lastName: "",
		count: 0,
		show:true,
		list:["1,2,3,4","hello","cat","你好"],
		time: [2,2,2,33,43,],
		me: ['htll','kus'],
	},
	// template:"<p>cat and dog</p>",//这里的template将覆盖原有的div子节点
	computed:{
//computed属性指的是一个属性由其他属性计算而来。只有当它依赖的属性发生变化的时候才会重新计算。⬆️
		fullName:function(){
			return this.firstName + ' ' + this.lastName;
		},
	},
	watch: {//监听器检测数据或属性
		fullName: function(){
			this.count ++;
		},
	},
	methods:{
		handleClick: function(){
			this.show = !this.show;
		},
	}
});