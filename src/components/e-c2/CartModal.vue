<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="cartStore.isOpen"
      class="fixed inset-0 bg-black/50 z-40 transition-opacity"
      @click="cartStore.closeCart"
    ></div>
    <!-- Slide-over panel -->
    <div
      class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col rounded-l-2xl"
      :class="cartStore.isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <h2 class="text-lg font-bold text-gray-900">Your cart | {{ cartStore.totalItems }} Item(s)</h2>
        <button
          @click="cartStore.closeCart"
          class="text-gray-400 hover:text-indigo-600 focus:outline-none"
        >
          <span class="sr-only">Close panel</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto px-6 py-4">
        <!-- Notification -->
        <div class="bg-[#fdf4db] text-gray-800 text-xs px-4 py-3 rounded-xl mb-6 font-medium text-center shadow-sm">
          Personalized items will require an additional 3-4 business days beyond the processing and shipping option.
        </div>
        <!-- Empty Cart Message -->
        <div v-if="cartStore.items.length === 0" class="text-center text-gray-500 mt-10">
          Your cart is empty.
        </div>
        <!-- Cart Items -->
        <div v-for="item in cartStore.items" :key="item.id" class="mb-6 bg-[#FCFCFD] p-4">
          <div class="flex gap-4 p-4 border border-gray-100 rounded-2xl shadow-sm">
            <div class="w-24 h-24 bg-gray-50 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img :src="getImageUrl(item.image)" :alt="item.name" class="object-cover max-h-full" />
            </div>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-sm font-bold text-gray-900 leading-snug">{{ item.name }}</h3>
                <p class="text-xs text-gray-600 mt-1">Quantity: {{ item.quantity }}</p>
                <p v-if="item.size" class="text-xs text-gray-600">Size: {{ item.size }}</p>
              </div>
              <div class="font-bold text-gray-900 mt-2">${{ (item.price * item.quantity).toFixed(2) }}</div>
            </div>
          </div>
          <!-- Cart Actions -->
          <div class="flex items-center justify-between mt-3 px-1">
              <div class="flex items-center gap-4 text-sm font-medium">
                <button @click="cartStore.decrementQuantity(item.cartItemId)" class="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:bg-gray-50 hover:text-gray-800 hover:border-gray-400 transition focus:outline-none shadow-sm">-</button>
                <span class="w-4 text-center">{{ item.quantity }}</span>
                <button @click="cartStore.incrementQuantity(item.cartItemId)" class="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:bg-gray-50 hover:text-gray-800 hover:border-gray-400 transition focus:outline-none shadow-sm">+</button>
              </div>
              <button @click="cartStore.removeFromCart(item.cartItemId)" class="text-sm text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1 focus:outline-none">
                Remove
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="border-t px-6 py-6 bg-white rounded-bl-2xl">
        <div class="space-y-2 mb-6">
          <div class="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span class="font-medium text-gray-900">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>Taxes</span>
            <span>Calculated at next step</span>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>Calculated at next step</span>
          </div>
          <div class="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t mt-3">
            <span>Total</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
        </div>
        <div class="flex items-center justify-between gap-4">
          <button @click="cartStore.closeCart" class="text-indigo-600 text-sm font-semibold hover:underline flex-1 text-center focus:outline-none">
            Continue shopping
          </button>
          <button @click="$router.push('/checkout'); cartStore.closeCart()" class="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from '../../stores/cart'
const cartStore = useCartStore()
const getImageUrl = (path) => {
  if(!path) return '/public/logo.png'
  return new URL(path, import.meta.url).href
}
</script>
