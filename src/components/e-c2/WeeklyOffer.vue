<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Weekly Offer</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <!-- Top row: big banner + 2 product cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

      <!-- Big Banner -->
      <div class="md:col-span-2 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
        <img :src="bigBanner" alt="Special Offer" class="w-full h-full object-cover" />
      </div>

      <!-- Top Products -->
      <div v-for="product in topProducts" :key="product.id"
        class="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition group">
        <router-link :to="`/product/${product.id}`" class="relative w-full flex justify-center mb-4">
          <img :src="getImageUrl(product.image)" class="h-32 object-contain group-hover:scale-110 transition" />
        </router-link>
        <div class="flex justify-center mb-1">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
          <span class="text-xs text-gray-400 ml-1">(120 Reviews)</span>
        </div>
        <router-link :to="`/product/${product.id}`">
          <h3 class="font-medium text-gray-900 mb-1 hover:text-red-500 transition">{{ product.name }}</h3>
        </router-link>
        <div class="text-red-500 font-bold text-sm mb-3">${{ product.price.toFixed(2) }}</div>
        <button @click="cartStore.addToCart(product)"
          class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Bottom row: 4 product cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="product in bottomProducts" :key="product.id"
        class="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition group">
        <router-link :to="`/product/${product.id}`" class="relative w-full flex justify-center mb-4">
          <img :src="getImageUrl(product.image)" class="h-28 object-contain group-hover:scale-110 transition" />
        </router-link>
        <div class="flex justify-center mb-1">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
          <span class="text-xs text-gray-400 ml-1">(120 Reviews)</span>
        </div>
        <router-link :to="`/product/${product.id}`">
          <h3 class="font-medium text-gray-900 text-sm mb-1 hover:text-red-500 transition">{{ product.name }}</h3>
        </router-link>
        <div class="text-red-500 font-bold text-sm mb-3">${{ product.price.toFixed(2) }}</div>
        <button @click="cartStore.addToCart(product)"
          class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import productsData from '../../data/products.json'
import { useCartStore } from '../../stores/cart'
const bigBanner = '/assets/imgs/weekly/bigpne.png'

const cartStore = useCartStore()

const weeklyProducts = productsData.filter(p => p.category === 'weekly')
const topProducts = weeklyProducts.slice(0, 2)
const bottomProducts = weeklyProducts.slice(2, 6)

const getImageUrl = (path) => {
  if (!path) return ""
  return path.startsWith('/') ? path : new URL(path, import.meta.url).href
}
</script>
