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



