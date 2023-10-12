// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  navigateBack: function () {
    wx.navigateBack({
      delta: 1 // 返回的页面层数
    });
  },
  
  passwordLogin: function () {
    // 在这里编写密码登录的逻辑
    wx.navigateTo({
      url: '/pages/password-login/password-login' // 导航到密码登录页面
    });
  },

  codeLogin: function () {
    // 在这里编写验证码登录的逻辑
    wx.navigateTo({
      url: '/pages/code-login/code-login' // 导航到验证码登录页面
    });
  },

  wechatLogin: function () {
    // 在这里编写微信登录的逻辑
    // 可以使用微信登录 API 来实现
  }

})