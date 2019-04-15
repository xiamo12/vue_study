Vue.component('todo-list',{
	props: ['content','index'],//从父组件接收到content和index
	template: "<li @click='handleClick'>{{content}}</li>",
	methods: {
		handleClick: function(){
			this.$emit('delete',this.index);
		},
	},
});
new Vue({
	el: "#root",
	data: {
		inputValue: " ",
		list:[],
	},
	methods: {
		handleSubmit:function(){
			this.list.push(this.inputValue);
			this.inputValue="";
		},
		handleDelete: function(index) {
			this.list.splice(index,1);
		},
	},
});