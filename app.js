const viewTitles = {
  home: "首页",
  intro: "班级介绍",
  honors: "班级荣誉",
  notices: "班级公告",
  schedule: "课程表",
  resources: "资料中心"
};

const sidebar = document.getElementById("sidebar");
const scrim = document.getElementById("scrim");
const menuBtn = document.getElementById("menuBtn");
const viewTitle = document.getElementById("viewTitle");

function closeSidebar() {
  sidebar.classList.remove("open");
  scrim.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
}

function showView(name) {
  if (!viewTitles[name]) return;
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.dataset.view === name);
  });
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === name);
  });
  viewTitle.textContent = viewTitles[name];
  closeSidebar();
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    const name = item.dataset.view;
    if (location.hash !== "#" + name) {
      location.hash = name;
    } else {
      showView(name);
    }
  });
});

document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => {
    location.hash = btn.dataset.goto;
  });
});

window.addEventListener("hashchange", () => {
  const name = location.hash.slice(1) || "home";
  showView(name);
});

menuBtn.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  scrim.hidden = !open;
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

scrim.addEventListener("click", closeSidebar);

document.addEventListener("DOMContentLoaded", () => {
  const name = location.hash.slice(1) || "home";
  showView(name);
  lucide.createIcons();
});
