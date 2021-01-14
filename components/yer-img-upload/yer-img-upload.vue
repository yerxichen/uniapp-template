<template>
	<view>
		<u-form-item :border-bottom="borderBottom" :required="required" :label="label" label-width="130rpx" :label-position="labelPosition" :label-style="labelStyle">
			<u-upload :size-type="['compressed']" :deletable="deletable"  :file-list="fileList" :show-progress="true" :max-count="maxCount" :action="action"
			 ref="uUpload" :auto-upload="true" @on-success="onSuccess" @on-remove="onRemove" @on-change="onChange"></u-upload>
		</u-form-item>
	</view>
</template>

<script>
	export default {
		props: {
			deletable: {
				type: Boolean,
				default: true
			},//是否展示删除按钮
			required: {
				type: Boolean,
				default: false
			},//展示*号
			borderBottom: {
				type: Boolean,
				default: true
			},
			label: String, //label显示的内容
			labelPosition: {
				type: String,
				default: 'top'
			}, //label显示的位置 默认left  可选top
			labelStyle:Object,//label的格式
			maxCount: Number,
			action: {
        type: String,
        default: ''
      },//请求地址
			fileList:Array,
			
		},
		data() {
			return {

			}
		},
		methods: {
			onSuccess(data, index, lists, name) {
				let arr=[]
				for(let i=0;i<lists.length;i++){
					arr.push(lists[i].response.data)
				}
				this.$emit('input',arr)
				this.$emit('uploadSuccess',arr[0]);
			},
			onRemove(index, lists, name){
				let arr=[]
				for(let i=0;i<lists.length;i++){
					arr.push(lists[i].response.data)
				}
				this.$emit('input',arr)
			},
			onChange(index, lists, name){
				// console.log(index, lists, name)
			},

		}
	}
</script>

<style scoped>
.u-form-item--left{
	position:relative;
}
.u-form-item__body{
	position:relative;
}
</style>
