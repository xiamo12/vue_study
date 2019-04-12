var vm=new Vue({
	el:"#root",
	data:{
		inputValue: "",
		list: [],
	},
	methods: {
		handleClick:function(){
			this.list.push(this.inputValue);
			this.inputValue = '';
		},
	},
})