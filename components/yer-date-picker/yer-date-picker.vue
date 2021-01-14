<template>
	<view>
		<u-form-item :label="label" :required="required" :prop="prop" :label-width="labelWidth" :label-position="labelPosition"
		 :label-style="labelStyle">
			<u-input v-model="showValue" :placeholder="placeholder" type="select" @click="show=true" :select-open="show"
			 :input-align="inputAlign" />
		</u-form-item>
		<u-picker v-model="show" mode="time" :params="params" @confirm="pickerConfirm"></u-picker>
	</view>
</template>

<script>
	export default {
		props: {
			label: String, //label显示的内容
			defaultValue: '', //默认显示内容
			required: {
				type: Boolean,
				default: false
			},
			labelStyle: Object, //label的格式
			labelPosition: {
				type: String,
				default: 'left'
			}, //label显示的位置 默认left  可选top
			prop: String, //表单验证用到的绑定属性
			showModel: {
				type: Number,
				default: 0
			}, //日期显示格式 可选1对应yyyy-MM-dd HH:mm:ss和2对应yyyy-MM-dd HH:mm 3对应HH:mm 默认yyyy-MM-dd
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
		},
		data() {
			return {
				show: false, //控制picker弹框的显示
				showValue: '', //展示的内容
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				}
			};
		},
		methods: {
			pickerConfirm(e) {
				let res = '';
				if (this.showModel == 0 || this.showModel == 1 || this.showModel == 2) {
					res = e.year + '-' + e.month + '-' + e.day;
				}
				// let showRes = e.year + '年' + parseInt(e.month) + '月' + parseInt(e.day) + '日';
				if (e.hasOwnProperty("hour")) {
					res += ' ' + e.hour + ':' + e.minute;
					// showRes += parseInt(e.hour) + '时' + parseInt(e.minute) + '分';
				}
				if (e.hasOwnProperty("second")) {
					res += ':' + e.second;
					// showRes += parseInt(e.second) + '秒';
				}
				this.showValue = res;
				this.$emit("input", res);
			}
		},
		mounted() {

			if (this.showModel == 1) {
				//yyyy-MM-dd HH:mm:ss
				this.params = {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				}
			} else if (this.showModel == 2) {
				//yyyy-MM-dd HH:mm
				this.params = {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				}
			} else if (this.showModel == 3) {
				//HH:mm
				this.params = {
					year: false,
					month: false,
					day: false,
					hour: true,
					minute: true,
					second: false
				}
			}else{
				//yyyy-MM-dd
				this.params = {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				}
			}
		},
		watch: {
			defaultValue: function(newVal, oldVal) {
				console.log(newVal)
				this.showValue = newVal;
			}
		}
	}
</script>

<style scoped>

</style>
