//index.js
//获取应用实例
const app = getApp()
const QR = require('../../utils/weapp-qrcode.js')

Page({
  data: {
    motto: 'Hello World',
    qrcodeURL: "",
    codeText: "github.com/Pudon",
  },
  onLoad: function () {
    this.drawImg();
  },
  setText: function (e) {
    this.setData({
      codeText: e.detail.value
    })
  },
  drawImg: function () {
    var imgData = QR.drawImg(content, {
      version: 1,
      errorCorrectLevel: 'M',
      color: '#3d0d83',
      background: '#fff',
      padding: 10,
      size: 200
    })
    this.setData({
      qrcodeURL: imgData
    })
  }
})
