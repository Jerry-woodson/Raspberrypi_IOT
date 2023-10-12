// index.js
Page({
  goToFunctionPage: function() {
    wx.navigateTo({
      url: '/pages/newPage/newPage',
    });
  },

  goToLoginPage: function() {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  }
})
