<template>
	<el-row :gutter="20">
		<el-col :span="8">
			<div class="grid-content bg-purple">
				<el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</div>
		</el-col>
		<el-col :span="16">
			<div class="grid-content bg-purple">
				<el-table
						ref="multipleTable"
						:data="tableData"
						border
						tooltip-effect="dark"
						style="width: 100%"
						@selection-change="handleSelectionChange">
					<el-table-column
							type="selection"
							width="55">
					</el-table-column>
					<el-table-column
							label="日期"
							width="120">
						<template scope="scope">{{ scope.row.date }}</template>
					</el-table-column>
					<el-table-column
							prop="name"
							label="姓名"
							width="120">
					</el-table-column>
					<el-table-column
							prop="address"
							label="地址"
							show-overflow-tooltip>
					</el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<el-button
									size="small"
									@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
									size="small"
									type="danger"
									@click="handleDelete(scope.$index, tableData)">删除</el-button>
							<el-button
									size="small"
									type="primary"
									@click="handleView(scope.$index, scope.row)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-dialog title="个人资料" :visible.sync="dialogFormVisible">
					<el-form :model="form">
						<el-form-item label="姓名" :label-width="formLabelWidth">
							<el-input v-model="form.name" auto-complete="off" style="width: 300px;"></el-input>
						</el-form-item>
						<el-form-item label="日期" :label-width="formLabelWidth">
							<el-input v-model="form.date" auto-complete="off" style="width: 300px;"></el-input>
						</el-form-item>
						<el-form-item label="地址" :label-width="formLabelWidth">
							<el-input v-model="form.address" auto-complete="off" style="width: 300px;"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="save()">确 定</el-button>
					</div>
				</el-dialog>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: 'Home',
		data: function () {
			return {
				rs: this.$route.params.a,
				treeData: [],
				tableData: [],
				currentEditData:{
					name: '',
					date: '',
					address: ''
				},
				form: {
					name: '',
					date: '',
					address: ''
				},
				formLabelWidth: '80px',
				dialogFormVisible : false,
				multipleSelection: [],

				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		mounted: function () {
			this.$ajax('/listTreeData').then(data => {this.treeData = data;});
			this.$ajax('/listTableData').then(data => {this.tableData = data;});

		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
				})
					;
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;

			},
			handleDelete(index, tableData){
				tableData.splice(index, 1);

			},handleEdit(index, row){
				this.currentEditData = row;
				this.form = this.copy(this.currentEditData);
				this.dialogFormVisible = true;
			},handleView(index, row){
				this.$router.push({name: 'view'});
			},copy: function(source) {
				var rs = {};
				for(var o in source) {
					rs[o] = source[o];
				}
				return rs;
			},save:function(){
				this.dialogFormVisible = false;
				for(var o in this.form) {
					this.currentEditData[o] = this.form[o];
				}
				this.$ajax('/savePersonalInfo', this.form).then(data => {this.currentEditData = this.form;});
			}
		}
	}
</script>

<style>

</style>
