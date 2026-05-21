<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Summer Collections</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="product in summerProducts" :key="product.id"
        class="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition group text-center">
        <router-link :to="`/product/${product.id}`"
          class="relative mb-4 bg-gray-50 rounded-xl h-48 flex items-center justify-center overflow-hidden block">
          <img :src="getImageUrl(product.image)" class="h-32 object-contain group-hover:scale-110 transition" />
        </router-link>
        <div class="flex justify-center mb-1">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
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
  </section>
</template>

<script setup>
import productsData from '../../data/products.json'
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()

const summerProducts = productsData.filter(p => p.category === 'summer')

const getImageUrl = (path) => {
  if (!path) return ''
  try {
    return new URL(path, import.meta.url).href
  } catch (e) {
    return path
  }
}
</script>
