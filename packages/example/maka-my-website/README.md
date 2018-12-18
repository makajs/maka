# maka-my-website

一个个人文章管理的全栈示例

## 实现功能

- 登录
- 门户
- 文章列表
- 文章编辑（markdown格式）
- 文章查看

## 技术栈

- 数据库: mysql
- 后台: nodejs + koa2 + knex 
- 前端: maka.js + antd + codeMirror + markdown

## 使用步骤

1. 需要mysql数据库

没有请安装,找度娘

2. 执行初始化脚本

脚本路径：/service/script/init.sql

3. 数据库配置

修改: /service/middlewares/knex.js

4. 运行后台服务

```
$ cd service
$ yarn install
$ yarn start
```

5. 运行网站

```
$ npm i -g @makajs/cli
$ cd website
$ yarn install
$ yarn start
```

6. 访问

打开chrome浏览器

访问网址：https://127.0.0.1:8000

默认用户名：13334445556, 密码：1

7. 截图

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/e/eff005724e7040e8db86edcacb6494b13f1a2dcf.png" width="690" height="495">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/9/9b63373f6e3a5185f443631259504907de793790.png" width="690" height="498">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/4/4c3015cfc8e0a4ed8b4e292712959d68ff0dd5f1.png" width="690" height="498">

<img src="https://reactchina.sxlcdn.com/uploads/default/original/2X/b/bc6377df14ef3d2e2d8e561888b18815618da796.png" width="690" height="495">


