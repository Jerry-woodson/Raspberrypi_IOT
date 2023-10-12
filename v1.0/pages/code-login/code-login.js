// pages/code-login/code-login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '', // 存储手机号
    verificationCode: '', // 存储验证码
    countdown: 0 // 验证码倒计时
  },
  
  inputPhoneNumber: function (e) {
    this.setData({
      phoneNumber: e.detail.value // 获取手机号输入
    });
  },

  inputVerificationCode: function (e) {
    this.setData({
      verificationCode: e.detail.value // 获取验证码输入
    });
  },

  getVerificationCode: function () {
    // 在这里编写获取验证码的逻辑，启动倒计时
    // 确保不要频繁获取验证码
    if (this.data.countdown === 0) {
      // 获取验证码的逻辑，可以调用接口或模拟验证码
      // 启动倒计时
      this.countdown();
    }
  },

  countdown: function () {
    const that = this;
    let second = 60;
    that.setData({
      countdown: second
    });
    const interval = setInterval(function () {
      that.setData({
        countdown: second - 1
      });
      second--;
      if (second < 0) {
        clearInterval(interval);
      }
    }, 1000);
  },

  login: function () {
    // 获取用户输入的手机号和验证码
    const phoneNumber = this.data.phoneNumber;
    const verificationCode = this.data.verificationCode;

    // 在这里编写验证码登录的逻辑
    if (phoneNumber === 'valid_phone_number' && verificationCode === 'valid_verification_code') {
      // 登录成功，可以进行跳转或其他操作
      wx.navigateTo({
        url: '/pages/success/success' // 导航到登录成功的页面
      });
    } else {
      // 登录失败，可以提示用户或执行其他操作
      wx.showToast({
        title: '验证码错误',
        icon: 'none'
      });
    }
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
  }
})