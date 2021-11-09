<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import i18n from '@/components/i18n.vue'

const { t } = useI18n()
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <!-- Gotop -->
  <div class="fixed right-5 bottom-20 z-50 drop-shadow-lg">
    <div class="grid gap-2">
      <!-- <div data-tip="切換語言" class="tooltip">
        <i18n />
      </div>-->
      <div data-tip="回到頂端" class="tooltip tooltip-left">
        <div
          class="rounded-full bg-blue-main h-11 w-11 text-white cursor-pointer flex items-center justify-center"
          @click="scrollToTop"
        >▲</div>
      </div>
    </div>
  </div>
  <Header />
  <router-view />
  <Footer />
</template>
<style lang="scss">
.router-link-exact-active {
  color: #08a6bb;
}
</style>
