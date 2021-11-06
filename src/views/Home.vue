<script setup>
import { useI18n } from 'vue-i18n'
import { LocationMarkerIcon } from '@heroicons/vue/solid'
import { ClockIcon } from '@heroicons/vue/outline'
const { t } = useI18n();
</script>

<template>
  <div class="grid place-items-center bg-Home h-[599px] bg-cover bg-fixed">
    <div class="grid place-items-center gap-6">
      <div>
        <span
          class="text-white font-bold text-5xl filter drop-shadow-lg italic"
        >Welcome to Travel Taiwan</span>
      </div>
      <div class="flex gap-[19px]">
        <!-- 類別 -->
        <div class="dropdown dropdown-hover">
          <div
            tabindex="0"
            class="btn w-[191px] bg-base-100 hover:bg-base-100 text-gray-content border-0"
          >
            <span class="mx-auto">類別</span>
            <span>▼</span>
          </div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[191px] top-[40px]"
          >
            <li class="hover:bg-blue-main hover:text-white rounded-lg">
              <a>Item 1</a>
            </li>
            <li class="hover:bg-blue-main hover:text-white rounded-lg">
              <a>Item 2</a>
            </li>
            <li class="hover:bg-blue-main hover:text-white rounded-lg">
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <!-- 所有縣市 -->
        <div class="dropdown dropdown-hover">
          <div
            tabindex="0"
            class="btn w-[297px] bg-base-100 hover:bg-base-100 text-gray-content border-0"
          >
            <span class="mx-auto">所有縣市</span>
            <span>▼</span>
          </div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[297px] top-[40px]"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div class="pt-1">
          <a href="#">
            <img src="@/assets/images/search.png" alt="搜尋按鈕" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="my-28 mx-20 font-black">
    <div class="text-gray-content_light mb-12 ml-5">
      <span class="text-blue-main text-3xl flex mb-6">熱門景點</span>
      <p>台灣的各個美景，都美不勝收。</p>
      <p>等你一同來發現這座寶島的奧妙！</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div v-for="s in 8" class="card bordered shadow-lg">
        <figure>
          <img
            src="https://images.pexels.com/photos/10069550/pexels-photo-10069550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </figure>
        <div class="card-body">
          <div class="flex items-center">
            <h2 class="card-title">正濱漁港懷舊碼頭</h2>
            <ClockIcon class="h-5 w-5 text-blue-main" />
            <span class="text-gray-content text-sm">全天候開放</span>
          </div>
          <div class="flex items-center">
            <LocationMarkerIcon class="h-5 w-5 text-blue-main" />
            <p class="text-gray-content ml-2">臺東縣951綠島鄉</p>
          </div>
          <div class="justify-center card-actions">
            <button class="btn btn-secondary">More info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-Home {
  background-image: url("@/assets/images/home.png");
}
</style>