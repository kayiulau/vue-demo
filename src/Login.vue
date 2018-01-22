<template>
	<div>
		<div class="" style="width: 49%;display: inline-block;text-align: center">
			<img src="./assets/logo.png">
		</div>
		<div class="" style="width: 49%;display: inline-block">
			<el-form ref="form" :model="user" label-width="80px">
				<el-form-item label="姓名">
					<el-input v-model="user.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="user.password" type="password"></el-input>
				</el-form-item>
				{{loginedUser.name}}
				{{loginedUser.password}}
				<el-form-item>
					<el-button @click="login()">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
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
					self.$router.push({name: 'home', params: {user: data, a: data}});
				}, function (err) {
					self.$message("error userName");
				});
			}
		}
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
