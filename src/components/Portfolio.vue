<template>
  <div class="about px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <section v-for="(section, index) in sections" :key="index">
      <h2 class="text-2xl font-bold text-center mb-6">{{ section.title }}</h2>
      <div v-viewer class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div
          v-for="(item, idx) in section.items"
          :key="idx"
          class="relative bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden aspect-w-4 aspect-h-3"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="gallery-img w-full h-full object-cover select-none"
            @contextmenu.prevent
            draggable="false"
          />
          <div class="absolute inset-0 z-10 opacity-0 hover:opacity-10 bg-black transition-opacity duration-300"></div>
          <div v-if="item.link" class="p-4 text-center">
            <a :href="item.link" target="_blank" class="text-blue-700 hover:underline">
              {{ item.alt }} 👆
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
// 所有圖片資料統一管理
const sections = [
  {
    title: 'Figma 作品',
    items: [
      {
        src: new URL('../assets/images/1.png', import.meta.url).href,
        alt: '玻璃擬態頁設計',
        link: 'https://www.figma.com/community/file/1296324320137825490',
      },
      {
        src: new URL('../assets/images/2.png', import.meta.url).href,
        alt: 'ART 擬態頁設計',
        link: 'https://www.figma.com/community/file/1296481888531950151/art',
      },
    ],
  },
  {
    title: '海報製作',
    items: [
      { src: new URL('../assets/images/3.png', import.meta.url).href, alt: '濟洲島' },
      { src: new URL('../assets/images/5.png', import.meta.url).href, alt: '靠枕海報' },
      { src: new URL('../assets/images/6.png', import.meta.url).href, alt: '靠枕海報0520' },
      { src: new URL('../assets/images/7.png', import.meta.url).href, alt: '懷舊時光' },
      { src: new URL('../assets/images/19.png', import.meta.url).href, alt: 'grain' },
    ],
  },
  {
    title: 'Banner 製作',
    items: [
      { src: new URL('../assets/images/8.png', import.meta.url).href, alt: '萬聖節(櫻花)' },
      { src: new URL('../assets/images/9.png', import.meta.url).href, alt: '萬聖節(家具)' },
      { src: new URL('../assets/images/10.png', import.meta.url).href, alt: '茭白筍' },
    ],
  },
  {
    title: '小作品',
    items: [
      { src: new URL('../assets/images/11.png', import.meta.url).href, alt: '郵戳章信封' },
      { src: new URL('../assets/images/12.png', import.meta.url).href, alt: '花好月圓' },
      { src: new URL('../assets/images/13.png', import.meta.url).href, alt: '名片' },
    ],
  },
  {
    title: '插畫作品',
    items: [
      { src: new URL('../assets/images/14.jpg', import.meta.url).href, alt: '木馬奇遇記' },
      { src: new URL('../assets/images/15.png', import.meta.url).href, alt: '元宵節' },
      { src: new URL('../assets/images/16.png', import.meta.url).href, alt: '瓜瓜樂夏天' },
      { src: new URL('../assets/images/17.png', import.meta.url).href, alt: '紅鬼藍鬼' },
      { src: new URL('../assets/images/18.png', import.meta.url).href, alt: '星空' },
    ],
  },
]
</script>
<style scoped>
.gallery-img {
  width: 600px;
  height: auto;
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

@media (max-width: 640px){
  .gallery-img {
    width: 100%;
    height: auto;
  }
}
</style>
