<script setup lang="ts">
import { ref, computed } from 'vue'

interface Order {
  id: number
  order: number
  status: string
  amount: number
  createdAt: string
  category: string
}

const orders = ref<Order[]>([
  { id: 1, order: 200913, status: 'Paid', amount: 120, createdAt: '2025-09-01', category: 'Food' },
  { id: 2, order: 977771, status: 'Paid', amount: 300, createdAt: '2025-09-03', category: 'Transport' },
  { id: 3, order: 708225, status: 'Paid', amount: 50, createdAt: '2025-09-05', category: 'Entertainment' },
  { id: 4, order: 808330, status: 'Paid', amount: 80, createdAt: '2025-09-06', category: 'Food' },
  { id: 5, order: 900112, status: 'Paid', amount: 150, createdAt: '2025-09-07', category: 'Bills' },
])

// 指標計算
const totalTransactions = computed(() => orders.value.length)
const totalIncome = computed(() => orders.value.reduce((sum, o) => sum + o.amount, 0))
const averagePerTransaction = computed(() => (orders.value.length ? totalIncome.value / orders.value.length : 0))
const categoryMap = computed(() => {
  const map: Record<string, number> = {}
  orders.value.forEach(o => {
    map[o.category] = (map[o.category] || 0) + o.amount
  })
  return map
})
const maxCategory = computed(() => {
  const entries = Object.entries(categoryMap.value)
  if (!entries.length) return '-'
  return entries.reduce((a, b) => (b[1] > a[1] ? b : a))[0]
})
const remainingAmount = computed(() => totalIncome.value * 0.3) // 假設剩餘 30%

function formatCurrency(val: number) {
  return `$${val.toFixed(2)}`
}
</script>

<template>
  <div class="p-6 space-y-6">
    <!-- 指標卡片 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div class="bg-white p-4 rounded shadow flex flex-col">
        <span class="text-sm text-gray-500">本月支出</span>
        <span class="text-xl font-bold text-red-600">{{ formatCurrency(totalIncome) }}</span>
      </div>
      <div class="bg-white p-4 rounded shadow flex flex-col">
        <span class="text-sm text-gray-500">本月收入</span>
        <span class="text-xl font-bold text-green-600">{{ formatCurrency(totalIncome) }}</span>
      </div>
      <div class="bg-white p-4 rounded shadow flex flex-col">
        <span class="text-sm text-gray-500">平均每筆交易</span>
        <span class="text-xl font-bold">{{ formatCurrency(averagePerTransaction) }}</span>
      </div>
      <div class="bg-white p-4 rounded shadow flex flex-col">
        <span class="text-sm text-gray-500">最多支出類別</span>
        <span class="text-xl font-bold">{{ maxCategory }}</span>
      </div>
      <div class="bg-white p-4 rounded shadow flex flex-col">
        <span class="text-sm text-gray-500">本月剩餘金額</span>
        <span class="text-xl font-bold text-blue-600">{{ formatCurrency(remainingAmount) }}</span>
      </div>
    </div>

    <!-- 交易表格 -->
    <div class="bg-white p-4 rounded shadow overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">ORDER #</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">STATUS</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">AMOUNT</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">CREATED AT</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">CATEGORY</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="order in orders" :key="order.id">
            <td class="px-4 py-2 text-sm text-gray-700">{{ order.order }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ order.status }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ formatCurrency(order.amount) }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ order.createdAt }}</td>
            <td class="px-4 py-2 text-sm text-gray-700">{{ order.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
