// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false

  },
  tapName: function(event){
    console.log(event)
  },
  handleTap:function(evt){
   
  },
  clickMe: function(){
    this.setData({
      loading: true
    })
    console.log(123)
    wx.navigateTo({
      url: '/pages/tiaozhuan/tiaozhuan',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**wx.showToast({
      title: '已发送',
      icon: 'success',
      duration: 1500

    })*/
   // wx.hideToast()
  /** wx.showModal({
     title: '标题',
     content: '告知当前状态，信息和解决方法',
     confirmText: '主操作',
     cancelText: '次操作',
     success: function(res) {
       if(res.confirm) {
         console.log('用户点击主操作')
       } else if (res.cancel){
         console.log('用户点击次要操作')
       }
     }
   })*/
    wx.showToast({ title: '系统错误' })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //用户触发了下拉刷新操作
    //拉取新数据重新渲染界面
   // wx.stopPullDownRefresh()

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //在json中配置，当界面下方距离页面底部距离小于100像素时触发回调

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})