<template>
	<view>
		<u-navbar :is-back="false" title-size='30' :height='height' :border-bottom="false" :background="{'backgroundColor': backgroundColor}">
			<view style="width: 160rpx;display: flex;align-items: center;padding-left: 30rpx ;">
				<u-icon v-if="isBack" color="#FFFFFF" label-size="16rpx" :size="backIconSize" :name="backIcon" @click="pageBack"></u-icon>
			</view>
			<view style="font-family: '黑体';letter-spacing: 3px;color: #FFFFFF;font-size:35rpx;display: flex;justify-content: center;width: 430rpx;">
				<view style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"> {{title}}</view>
			</view>
			<view style="padding-right: 0rpx;width: 160rpx;">
			</view>
		</u-navbar>
	</view>

</template>

<script>
	export default {
		props: {
			isBack:{
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				default: ''
			},
			height: {
				type: Number,
				default: 50
			},
			backgroundColor: {
				type: String,
				default: '#1D1E72'
			},
			backIcon: {
				type: String,
				default: 'nav-back'
			},
			backIconSize: {
				type: Number,
				default: 40
			}
		},
		data() {
			return {
				content: [],
				backTextStyle: {
					'font-family': '黑体',
					'letter-spacing': '3px'
				},

			};
		},
		methods: {
			pageBack() {
				let routes = getCurrentPages()
				const rl = routes.length;
				let curRoute = routes[routes.length - 1].route
				if (curRoute == 'pages/home/home' || rl == 1) {
					window.history.back(-1);
				} else {
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style>

</style>
