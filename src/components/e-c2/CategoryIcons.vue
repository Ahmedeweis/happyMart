<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Select Categories</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <div class="flex  pt-4 overflow-x-auto pb-4 no-scrollbar justify-start md:justify-between">
      <div class="flex flex-col items-center gap-2 transition-all duration-300"
        :class="activeCategory === 'all' ? 'min-w-[140px]' : 'min-w-[80px]'">
        <div @click="activeCategory = 'all'" :class="[
          'flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5',
          activeCategory === 'all'
            ? 'h-12 px-6 rounded-full gap-2 bg-gradient-to-r from-gray-700 to-slate-800 text-white shadow-lg shadow-gray-400/50 hover:shadow-gray-500'
            : 'w-12 h-12 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-800 hover:border-slate-800 hover:text-white text-slate-600 shadow-sm hover:shadow-md'
        ]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span v-if="activeCategory === 'all'" class="text-sm font-medium whitespace-nowrap">All Categories</span>
        </div>
      </div>

      <div v-for="cat in categoryIcons" :key="cat.id"
        class="flex flex-col items-center gap-2 transition-all duration-300"
        :class="activeCategory === cat.id ? 'min-w-[140px]' : 'min-w-[80px]'">
        <div @click="activeCategory = cat.id" :class="[
          'flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5',
          activeCategory === cat.id
            ? 'h-12 px-6 rounded-full gap-2 ' + cat.activeClasses
            : 'w-12 h-12 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-800 hover:border-slate-800 hover:text-white text-slate-600 shadow-sm hover:shadow-md'
        ]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="cat.path" />
          </svg>
          <span v-if="activeCategory === cat.id" class="text-sm font-medium whitespace-nowrap">{{ cat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeCategory = ref('all')

const categoryIcons = [
  {
    id: 'fashion',
    label: 'Fashion & Lifestyle',
    path: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    activeClasses: "bg-gradient-to-r from-rose-400 to-red-400 text-white shadow-lg shadow-red-200/50 hover:shadow-red-300"
  },
  {
    id: 'electronics',
    label: 'Electronics',
    path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    activeClasses: "bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg shadow-blue-200/50 hover:shadow-blue-300"
  },
  {
    id: 'home',
    label: 'Home & Garden',
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    activeClasses: "bg-gradient-to-r from-emerald-400 to-emerald-500 text-white shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300"
  },
  {
    id: 'sports',
    label: 'Sports',
    path: "M13 10V3L4 14h7v7l9-11h-7z",
    activeClasses: "bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-200/50 hover:shadow-amber-300"
  },
  {
    id: 'beauty',
    label: 'Beauty',
    path: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    activeClasses: "bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-200/50 hover:shadow-fuchsia-300"
  },
  {
    id: 'gifts',
    label: 'Gifts',
    path: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
    activeClasses: "bg-gradient-to-r from-indigo-400 to-indigo-500 text-white shadow-lg shadow-indigo-200/50 hover:shadow-indigo-300"
  }
]
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
