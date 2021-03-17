# UMI 脚手架【服务器端渲染】示例

## 工程目录

- umi 负责生成站点网页资源 js、css 和 egg 使用的服务器端渲染用 js 文件。

- egg 服务器运行环境。通过使用 umi 生成服务器端js，渲染成 html 文件。

## 开发环境初使化

```bash
$ cd umi

$ yarn
```

## 开发

```bash
$ cd umi

$ yarn start
```

## 生成

umi 会将成生的文件复制到 egg/app 和 egg/config 文件夹。

```bash
$ cd umi

$ yarn build
```

## 发布

1、将整个 egg 目录复制到服务器中。

> 增量发布，只需要将 egg/app 和 egg/config 文件夹中的文件制作到服务器中。

2、在服务器端执行以下命令。

```bash
$ cd egg

$ yarn

$ yarn start

$ yarn stop
```

## 技术文档

https://umijs.org/

https://eggjs.org/

https://ant.design/

