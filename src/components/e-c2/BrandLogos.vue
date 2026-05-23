<template>
  <section class="container mx-auto px-4 py-8 mb-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Brand</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-[#FB2C36]">All Brand</a>
    </div>

    <div class="flex flex-wrap justify-between gap-6 md:gap-12  transition-all duration-500">
      <div v-for="brand in brands" :key="brand.name"
        class="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:shadow-lg hover:scale-110 transition cursor-pointer overflow-hidden p-2">
        <img :src="brand.img" :alt="brand.name" class="w-full h-full object-contain" />
      </div>
    </div>
  </section>
</template>

<script setup>
const img1 = '/assets/imgs/logos/image (6).png'
const img2 = '/assets/imgs/logos/image (7).png'
const img3 = '/assets/imgs/logos/image (8).png'
const img4 = '/assets/imgs/logos/image (9).png'
const img5 = '/assets/imgs/logos/image (10).png'
const img6 = '/assets/imgs/logos/image (11).png'
const img7 = '/assets/imgs/logos/image (12).png'
const img8 = '/assets/imgs/logos/image (13).png'

const brands = [
  { name: 'REVLON', img: img1 },
  { name: 'GARNIER', img: img2 },
  { name: 'LOREAL', img: img3 },
  { name: 'Levis', img: img4 },
  { name: 'D&G', img: img5 },
  { name: 'H&M', img: img6 },
  { name: 'sunsilk', img: img7 },
  { name: 'UA', img: img8 },
]
</script>
