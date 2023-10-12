// pages/function4/function4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cameraContext: null
  },

  onReady: function () {
    this.data.cameraContext = wx.createCameraContext();
  },

  openCamera: function () {
    this.data.cameraContext.startRecord({
      success: function (res) {
        console.log('打开摄像头成功', res);
      },
      fail: function (error) {
        console.error('打开摄像头失败', error);
      }
    });
  },

  closeCamera: function () {
    // 关闭摄像头
    this.data.cameraContext.stopRecord({
      success: function (res) {
        console.log('关闭摄像头成功', res);
      },
      fail: function (error) {
        console.error('关闭摄像头失败', error);
      }
    });
  },

  cameraError: function (e) {
    console.error('摄像头错误', e);
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