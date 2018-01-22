<template>
	<div style="width: 300px;margin: 0 auto;">
		<h1 v-html="title" style="text-align: center;"></h1>
		<input style="width: 300px;border-radius: 4px;border: 1px solid #bfcbd9;box-sizing: border-box;color: #1f2d3d;font-size: inherit;height: 36px;line-height: 1;padding: 3px 10px;" v-model="newItem" @keyup.enter="addItem()" placeholder="text in it"/>
		<ul style="list-style:none;padding: 0;">
			<li v-for="item in items" style="margin-bottom: 5px">
				<el-checkbox v-model="item.isFinished" :class="{finished:item.isFinished}" @click="toggleFinished(item)">{{item.label}}</el-checkbox><i class="el-icon-delete" @click="deleteItem(item)" style="float: right;"></i>
			</li>
		</ul>
	</div>
</template>

<script>
	import Store from './store.js'
	export default {
		name: 'View',
		//data: function (){}
		data () {
			return {
				author: "kayiu",
				newItem: "",
				title: "TODO LIST",
				items: Store.fetch()
			}
		},
		watch: {
			items: {
				handler: function (items) {
					Store.save(items)
				},
				deep: true //可以检测到属性的更改
			}
		},
		methods: {
			toggleFinished(item){
				item.isFinished = !item.isFinished;

			},
			addItem(){
				this.items.push({
					label: this.newItem,
					isFinished: false
				});
				this.$message('添加成功');
				this.newItem = "";
			},
			//删除方法
			deleteItem(item){
				var index = this.items.indexOf(item)
				if (index !== -1) {
					this.items.splice(index, 1)
				}
				this.$message('删除成功');
			}
		}
	}
</script>

<style>
	.finished {
		text-decoration: line-through;
	}
</style>
