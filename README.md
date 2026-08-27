# ZJUT IST 2503 班级资料共享平台

浙江工业大学智能科学与技术 2503 班的静态班级网站，用于展示班级介绍、班级荣誉、班级公告、课程表，并作为夸克网盘资料入口。

## 文件说明

- `index.html`：网站页面
- `styles.css`：网站样式
- `app.js`：页面切换逻辑
- 首页动态行星轨道：由 HTML/CSS 动画实现，不依赖图片

## 本地查看

直接双击 `index.html`，用浏览器打开即可。注意：图标依赖网络加载，如果没显示不影响功能。

## 发布到 GitHub Pages

1. 注册并登录 [GitHub](https://github.com)。
2. 点击右上角 `+`，选择 `New repository`。
3. 仓库名填 `class-website`，选择 `Public`，不用勾选 README 初始化。
4. 点击 `Create repository` 创建仓库。
5. 在仓库页面点击 `Add file` → `Upload files`，上传 `index.html`、`styles.css`、`app.js`。
6. 点击 `Commit changes` 提交。
7. 打开仓库的 `Settings` → `Pages`。
8. 在 `Build and deployment` 里，Source 选择 `Deploy from a branch`，Branch 选择 `main` 和 `/ (root)`，点击 `Save`。
9. 等一两分钟，页面会显示网址，例如 `https://用户名.github.io/class-website`。
10. 把网址发给班级同学，他们直接打开就能访问，不需要登录。

## 以后怎么更新

- 用记事本或 VS Code 打开 `index.html`，里面已经有中文注释，按注释找到对应位置修改。
- 班级介绍、荣誉、公告、课表：直接改 `index.html` 里对应栏目文字。
- 夸克网盘链接：搜索 `https://pan.quark.cn/`，把每个按钮换成你的实际分享链接。
- 保存文件后刷新浏览器就能看到新内容。
- 修改后重新上传文件到 GitHub，GitHub Pages 会自动重新发布，不需要手动操作。
