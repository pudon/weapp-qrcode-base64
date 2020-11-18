# weapp-qrcode
Generating the QR code in the form of Base64  
微信小程序生成二维码的插件,基于base64编码输出二维码，不依赖canvas  理论支持全平台
>PS: 主要在`node-yaqrcode`项目基础上进行改造适应微信小程序

## 说明
只需要在 wxml 文件中增加个`image`标签动态引用base64编码即可
```
<image src="{{qrcodeURL}"> </image>
```

使用NPM
```
npm install qrcode-base64
```

JS调用例子：
```
    import QR from 'qrcode-base64'

    var imgData = QR.drawImg(this.data.codeText, {
      typeNumber: 4,
      errorCorrectLevel: 'M',
      size: 500
    })
    // 返回输出base64编码imgData

```

JS调用例子：
```
    const QR = require('../../utils/weapp-qrcode.js')
    var imgData = QR.drawImg(this.data.codeText, {
      typeNumber: 4,
      errorCorrectLevel: 'M',
      size: 500
    })
    // 返回输出base64编码imgData

```

## DEMO示例图

![demo-img](./demo/demo.png)

## TODO
1. 组件化，适应 `mpvue` , `wepy`
2. 更多配置项，灵活多样
3. 样式自定义化，增加更丰富的样式
