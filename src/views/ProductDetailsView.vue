<template>
  <div class="bg-gray-50 font-sans text-gray-800 min-h-screen flex flex-col">
    <Header />
    <CartModal />
    
    <div class="container mx-auto px-4 py-8 flex-grow" v-if="product">
      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-500 mb-6">
        <router-link to="/" class="hover:text-blue-600 transition">Home</router-link>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium">{{ product.name }}</span>
      </nav>

      <div class="flex flex-col md:flex-row gap-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <!-- Left: Image (Only ONE Image) -->
        <div class="md:w-1/2 flex justify-center items-center rounded-xl p-8 bg-gray-50">
          <img :src="getImageUrl(product.image)" :alt="product.name" class="max-w-full h-auto max-h-[500px] object-contain transition-transform duration-300 hover:scale-105" />
        </div>

        <!-- Right: Details -->
        <div class="md:w-1/2 flex flex-col justify-center">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
          
          <div class="text-2xl font-bold text-red-500 mb-6">${{ product.price.toFixed(2) }}</div>

          <p class="text-gray-600 mb-8 leading-relaxed">
            {{ product.description }}
          </p>

          <!-- Attributes section -->
          <div class="mb-8 space-y-6">
            <!-- Sizes -->
            <div v-if="product.sizes && product.sizes.length">
              <span class="block text-sm font-medium text-gray-700 mb-3">Options:</span>
              <div class="flex flex-wrap gap-3">
                <span v-for="(size, index) in product.sizes" :key="index"
                      @click="selectedSize = size"
                      class="px-5 py-2.5 border rounded-full text-sm font-medium cursor-pointer transition"
                      :class="selectedSize === size ? 'border-2 border-blue-200 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'">
                  {{ size }}
                </span>
              </div>
            </div>

            <!-- Colors -->
            <div v-if="product.colors && product.colors.length">
              <span class="block text-sm font-medium text-gray-700 mb-3">Color:</span>
              <div class="flex flex-wrap gap-3">
                <span v-for="(color, index) in product.colors" :key="index"
                      @click="selectedColor = color"
                      class="px-5 py-2.5 border rounded-full text-sm font-medium cursor-pointer transition"
                      :class="selectedColor === color ? 'border-2 border-blue-200 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'">
                  {{ color }}
                </span>
              </div>
            </div>
            
            <div class="flex gap-3 items-start text-sm text-gray-600 bg-gray-50 p-4 rounded-xl mt-6 border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>In stock and ready to ship. Usually arrives in 3-5 business days.</p>
            </div>
          </div>

          <div class="mt-2">
            <button @click="addToCart" class="w-full bg-[#5235ff] text-white font-semibold px-6 py-4 rounded-xl hover:bg-[#432be0] transition shadow-lg shadow-blue-500/25 text-center flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
    <div v-else class="container mx-auto px-4 py-16 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Product not found</h2>
      <p class="text-gray-500 mb-6">The product you are looking for does not exist or has been removed.</p>
      <router-link to="/" class="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Return Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/e-c2/Header.vue'
import CartModal from '../components/e-c2/CartModal.vue'
import productsData from '../data/products.json'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const cartStore = useCartStore()

const selectedSize = ref('')
const selectedColor = ref('')

const product = computed(() => {
  const id = parseInt(route.params.id)
  return productsData.find(p => p.id === id)
})

// Automatically select the first option when the product loads
watch(product, (newProduct) => {
  if (newProduct) {
    if (newProduct.sizes && newProduct.sizes.length) {
      selectedSize.value = newProduct.sizes[0]
    }
    if (newProduct.colors && newProduct.colors.length) {
      selectedColor.value = newProduct.colors[0]
    }
  }
}, { immediate: true })

const addToCart = () => {
  if (!product.value) return
  
  // Create a customized product object with the selected options
  const cartItem = {
    ...product.value,
    size: selectedSize.value,
    color: selectedColor.value
  }
  
  cartStore.addToCart(cartItem)
}

const getImageUrl = (path) => {
  if (!path) return ""
  return path.startsWith('/') ? path : new URL(path.replace('../../assets', '../assets'), import.meta.url).href
}
</script>
