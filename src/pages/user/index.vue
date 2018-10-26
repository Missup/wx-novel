<template>
  <div>
    <!-- 未授权 -->
    <div class="unauthorized" v-if="!userStatus">
      Free Novel申请获取以下权限：
      获取您的公开信息（昵称、头像等）
      <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">确认授权</button>
    </div>
    <!-- 授权 -->
    <div class="authorized" v-else>
      <div class="userinfo">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <div class="userinfo-nickname">
          {{ userInfo.nickName }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userStatus: false,
        userInfo: {}
      }
    },
    methods: {
      getSetting () {
        let self = this
        // 获取用户的当前设置
        wx.getSetting({
          success (res) {
            self.userStatus = res.authSetting['scope.userInfo']
            console.log(res, self.userStatus)
            if (self.userStatus) self.getUserInfoFn()
          }
        })
      },
      getUserInfoFn () {
        let self = this
        wx.getUserInfo({
          success: function (res) {
            self.userInfo = res.userInfo
          }
        })
      },
      onGotUserInfo: function (e) {
        console.log(e.detail)
        console.log(e.detail.errMsg)
        console.log(e.detail.userInfo)
        console.log(e.detail.rawData)
      }
    },
    created () {
    },
    mounted () {
    },
    onload () {
      this.getSetting()
    },
    onShow () {
    }
  }
</script>
