// pages/cameraView/camearaView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    context: null, // 画布上下文
  },

  onLoad: function () {
    // 获取 canvas 上下文
    const context = wx.createCanvasContext('cameraCanvas', this);

    this.setData({
      context: context,
    });
  },

  onCameraFrame: function (e) {
    const context = this.data.context;

    // 将摄像头帧数据渲染到 canvas 上
    context.drawImage(e.detail.tempImagePath, 0, 0, 640, 480);

    context.draw();
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