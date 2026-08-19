# 和trd一起约会吧～

互动约会邀请页：新拟物粗描边风格，适配手机。

线上地址：[https://dating-with-trd.vercel.app/](https://dating-with-trd.vercel.app/)

七夕信：[https://dating-with-trd.vercel.app/letter.html](https://dating-with-trd.vercel.app/letter.html)

## 流程

1. 邀请：愿意 / 不要（「不要」会逃跑并切换文案）
2. 假装惊讶确认
3. 选择日期与时间（10:00–21:30，半小时一档）
4. 选择菜品（点「其他」可自定义）
5. 约会确认卡（DATE / TIME / MENU），可一键通知

首页底部可进入 `letter.html`（写给小耿的七夕信，含两周年倒计时）。

## 本地预览

纯静态预览（不含微信通知接口）：

```bash
cd dating-with-me
python -m http.server 4173
```

访问 http://localhost:4173

## Server酱通知

前端不保存 `SendKey`，通过同站点 `api/notify.js` 转发。

- 环境变量：`SERVERCHAN_SENDKEY`
- 触发：第 5 页点击「告诉Ta你的答案吧！💌」

## 部署（Vercel）

本仓库已部署到 Vercel，域名：`dating-with-trd.vercel.app`。

更新上线：

```bash
git add -A
git commit -m "更新约会页"
git push
```

若是新建项目：

1. 在 Vercel 导入本仓库
2. 添加环境变量 `SERVERCHAN_SENDKEY` = 你的 `SCTxxxx`
3. Deploy

## 本地联调 API（可选）

```bash
cd dating-with-me
vercel dev
```

本机需配置环境变量 `SERVERCHAN_SENDKEY`。
