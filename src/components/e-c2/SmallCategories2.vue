<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Select Categories</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">Show All</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-purple-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
        <img :src="img1" class="w-16 h-16 object-cover rounded-lg" />
        <span class="font-medium text-gray-800 text-sm">Self-care</span>
      </div>
      <div class="bg-pink-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
        <img :src="img2" class="w-16 h-16 object-cover rounded-lg" />
        <span class="font-medium text-gray-800 text-sm">Gift Ideas</span>
      </div>
      <div class="bg-orange-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
        <img :src="img3" class="w-16 h-16 object-cover rounded-lg" />
        <span class="font-medium text-gray-800 text-sm">Shoe</span>
      </div>
      <div class="bg-teal-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
        <img :src="img4" class="w-16 h-16 object-cover rounded-lg" />
        <span class="font-medium text-gray-800 text-sm">Outdoor & Garden</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const img1 = '/assets/imgs/afrerweeklyoffer/1.png'
const img2 = '/assets/imgs/afrerweeklyoffer/2.png'
const img3 = '/assets/imgs/afrerweeklyoffer/3.png'
const img4 = '/assets/imgs/afrerweeklyoffer/4.png'
</script>
