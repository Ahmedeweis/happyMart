<template>
  <div class="bg-[#FBF7F6]">
    <section class="container mx-auto px-4 py-6 ">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Main Slider -->
        <div class="lg:col-span-8 relative  rounded-3xl p-3 overflow-hidden flex flex-col justify-center">


          <!-- Shoes Image Composition -->

          <img :src="heroImg" alt="New Arrival" class="object-contain drop-shadow-2xl transform scale-110" />


          <!-- Decorative Elements -->
          <div class="absolute top-4 left-4 text-green-400 text-2xl">~</div>
          <div class="absolute bottom-4 right-1/3 text-pink-400 text-xl">✦</div>
        </div>

        <!-- Right Side Cards -->
        <div class="lg:col-span-4 flex flex-col">
          <!-- Exclusive Collection -->
          <div class="bg-[#FFFFFF] rounded-3xl p-5 mb-5 relative overflow-hidden h-full min-h-[200px]">
            <img src="/assets/imgs/newarrivalrighttop.png" class=" object-contain" />
          </div>

          <!-- Summer Collections -->
          <div class="bg-amber-400 rounded-3xl relative overflow-hidden h-full min-h-[200px] text-gray-900">
            <img src="/assets/imgs/newarrivalrightbottom.png" class=" object-contain" />
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script setup>
const heroImg = '/assets/imgs/newarrivalleft.png'
</script>

<style scoped>
.font-handwriting {
  font-family: 'Brush Script MT', cursive;
}
</style>
