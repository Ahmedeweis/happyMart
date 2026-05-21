import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    isOpen: false,
    items: [],
  }),
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
  },
  actions: {
    toggleCart() {
      this.isOpen = !this.isOpen
    },
    closeCart() {
      this.isOpen = false
    },
    openCart() {
      this.isOpen = true
    },
    addToCart(product) {
      // Create a unique ID for the cart item based on its product ID and selected options
      const cartItemId = `${product.id}-${product.size || ''}-${product.color || ''}`
      
      const existingItem = this.items.find(item => item.cartItemId === cartItemId)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, cartItemId, quantity: 1 })
      }
      this.openCart()
    },
    removeFromCart(cartItemId) {
      this.items = this.items.filter(item => item.cartItemId !== cartItemId)
    },
    incrementQuantity(cartItemId) {
      const item = this.items.find(item => item.cartItemId === cartItemId)
      if (item) {
        item.quantity++
      }
    },
    decrementQuantity(cartItemId) {
      const item = this.items.find(item => item.cartItemId === cartItemId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeFromCart(cartItemId)
        }
      }
    }
  }
})
