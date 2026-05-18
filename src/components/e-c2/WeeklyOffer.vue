<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Weekly Offer</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <!-- Top row: big banner + 2 product cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

      <!-- Big Banner (spans 1 col, same height as the 2 cards beside it) -->
      <div class="md:col-span-2 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
        <img :src="bigBanner" alt="Special Offer" class="w-full h-full object-cover" />
      </div>

      <!-- Top Product 1 -->
      <div
        class="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition group">
        <div class="relative w-full flex justify-center mb-4">
          <img :src="topProducts[0].image" class="h-32 object-contain group-hover:scale-110 transition" />
        </div>
        <div class="flex justify-center mb-1">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
          <span class="text-xs text-gray-400 ml-1">(120 Reviews)</span>
        </div>
        <h3 class="font-medium text-gray-900 mb-1">{{ topProducts[0].name }}</h3>
        <div class="text-red-500 font-bold text-sm mb-3">{{ topProducts[0].price }}</div>
        <button
          class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">Add
          to Cart</button>
      </div>

      <!-- Top Product 2 -->
      <div
        class="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition group">
        <div class="relative w-full flex justify-center mb-4">
          <img :src="topProducts[1].image" class="h-32 object-contain group-hover:scale-110 transition" />
        </div>
        <div class="flex justify-center mb-1">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
          <span class="text-xs text-gray-400 ml-1">(120 Reviews)</span>
        </div>
        <h3 class="font-medium text-gray-900 mb-1">{{ topProducts[1].name }}</h3>
        <div class="text-red-500 font-bold text-sm mb-3">{{ topProducts[1].price }}</div>
        <button
          class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">Add
          to Cart</button>
      </div>
    </div>

    <!-- Bottom row: 4 product cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="(product, index) in bottomProducts" :key="index"
        class="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition group">
        <div class="relative w-full flex justify-center mb-4">
          <img :src="product.image" class="h-28 object-contain group-hover:scale-110 transition" />
        </div>
        <div class="flex justify-center mb-1">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
          <span class="text-xs text-gray-400 ml-1">(120 Reviews)</span>
        </div>
        <h3 class="font-medium text-gray-900 text-sm mb-1">{{ product.name }}</h3>
        <div class="text-red-500 font-bold text-sm mb-3">{{ product.price }}</div>
        <button
          class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">Add
          to Cart</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import bigBanner from '../../assets/imgs/weekly/bigpne.png'
import img1 from '../../assets/imgs/weekly/1.png'
import img2 from '../../assets/imgs/weekly/2.png'
import img3 from '../../assets/imgs/weekly/3.png'
import img4 from '../../assets/imgs/weekly/4.png'
import img5 from '../../assets/imgs/weekly/5.png'
import img6 from '../../assets/imgs/weekly/6.png'

const topProducts = [
  { name: 'Product Name', price: '$75.00', image: img1 },
  { name: 'Product Name', price: '$75.00', image: img2 },
]

const bottomProducts = [
  { name: 'Product Name', price: '$75.00', image: img3 },
  { name: 'Product Name', price: '$75.00', image: img4 },
  { name: 'Product Name', price: '$75.00', image: img5 },
  { name: 'Product Name', price: '$75.00', image: img6 },
]
</script>
