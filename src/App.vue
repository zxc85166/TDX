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
  <div class="fixed right-5 bottom-5 z-50">
    <div class="grid gap-2">
      <div data-tip="切換語言" class="tooltip">
        <i18n />
      </div>
      <div data-tip="回到頂端" class="tooltip tooltip-left">
        <div class="avatar cursor-pointer" @click="scrollToTop">
          <div
            class="mb-8 rounded-full w-12 h-12 md:w-24 md:h-24 ring ring-blue-100 ring-offset-base-100 ring-offset-2"
          >
            <a>
              <img
                src="https://w.namu.la/s/5db369ce38cc9091102630d36b59d132110bf7ff6fd11f8287d7622b0968e20ac5d9b8cb3ad3c95e10783512c7e74aa8a95972b386c21e7722a90400706ab2e540679d262a4fd54fc088020ae34bbc3b4cbaecaa0ab65bc27b57522b1ecc29e9c2731c3ca93ba9540efb31ea72c95e25"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main>
    <Header />
    <router-view />
    <Footer />
  </main>
</template>
<style lang="scss">
.router-link-exact-active {
  color: #4e5eac;
}
</style>
