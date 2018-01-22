<template>
	<div class="app" style="width: 1180px;height:600px;margin: 200px auto;">
		<router-view></router-view>
		<my-component></my-component>
	</div>
</template>

<script>
	import MyComponent from  './MyComponent.vue'
	export default {
		name: 'app',
		data: function () {
			return {
				user: {name: "", password: ""},
				loginedUser: {name: "", password: ""}
			}
		},
		methods: {
			login: function () {
				var self = this;
				this.$ajax('/login', this.user).then(function (data) {
					self.loginedUser = data;
				});
			}
		},
		components: { MyComponent }
	}
</script>

<style>
	.app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;

	}

	h1, h2 {
		font-weight: normal;
	}

	a {
		color: #42b983;
	}

</style>
