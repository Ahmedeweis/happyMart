<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Trending Product</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">Show All</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(product, index) in products" :key="index"
        class="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition group">
        <div class="relative mb-4 bg-gray-50 rounded-xl h-48 flex items-center justify-center overflow-hidden">
          <img :src="product.image" class="h-32 object-contain group-hover:scale-110 transition" />
          <button
            class="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <div class="text-center">
          <div class="flex justify-center mb-1">
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
            <span class="text-xs text-gray-400 ml-1">(120 Reviews)</span>
          </div>
          <h3 class="font-medium text-gray-900 mb-1">{{ product.name }}</h3>
          <div class="text-red-500 font-bold text-sm mb-3">{{ product.price }}</div>
          <button class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import product1 from '../../assets/imgs/TrendingProduct/1.png'
import product2 from '../../assets/imgs/TrendingProduct/2.png'
import product3 from '../../assets/imgs/TrendingProduct/3.png'
import product4 from '../../assets/imgs/TrendingProduct/4.png'
import product5 from '../../assets/imgs/TrendingProduct/5.png'
import product6 from '../../assets/imgs/TrendingProduct/6.png'
import product7 from '../../assets/imgs/TrendingProduct/7.png'
import product8 from '../../assets/imgs/TrendingProduct/8.png'

const products = [
  { name: 'Bread Oil', price: '$75.00', image: product2 },
  { name: 'Western Ladies Bag', price: '$75.00', image: product1 },
  { name: 'Sony Wireless Headphones', price: '$75.00', image: product3 },
  { name: 'Garnier Face Wash', price: '$75.00', image: product4 },
  { name: 'Fresh Avocado Oil', price: '$75.00', image: product5 },
  { name: 'Running Sports Shoes', price: '$75.00', image: product6 },
  { name: 'Smart Watch Pro', price: '$75.00', image: product7 },
  { name: 'Organic Shampoo', price: '$75.00', image: product8 },
]
</script>
