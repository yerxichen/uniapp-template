<template>
  <view>
    <yer-base-page :showNavbar="true" :title="title">
      <yer-list-view ref="list" top="44px" @up="upCallback">
        <view v-for="(item, index) in list">
          <view style="display: flex;align-items: center;height: 50px;">地址：{{item.address}}</view>
          <view style="display: flex;align-items: center;height: 50px;">年龄：{{item.age}}</view>
          <view style="display: flex;align-items: center;height: 50px;">邮箱：{{item.email}}</view>
          <view style="display: flex;align-items: center;height: 50px;">姓名：{{item.name}}</view>
        </view>
      </yer-list-view>
    </yer-base-page>
  </view>
</template>

<script>
import {login} from '../../common/api/login.js'
export default {
  data() {
    return {
      title: 'Hello',
      list:[],
    }
  },
  methods: {
    async upCallback(e){
      console.log("上拉加载")
      const list = await login()
      console.log(list);
      this.list.push(...list)
      this.$refs.list.endBySize(10,50)
    },
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
