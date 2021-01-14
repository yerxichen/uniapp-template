<template>
	<!-- :style="{'padding-bottom':(navHeight+wxHeight+(isBottom?bottomH:0))+'px)','background-color':contentColor}" -->
	<view :style="{'padding-bottom': bottomH*2+'rpx'}">
		<yer-navbar :title="title" :height="navHeight" :isBack="isBack" v-if="showNavbar"></yer-navbar>

		<slot name="content"></slot>

		<view class="base-bottom" :style="'height:'+bottomH*2+'rpx'" v-if="isBottom">
			<u-button type="primary" :ripple="true" @click="commit">{{bottomText}}</u-button>
		</view>
		<u-modal @confirm="confirm" v-model="modalShow" :content="modalContent"></u-modal>
		<u-toast ref="uToast" />
		
		
	</view>
</template>

<script>
	export default {
		props: {
			showNavbar: {
				type: Boolean,
				default: true
			},
			contentColor: {
				type: String,
				default: '#00ff00'
			},
			isBack: {
				type: Boolean,
				default: true
			},
			navHeight: {
				type: Number,
				default: 50
			},
			bottomText: {
				type: String,
				default: '提交'
			},
			isBottom: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ''
			},
			bottomH:{
				type: Number,
				default: 80
			}

		},
		mounted() {
			console.log("mountedmountedmountedmounted")
		},
		data() {
			return {
				// #ifdef  MP-WEIXIN
				wxHeight: 40,
				// #endif
				modalShow: false,
				modalContent: ''
			};
		},
		methods: {
			commit() {
				this.$emit('commit');
			},
			showModal(content, confirm, cancel) {
				confirm(123)
			},
			showTost(title) {
				this.$refs.uToast.show({
					title: title,
					type: 'default',
				})
			},
			confirm() {

			},
			imgClick(){
				this.$Router.push({
					name: '/wddb/videopage',
					params: {
						plan: 'ssd'
					}
				})
			}

		}
	}
</script>

<style>
	.base-bottom {
		position: fixed;
		width: 100%;
		padding: 20rpx 40rpx 20rpx 40rpx;
		bottom: 0;
		left: 0;
		z-index: 980;
		background-color: #f7f7f7;
	}
</style>
