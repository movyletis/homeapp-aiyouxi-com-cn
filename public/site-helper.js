// public/site-helper.js
(function () {
  "use strict";

  // 配置信息
  const APP = {
    site: "https://homeapp-aiyouxi.com.cn",
    keyword: "爱游戏",
    message: "欢迎访问我们的站点，发现精彩游戏内容！"
  };

  // 页面提示卡片
  function createInfoCard() {
    var card = document.createElement("div");
    card.id = "info-card";
    card.style.cssText = [
      "position:fixed",
      "bottom:20px",
      "right:20px",
      "z-index:9999",
      "background:#ffffff",
      "border:1px solid #d0d0d0",
      "border-radius:12px",
      "padding:18px 22px",
      "max-width:320px",
      "font-family:Arial,sans-serif",
      "font-size:14px",
      "line-height:1.5",
      "color:#333333",
      "box-shadow:0 4px 12px rgba(0,0,0,0.08)",
      "transition:opacity 0.3s ease"
    ].join(";");

    // 关闭按钮
    var closeBtn = document.createElement("span");
    closeBtn.textContent = "✕";
    closeBtn.style.cssText = [
      "position:absolute",
      "top:10px",
      "right:14px",
      "cursor:pointer",
      "font-size:16px",
      "color:#999999"
    ].join(";");
    closeBtn.addEventListener("click", function () {
      card.style.opacity = "0";
      setTimeout(function () { card.remove(); }, 300);
    });
    card.appendChild(closeBtn);

    // 标题
    var title = document.createElement("h3");
    title.textContent = "提示";
    title.style.cssText = "margin:0 0 8px;font-size:16px;color:#222;";
    card.appendChild(title);

    // 内容
    var p = document.createElement("p");
    p.textContent = APP.message;
    p.style.cssText = "margin:0 0 10px;";
    card.appendChild(p);

    // 链接
    var link = document.createElement("a");
    link.href = APP.site;
    link.target = "_blank";
    link.textContent = "前往 " + APP.keyword + " 首页";
    link.style.cssText = [
      "display:inline-block",
      "background:#4a90d9",
      "color:#fff",
      "text-decoration:none",
      "padding:6px 16px",
      "border-radius:20px",
      "font-size:13px",
      "font-weight:bold"
    ].join(";");
    link.addEventListener("click", function (e) {
      console.log("离开当前页面，跳转到：" + APP.site);
    });
    card.appendChild(link);

    document.body.appendChild(card);
  }

  // 关键词徽章
  function createKeywordBadge() {
    var badge = document.createElement("div");
    badge.id = "keyword-badge";
    badge.textContent = APP.keyword;
    badge.style.cssText = [
      "position:fixed",
      "top:20px",
      "left:20px",
      "z-index:9998",
      "background:#f0c040",
      "color:#222",
      "padding:6px 14px",
      "border-radius:20px",
      "font-weight:bold",
      "font-size:13px",
      "box-shadow:0 2px 6px rgba(0,0,0,0.12)",
      "cursor:default",
      "user-select:none"
    ].join(";");

    // 悬停显示完整链接
    badge.title = "当前关键词：" + APP.keyword + " | " + APP.site;
    document.body.appendChild(badge);
  }

  // 访问说明浮层
  function createAccessInfo() {
    var overlay = document.createElement("div");
    overlay.id = "access-overlay";
    overlay.style.cssText = [
      "position:fixed",
      "top:0",
      "left:0",
      "width:100%",
      "height:100%",
      "z-index:10000",
      "background:rgba(0,0,0,0.35)",
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "transition:opacity 0.4s"
    ].join(";");

    var box = document.createElement("div");
    box.style.cssText = [
      "background:#fff",
      "border-radius:16px",
      "padding:30px 36px",
      "max-width:420px",
      "text-align:center",
      "box-shadow:0 6px 24px rgba(0,0,0,0.18)"
    ].join(";");

    var heading = document.createElement("h2");
    heading.textContent = "访问说明";
    heading.style.cssText = "margin:0 0 12px;font-size:20px;color:#111;";

    var desc = document.createElement("p");
    desc.innerHTML = "本站以 <strong>" + APP.keyword + "</strong> 为主题，提供最新资讯与互动体验。<br>点击下方按钮开始浏览。";
    desc.style.cssText = "margin:0 0 18px;color:#444;font-size:15px;";

    var btn = document.createElement("button");
    btn.textContent = "了解，开始使用";
    btn.style.cssText = [
      "background:#e65c4f",
      "color:#fff",
      "border:none",
      "padding:10px 30px",
      "border-radius:30px",
      "font-size:16px",
      "font-weight:bold",
      "cursor:pointer"
    ].join(";");
    btn.addEventListener("click", function () {
      overlay.style.opacity = "0";
      setTimeout(function () { overlay.remove(); }, 400);
    });

    box.appendChild(heading);
    box.appendChild(desc);
    box.appendChild(btn);
    overlay.appendChild(box);

    document.body.appendChild(overlay);
  }

  // 页面初始化
  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        createInfoCard();
        createKeywordBadge();
        createAccessInfo();
      });
    } else {
      createInfoCard();
      createKeywordBadge();
      createAccessInfo();
    }
  }

  init();
})();