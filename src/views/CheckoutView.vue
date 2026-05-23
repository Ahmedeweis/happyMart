<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <Header />
    <CartModal />

    <!-- Main Content -->
    <div class="container mx-auto px-4 flex-grow">
      <div class="flex flex-col lg:flex-row">
        
        <!-- Left Column: Forms -->
        <div class="lg:w-[55%] p-4 lg:p-12 lg:pr-16">
          <!-- Your details -->
          <div class="flex justify-between items-baseline mb-6">
            <h2 class="text-lg font-bold text-gray-900">Your details</h2>
            <a href="#" class="text-sm text-blue-600 hover:underline">Already have an account? Log in</a>
          </div>
          
          <div class="space-y-4 mb-10">
            <div>
              <input type="text" placeholder="Full Name *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <input type="email" placeholder="Email *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div class="flex-1">
                <input type="tel" placeholder="Phone *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
                <p class="text-[10px] text-gray-400 mt-2">We will only use this if we need to contact you about your order</p>
              </div>
            </div>
          </div>

          <!-- Shipping Address -->
          <h2 class="text-lg font-bold text-gray-900 mb-6">Shipping Address</h2>
          <div class="space-y-4 mb-8">
            <div class="relative">
              <select class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 appearance-none outline-none focus:ring-2 focus:ring-blue-500">
                <option value="US" selected>United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
              </select>
              <span class="absolute left-4 top-1.5 text-[9px] text-red-500 font-medium">Country/ Region *</span>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <div>
              <input type="text" placeholder="Street address, house/building number *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            
            <div>
              <input type="text" placeholder="Apartment, suite, floor, unit, etc." class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <input type="text" placeholder="City *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div class="flex-1 relative">
                <select class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 appearance-none outline-none focus:ring-2 focus:ring-blue-500 text-gray-500">
                  <option value="" disabled selected>State/Province/Region *</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <div class="flex-1">
                <input type="text" placeholder="Postcode *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>

          <!-- Consent Checkbox -->
          <div class="flex items-start gap-3 mb-8">
            <input type="checkbox" id="consent" class="mt-0.5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
            <label for="consent" class="text-[11px] text-gray-400 leading-relaxed">
              I consent that REAL MADRID may send me information and commercial communications, including by electronic means and prior profiling, on products, services and activities of Real Madrid, including the Online Store, and its sponsors and collaborators. You can exercise your data protection rights at <a href="mailto:oposicion@corp.realmadrid.com" class="text-blue-500 hover:underline">oposicion@corp.realmadrid.com</a>
            </label>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button class="bg-[#5c40ff] hover:bg-[#4d35eb] text-white font-medium px-8 py-3 rounded-full shadow-lg transition text-sm">
              Continue to shipping
            </button>
          </div>
        </div>

        <!-- Right Column: Cart Summary -->
        <div class="lg:w-[45%] bg-[#fafbfe] p-4 lg:p-12 border-l border-gray-100 min-h-full">
          <div class="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">Your cart</h2>
            <span class="text-gray-900 font-medium text-sm">{{ cartStore.totalItems }} Item</span>
          </div>

          <!-- Cart Items List -->
          <div class="space-y-6 mb-8">
            <div class="bg-[#fcf2d9] text-[#715c26] text-[11px] px-6 py-4 rounded-xl font-medium text-center shadow-sm">
              Personalized items will require an additional 3-4 business days beyond the processing and shipping option.
            </div>

            <div v-for="item in cartStore.items" :key="item.id" class="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div class="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <img :src="getImageUrl(item.image)" :alt="item.name" class="max-h-full object-contain" />
              </div>
              <div class="flex-1 flex flex-col py-1">
                <h3 class="font-bold text-gray-900 text-sm mb-2">{{ item.name }}</h3>
                <p class="text-xs text-gray-600 mb-0.5">Quantity: {{ item.quantity }}</p>
                <p v-if="item.size" class="text-xs text-gray-600">Size: {{ item.size }}</p>
                
                <p class="font-bold text-gray-900 text-sm mt-6">
                  ${{ (item.price * item.quantity).toFixed(2) }}
                </p>
              </div>
            </div>
            
            <div v-if="cartStore.items.length === 0" class="text-center text-gray-500 py-8 text-sm">
              Your cart is empty.
            </div>
          </div>

          <!-- Discount code link -->
          <a href="#" class="text-sm text-[#5c40ff] hover:underline mb-8 block">Got a discount code?</a>

          <!-- Totals -->
          <div class="space-y-4 mb-6">
            <div class="flex justify-between text-sm text-gray-700">
              <span class="font-medium">Subtotal</span>
              <span class="font-medium text-gray-900">${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm text-gray-700">
              <span class="font-medium">Taxes</span>
              <span class="text-gray-600">Calculated at next step</span>
            </div>
            <div class="flex justify-between text-sm text-gray-700">
              <span class="font-medium">Shipping</span>
              <span class="text-gray-600">Calculated at next step</span>
            </div>
          </div>

          <div class="flex justify-between items-center pt-6 border-t border-gray-200 mt-2">
            <span class="text-lg font-bold text-gray-900">Total</span>
            <span class="text-lg font-bold text-gray-900">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import Header from '../components/e-c2/Header.vue'
import CartModal from '../components/e-c2/CartModal.vue'

const cartStore = useCartStore()

const getImageUrl = (path) => {
  if (!path) return ""
  return path.startsWith('/') ? path : new URL(path, import.meta.url).href
}
</script>
