<template>
   <section class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between mb-6">
         <h2 class="text-lg font-bold text-gray-900">Select Categories</h2>
         <a href="#" class="text-xs text-gray-500 hover:text-red-500 transition-colors">Show All</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         <div v-for="cat in categories" :key="cat.id" @click="selectCategory(cat.id)"
            class="flex flex-col gap-3 group cursor-pointer">
            
            <div class="category-card rounded-2xl w-full h-[140px] sm:h-[160px] relative overflow-hidden"
               :class="[{ active: activeId === cat.id }]">
               
               <img :src="cat.img" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

               <!-- Active badge -->
               <div v-if="activeId === cat.id" class="absolute inset-0 ring-4 ring-inset rounded-2xl transition-all duration-300" :style="`border-color: ${cat.accent}`"></div>
               <span v-if="activeId === cat.id"
                  class="active-badge absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                  :style="`background: ${cat.accent}`">✓</span>
            </div>

            <div class="flex items-center gap-2 px-1">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 transition-all duration-300"
                  :stroke="activeId === cat.id ? cat.accent : '#9ca3af'">
                  <path v-for="(d, i) in cat.paths" :key="i" :d="d" />
                  <template v-if="cat.extraElements">
                     <component v-for="(el, i) in cat.extraElements" :key="'e' + i" :is="el.tag" v-bind="el.attrs" />
                  </template>
               </svg>
               <span class="font-medium text-[15px] transition-colors duration-300"
                  :style="activeId === cat.id ? `color: ${cat.accent}` : 'color: #1f2937'">{{ cat.label }}</span>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const img1 = '/assets/imgs/afrerweeklyoffer/1.png'
const img2 = '/assets/imgs/afrerweeklyoffer/2.png'
const img3 = '/assets/imgs/afrerweeklyoffer/3.png'
const img4 = '/assets/imgs/afrerweeklyoffer/4.png'

const activeId = ref('fashion')

function selectCategory(id) {
   activeId.value = id
}

const activeShadow = computed(() => {
   const cat = categories.value.find(c => c.id === activeId.value)
   return cat ? cat.accent + '55' : 'transparent'
})

const activeRing = computed(() => {
   const cat = categories.value.find(c => c.id === activeId.value)
   return cat ? cat.accent : 'transparent'
})

const categories = ref([
   {
      id: 'home',
      label: 'Home Decor',
      accent: '#d97706',
      paths: [
         'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
      ],
      extraElements: [
         { tag: 'polyline', attrs: { points: '9 22 9 12 15 12 15 22' } },
      ],
      img: img1,
   },
   {
      id: 'seafood',
      label: 'Ocean Seafood',
      accent: '#0284c7',
      paths: [
         'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z',
      ],
      img: img2,
   },
   {
      id: 'vegetables',
      label: 'Fresh Vegetables',
      accent: '#16a34a',
      paths: [
         'M12 2v20',
         'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      ],
      img: img3,
   },
   {
      id: 'grocery',
      label: 'Groceries',
      accent: '#e11d48',
      paths: [
         'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z',
         'M16 10a4 4 0 0 1-8 0',
      ],
      extraElements: [
         { tag: 'line', attrs: { x1: '3', y1: '6', x2: '21', y2: '6' } },
      ],
      img: img4,
   },
])
</script>

<style scoped>
.category-card {
   user-select: none;
   transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.25s ease;
}

.category-card:not(.active):hover {
   box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.category-card.active {
   transform: scale(1.02);
   box-shadow: 0 12px 30px -4px v-bind(activeShadow);
}

.active-badge {
   animation: pop-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes pop-in {
   from {
      transform: scale(0);
      opacity: 0;
   }

   to {
      transform: scale(1);
      opacity: 1;
   }
}
</style>
