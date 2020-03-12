# @makajs/cli2

makajs 命令行工具第二版本

## 安装

```bash
npm i @makajs/cli -g
```

## 用法

- `单元测试`

```js
$ maka2 test  //不指定目录默认测试当前目录下test/**/*.test.js
$ maka2 test test/**/*.test.js //argv方式测试含通配符测试目录
$ TESTS=test/**/*.test.js maka2 test //process.env方式测试含通配符测试目录
$ maka2 test test/a.test.js //argv方式单个文件
$ TESTS=test/a.test.js maka2 test //process.env方式测试单个文件
$ maka2 test test/a.test.js test/b.test.js //argv方式多个文件
$ TESTS=test/a.test.js,test/b.test.js maka2 test //process.env方式测试多个文件
$ maka2 test --dry-run //排练，输出命令，不真实执行测试
$ maka2 test --changed //只测试git发生变化文件
$ maka2 test --timeout=12345 //设置超时时间
$ maka2 test --full-trace //出现测试异常，全堆栈输出
```

- `覆盖率测试`
```js
$ maka2 cov //不指定目录默认覆盖率测试当前目录下test/**/*.test.js
$ maka2 cov test/**/*.test.js //指定目录
$ TESTS=test/**/*.test.js maka2 cov
$ maka2 cov -x ignore/  test/**/*.test.js //排除目录
$ COV_EXCLUDES=ignore/*,test/**/*.test.js maka2 cov
$ maka2 cov --nyc=-r teamcity -r text //指定nyc参数
```

## 备注

- test会自动加载test/.setup.js或者test/.setup.ts

## License

[MIT](LICENSE)
