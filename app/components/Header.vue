<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(i => i)
  const crumbs = pathArray.map((path, i) => {
    const to = '/' + pathArray.slice(0, i + 1).join('/')
    return { name: path.charAt(0).toUpperCase() + path.slice(1), to }
  })
  return [{ name: 'Home', to: '/' }, ...crumbs]
})
</script>

<template>
  <header class="header">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
          <NuxtLink :to="crumb.to" :class="{ 'active': index === breadcrumbs.length - 1 }">
            <svg v-if="crumb.name === 'Home'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span v-if="crumb.name !== 'Home'" >{{ crumb.name }}</span>
          </NuxtLink>
          <span v-if="index < breadcrumbs.length - 1" class="separator">></span>
        </li>
      </ol>
    </nav>
     <div class="user-info">
      <button class="notification-btn" aria-label="通知鈴鐺">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <!-- <span class="badge">{{ notificationCount }}</span> -->
        <span class="badge">{{ 10 }}</span>
      </button>
      &nbsp
      <img src="/assets/avatar.jpg" alt="User Avatar" class="avatar" />
      <span class="username">Hi, Matt Chen</span>
    </div>
  </header>
</template>

<style scoped>
.logo {
  transform: scaleX(0.95); /* 左右壓扁成80% */
  margin-top: 10px;
  width: 200px;  /* 你可以依需求調整大小 */
}

.header {
  padding: 10px;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb; /* 新增底線 */
}

.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item a {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}

.breadcrumb-item a:hover {
  color: #1e90ff;
}

.breadcrumb-item a.active {
  color: #1e90ff;
  font-weight: bold;
}

.separator {
  margin: 0 8px;
  color: #9ca3af;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;  /* 推到最右邊 */
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* 圓形 */
}

.username {
  color: #333;
}

.notification-btn {
  position: relative; /* 讓 badge 可以絕對定位 */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #555;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}

.notification-btn:hover {
  color: #1e40af;
}

/* 通知數字紅色小圓點 */
.badge {
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(50%, -50%);
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 9999px; /* 完全圓形 */
  min-width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* 讓點擊事件穿透到鈴鐺 */
  user-select: none;
}

.ml-2 {
  margin-left: 0.5rem;
}

</style>