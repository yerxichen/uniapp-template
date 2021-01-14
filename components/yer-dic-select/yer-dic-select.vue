<template>
	<view >
		<!--  -->
		<u-form-item :label="label" :prop="prop" :required="required" :label-width="labelWidth" :label-position="labelPosition"
		 :label-style="labelStyle">
			<u-input v-model="showValue" :placeholder="placeholder" type="select" @click="openSelect()" :select-open="show"
			 :input-align="inputAlign" />
		</u-form-item>
		<u-select v-model="show" :list="list" :default-value="defaultVal" :mode="mode" @confirm="selectConfirm"></u-select>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		props: {
			list: Array, //字典的数组集合
			required: Boolean,
			label: String, //左边label显示的内容
			labelStyle: Object, //label的格式
			labelPosition: {
				type: String,
				default: 'left'
			}, //label显示的位置 默认left  可选top
			prop: String, //表单验证用到的绑定属性
			defaultValue: '', //默认显示的字典，传字典的代码项
			inputAlign: {
				type: String,
				default: 'left'
			}, //input内容对齐方式三种：left  center  right  默认left
			labelWidth: {
				type: String,
				default: 'auto'
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			conOpen: { // con 为true不能打开select tip 提示不能打开原因
				type: Object,
				default () {
					return {
						con: false,
						tip: '不能打开'
					}
				}
			},
			mode:{ //模式选择，"single-column"-单列模式，"mutil-column"-多列模式，"mutil-column-auto"-多列联动模式
				type: String,
				default: 'single-column'
			},
		},
		data() {
			return {
				showValue: '', //字典展示的值，对应的是字典名称
				show: false, //控制select弹框的显示
				defaultVal: [0], //默认值（是字典数组的下标）
			};
		},
		methods: {
			selectConfirm(e) {
				console.log(e);
				if(this.mode=='single-column'){
					this.showValue = e[0]['label']
					this.$emit('valueChange', e[0]['value'])
					this.$emit('input', e[0]['value'])
					//选择后把默认值设为当前选择的
					for (let i = 0; i < this.list.length; i++) {
						if (this.list[i]['value'] == e[0]['value']) {
							this.defaultVal = [i];
							return;
						}
					}
				}else{
					this.showValue = '';
					this.$emit('valueChange', e[0]['value'])
					this.$emit('input', e[0]['value'])
					e.map((val, index) => {
						this.showValue += this.showValue == '' ? val.label : '-' + val.label;
					})
					for (let i = 0; i < this.list.length; i++) {
						if (this.list[i]['value'] == e[0]['value']) {
							this.defaultVal = [i,0];
							return;
						}
					}
				}
			},
			openSelect() {
				if (!this.conOpen.con) {
					this.show = true;
				} else {
					this.show = false;
					this.$refs.uToast.show({
						title: this.conOpen.tip,
						type: 'warning',
					})
				}

			}
		},
		watch: {
			defaultValue: function(newVal, oldVal) {
				let val = this.defaultValue
				if (!newVal) {
					val = oldVal
				}
				for (let i = 0; i < this.list.length; i++) {
					if (this.list[i]['value'] == val) {
						this.showValue = this.list[i]['label'];
						this.defaultVal = [i];
						return;
					}
				}
			}
		}
	}
</script>

<style scoped>

</style>
