# weapp-qrcode
微信小程序生成二维码的插件,基于img,base64输出二维码，不依赖canvas
>PS: 主要在`node-yaqrcode`项目基础上进行改造适应微信小程序

## 说明
只需要在 wxml 文件中增加个`image`标签动态引用base64编码即可
```
<image src="{{qrcodeURL}"> </image>
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