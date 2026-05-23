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
            <a href="#" class="text-sm text-[#FB2C36] hover:underline">Already have an account? Log in</a>
          </div>
          <div class="space-y-4 mb-10">
            <div>
              <input type="text" placeholder="Full Name *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <input type="email" placeholder="Email *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
              </div>
              <div class="flex-1">
                <input type="tel" placeholder="Phone *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
                <p class="text-[10px] text-gray-400 mt-2">We will only use this if we need to contact you about your order</p>
              </div>
            </div>
          </div>
          <!-- Shipping Address -->
          <h2 class="text-lg font-bold text-gray-900 mb-6">Shipping Address</h2>
          <div class="space-y-4 mb-8">
            <div class="relative">
              <select class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 appearance-none outline-none focus:ring-2 focus:ring-[#FB2C36]">
                <option value="US" selected>United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
              </select>
              <span class="absolute left-4 top-1.5 text-[9px] text-[#FB2C36] font-medium">Country/ Region *</span>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Street address, house/building number *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
            </div>
            <div>
              <input type="text" placeholder="Apartment, suite, floor, unit, etc." class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <input type="text" placeholder="City *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
              </div>
              <div class="flex-1 relative">
                <select class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 appearance-none outline-none focus:ring-2 focus:ring-[#FB2C36] text-gray-500">
                  <option value="" disabled selected>State/Province/Region *</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <div class="flex-1">
                <input type="text" placeholder="Postcode *" class="w-full bg-[#f4f5f6] border-none rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
              </div>
            </div>
          </div>
          <!-- Consent Checkbox -->
          <div class="flex items-start gap-3 mb-8">
            <input type="checkbox" id="consent" class="mt-0.5 w-4 h-4 text-[#FB2C36] bg-gray-100 border-gray-300 rounded focus:ring-[#FB2C36]">
            <label for="consent" class="text-[11px] text-gray-400 leading-relaxed">
              I consent that REAL MADRID may send me information and commercial communications, including by electronic means and prior profiling, on products, services and activities of Real Madrid, including the Online Store, and its sponsors and collaborators. You can exercise your data protection rights at <a href="mailto:oposicion@corp.realmadrid.com" class="text-[#FB2C36] hover:underline">oposicion@corp.realmadrid.com</a>
            </label>
          </div>
          <!-- Submit Button -->
          <div class="flex justify-end mt-8">
            <button class="bg-[#FB2C36] hover:bg-[#e0252e] text-white font-medium px-8 py-3 rounded-full shadow-lg transition text-sm">
              Continue to shipping
            </button>
          </div>
          <!-- Shipping method -->
          <h2 class="text-lg font-bold text-gray-900 mt-12 mb-6">Shipping method</h2>
          <div class="border-2 border-[#FB2C36] bg-red-50 rounded-xl p-4 flex justify-between items-center mb-12">
            <div>
              <div class="font-bold text-gray-900 text-sm">Express</div>
              <div class="text-xs text-gray-600 mt-0.5">Entrega en 8-12 días</div>
            </div>
            <div class="font-bold text-gray-900 text-sm">$34.00</div>
          </div>
          <!-- Payment -->
          <h2 class="text-lg font-bold text-gray-900 mb-1">Payment</h2>
          <p class="text-xs text-gray-500 mb-6">All transactions are secure and encrypted.</p>
          <div class="border border-gray-200 rounded-xl overflow-hidden mb-8">
            <!-- Credit Card Option -->
            <div
              @click="paymentMethod = 'card'"
              class="p-4 border-b border-gray-200 cursor-pointer transition"
              :class="paymentMethod === 'card' ? 'bg-red-50' : 'bg-white'"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-4 h-4 rounded-full border flex items-center justify-center" :class="paymentMethod === 'card' ? 'border-[#FB2C36]' : 'border-gray-300'">
                    <div v-if="paymentMethod === 'card'" class="w-2 h-2 rounded-full bg-[#FB2C36]"></div>
                  </div>
                  <span class="text-sm font-bold text-gray-900">Credit card</span>
                </div>
                <div class="flex items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" class="h-3 opacity-80" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" class="h-4" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" class="h-3 opacity-80" alt="PayPal" />
                  <span class="text-[10px] text-gray-400 font-medium">+2</span>
                </div>
              </div>
              <!-- Credit Card Fields -->
              <div v-if="paymentMethod === 'card'" class="mt-6 space-y-4 pt-4 border-t border-red-100">
                <div class="relative">
                  <input type="text" placeholder="Card number" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div class="flex gap-4">
                  <input type="text" placeholder="Expiration date (MM / YY)" class="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
                  <div class="flex-1 relative">
                    <input type="text" placeholder="Security code" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <input type="text" placeholder="Name on card" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#FB2C36]" />
                <div class="flex items-center gap-3 py-2">
                  <input type="checkbox" id="billing-same" v-model="billingSameAsShipping" class="w-4 h-4 text-[#FB2C36] border-gray-300 rounded focus:ring-[#FB2C36]">
                  <label for="billing-same" class="text-xs text-gray-600 font-medium">Use shipping address as billing address</label>
                </div>
              </div>
            </div>
            <!-- PayPal Option -->
            <div
              @click="paymentMethod = 'paypal'"
              class="p-4 cursor-pointer transition"
              :class="paymentMethod === 'paypal' ? 'bg-red-50' : 'bg-white'"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-4 h-4 rounded-full border flex items-center justify-center" :class="paymentMethod === 'paypal' ? 'border-[#FB2C36]' : 'border-gray-300'">
                    <div v-if="paymentMethod === 'paypal'" class="w-2 h-2 rounded-full bg-[#FB2C36]"></div>
                  </div>
                  <span class="text-sm font-bold text-gray-900">PayPal</span>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" class="h-3" alt="PayPal" />
              </div>
              <div v-if="paymentMethod === 'paypal'" class="mt-4 pt-4 border-t border-red-100 text-center">
                <p class="text-xs text-gray-500 py-4">You'll be redirected to PayPal to complete your purchase</p>
              </div>
            </div>
          </div>
          <!-- Billing Address Section (If not same as shipping) -->
          <div v-if="paymentMethod === 'paypal' || !billingSameAsShipping" class="mb-8 animate-fade-in">
            <h2 class="text-lg font-bold text-gray-900 mb-6">Billing address</h2>
            <div class="border border-gray-200 rounded-xl overflow-hidden">
               <div
                @click="billingSameAsShipping = true"
                class="p-4 border-b border-gray-200 cursor-pointer transition flex items-center gap-3"
                :class="billingSameAsShipping ? 'bg-red-50' : 'bg-white'"
              >
                <div class="w-4 h-4 rounded-full border flex items-center justify-center" :class="billingSameAsShipping ? 'border-[#FB2C36]' : 'border-gray-300'">
                  <div v-if="billingSameAsShipping" class="w-2 h-2 rounded-full bg-[#FB2C36]"></div>
                </div>
                <span class="text-sm font-bold text-gray-900">Same as shipping address</span>
              </div>
              <div
                @click="billingSameAsShipping = false"
                class="p-4 cursor-pointer transition flex items-center gap-3"
                :class="!billingSameAsShipping ? 'bg-red-50' : 'bg-white'"
              >
                <div class="w-4 h-4 rounded-full border flex items-center justify-center" :class="!billingSameAsShipping ? 'border-[#FB2C36]' : 'border-gray-300'">
                  <div v-if="!billingSameAsShipping" class="w-2 h-2 rounded-full bg-[#FB2C36]"></div>
                </div>
                <span class="text-sm font-bold text-gray-900">Use a different billing address</span>
              </div>
            </div>
          </div>
          <!-- Final Pay Button -->
          <div class="mt-8">
            <button class="w-full bg-[#FB2C36] hover:bg-[#e0252e] text-white font-bold py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {{ paymentMethod === 'paypal' ? 'Pay with PayPal' : 'Pay now' }}
            </button>
            <div class="mt-6 pt-6 border-t border-gray-100">
              <a href="#" class="text-xs text-[#FB2C36] hover:underline">Privacy policy</a>
            </div>
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
            <div v-for="item in cartStore.items" :key="item.id" class="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <div class="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg relative">
                <img :src="getImageUrl(item.image)" :alt="item.name" class="max-h-full object-contain" />
                <span class="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">{{ item.quantity }}</span>
              </div>
              <div class="flex-1 flex flex-col py-1">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-900 text-sm mb-1">{{ item.name }}</h3>
                    <p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                      <span v-if="item.size">{{ item.size }}</span>
                      <span v-if="item.size && item.color"> / </span>
                      <span v-if="item.color">{{ item.color }}</span>
                    </p>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-gray-900 text-sm">${{ (item.price * item.quantity).toFixed(2) }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="cartStore.items.length === 0" class="text-center text-gray-500 py-8 text-sm">
              Your cart is empty.
            </div>
          </div>
          <!-- Discount code input -->
          <div class="flex gap-3 mb-8">
            <input type="text" placeholder="Discount code" class="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-gray-300" />
            <button class="bg-gray-100 text-gray-500 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition">Apply</button>
          </div>
          <!-- Totals -->
          <div class="space-y-4 mb-6 pt-4 border-t border-gray-100">
            <div class="flex justify-between text-sm text-gray-600">
              <span>Subtotal · {{ cartStore.totalItems }} items</span>
              <span class="font-bold text-gray-900">${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span class="font-bold text-gray-900">$34.00</span>
            </div>
          </div>
          <div class="flex justify-between items-center pt-6 border-t border-gray-200 mt-2">
            <div class="flex flex-col">
              <span class="text-xl font-bold text-gray-900">Total</span>
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-[10px] text-gray-400 font-bold">USD</span>
              <span class="text-2xl font-bold text-gray-900">${{ (cartStore.totalPrice + 34).toFixed(2) }}</span>
            </div>
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
import { ref } from 'vue'
const cartStore = useCartStore()
const paymentMethod = ref('card')
const billingSameAsShipping = ref(true)
const getImageUrl = (path) => {
  if (!path) return ""
  return path.startsWith('/') ? path : new URL(path, import.meta.url).href
}
</script>
