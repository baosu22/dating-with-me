# Dating with me ～

全面模仿 [dating-with-me-nu.vercel.app](https://dating-with-me-nu.vercel.app/) 的约会邀请页（新拟物 / 粗描边风格）。

## 五步流程

1. 表白邀请：愿意 / 不要（「不要」会逃跑并切换文案）
2. 假装惊讶确认
3. 选择日期与时间（10:00–21:30，半小时一档）
4. 选择菜品（点「其他」可自定义）
5. 约会确认卡（DATE / TIME / MENU）

## 预览

纯静态预览（不含微信通知接口）：

```bash
cd tools/dating-with-me
python -m http.server 4173
```

访问 http://localhost:4173

## Server酱通知（安全版）

现在前端不会保存 `SendKey`，而是调用同站点的 `api/notify.js`。

- 环境变量名：`SERVERCHAN_SENDKEY`
- 代码位置：`api/notify.js`
- 触发方式：第 5 页点击“告诉Ta你的答案吧！💌”

## 部署到 Vercel

1. 把 `tools/dating-with-me` 单独作为一个 Git 仓库（或子目录部署）
2. 在 Vercel 导入项目，Root Directory 选 `tools/dating-with-me`
3. 在 Vercel 项目设置里添加环境变量：
   - Key: `SERVERCHAN_SENDKEY`
   - Value: 你的 `SCTxxxx`
4. 点击 Deploy
5. 打开分配的域名，走一遍流程测试

## 本地联调 API（可选）

如果你要在本地测试通知接口，建议用 Vercel CLI：

```bash
cd tools/dating-with-me
vercel dev
```

并在本机环境变量中配置 `SERVERCHAN_SENDKEY`。
