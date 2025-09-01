<template>
  <nav class="sidebar">
    <NuxtLink to="/" class="sidebar-title">
      <img src="/assets/logo-3.png" alt="Logo" class="logo" /> 
      FinIQ System
    </NuxtLink>
    <ul class="menu-list">
      <li>
        <NuxtLink to="/dashboard" class="menu-button">
          <img src="/assets/dashboard.png" alt="side-bar-icon" class="side-bar-icon" /> &nbsp Transactions
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/kanban" class="menu-button">
          <!-- image color: #e2e2e2 -->
          <img src="/assets/kanban.png" alt="side-bar-icon" class="side-bar-icon" /> &nbsp Upload
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/todo" class="menu-button">
          <img src="/assets/to-do-list.png" alt="side-bar-icon" class="side-bar-icon" /> &nbsp Reports
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar-title {
  padding-top: 14px ;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 12pt;
  font-weight:900;
  color: rgb(35, 49, 92);
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  width: 30px;
  border-radius: 15% 20% 15% 20%;
}

.side-bar-icon {
  width: 20px;
  filter:  invert(19%) sepia(6%) saturate(749%) hue-rotate(176deg) brightness(92%) contrast(85%);
}

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb; /* 新增底線 */
}

.menu-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 5px 0;       /* 增加上下間距 */
  list-style: none;
}

/* 讓 NuxtLink 保留按鈕樣式 */
.menu-button {
  display: flex;
  align-items: center;
  padding: 16px 16px;
  background-color: transparent;
  border: none;
  color:#060c19;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-button:hover {
  background-color: rgba(30, 144, 255, 0.3); /* DodgerBlue 30%透明 */
  color: #1e90ff;
  font-weight: 600;
}

/* 使用 Nuxt 預設的 active class */
.menu-button.router-link-exact-active {
  border-right: 4px solid #1e90ff; /* 右邊直條 */
  font-weight: 600;
  color: #1e90ff;
  background-color: rgba(30, 144, 255, 0.1); /* 淡藍背景 */
}

/* 讓 icon 在 active 或 hover 狀態下變色 */
.menu-button.router-link-exact-active .side-bar-icon,
.menu-button:hover .side-bar-icon {
   filter: invert(33%) sepia(96%) saturate(7500%) hue-rotate(200deg) brightness(92%) contrast(90%);
  transition: filter 0.2s ease;
}
</style>
