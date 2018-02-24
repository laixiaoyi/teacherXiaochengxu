//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    seiperData: {},
    articleInfo: {},
    classifyVideo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    interval: 3000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    var url = app.globalData.easyMock;
    // console.log(url) 
    var _this = this;
    //  swiper数据请求
    wx.request({
      url: url+'5a22049467862f4d0c0d673f/article/swiper',
      success: function(res) {
        // console.log(res)
        _this.setData({
          swiperData: res.data.swiperData
        })
        // console.log(_this.data.swiperData)
      }
    });
    //精选文章数据请求
    wx.request({
      url: url+'5a22049467862f4d0c0d673f/article/article-list',
      success: function(res) {
        // console.log(res.data.data)
        _this.setData({
          articleInfo: res.data.data
        })
      }
    });
    //精选视频数据请求
    wx.request({
      url: url+'5a22049467862f4d0c0d673f/article/video',
      success: function(res) {
        // console.log(res.data.arrVideo);
        _this.setData({
          classifyVideo: res.data.arrVideo
        })
      }
    });
  }
});