使用maka.js + antd + echarts + fixed-data-table + font-awesome 实现的管理系统前台demo

## 运行

```bash
$ npm i -g @makajs/cli
$ yarn install
$ yarn start 
```

打开浏览器，http://127.0.0.1:8000, 登录用户名：13334445556 密码:1

## 打包
```bash
$ yarn pkg  //执行成功会 build/pkg 目录下生成打包结果
```

## 文件结构
```
|--apps    
     |--base
          |--antd                       //用于注册antd组件
          |--echarts                    //用于注册echarts组件
          |--fixed-data-table           //用于注册fixed-data-table组件
          |--font-awesome               //用于注册react-fontawesome组件
          |--common                     //用于注册公共的组件、模板、样式、行为
     |--set
          |--bom
               |--set-bom               //bom单据录入
               |--set-bom-list          //bom列表
          |--customer
               |--set-customer          //客户卡片录入
               |--set-customer-group    //客户组卡片录入
               |--set-customer-list     //客户列表，树表形式
          |--person
               |--set-person            //人员卡片录入
               |--set-person-list       //人员列表
     |--sys
          |--sign-in                    //登录
          |--portal                     //门户
          |--home                       //首页
          |--dashboard                  //仪表盘
          
```

## 截图


<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/9/97f2d6455e31e246787f6f9d8d16293764d53f32.png" width="690" height="365">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/8/873440300ef056a9e52f60f900d8355b9912a2b2.png" width="690" height="363">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/3/368d75dcb70b4a2fa5e97cc41a4739cc039bc27e.png" width="690" height="365">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/2/2987563102fca7da07ff1a0b83c22eae479a15e3.png" width="690" height="364">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/d/d7ed0fc1fba016e72902f855d3ec5f197bf342d2.png" width="690" height="363">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/0/00fabbc168a571d8ed9d8960379fae0deabbd692.png" width="690" height="363">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/b/b04f227544327badf7655dca793e62efd87a05e9.png" width="690" height="365">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/6/6b58645539b085b466e5c8e9db912b45a15c4669.png" width="690" height="364">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/2/2810bd7de395b35ee466cba6c5dbbf15c958938c.png" width="690" height="365">

