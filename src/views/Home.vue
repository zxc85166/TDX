<script setup>
import { useI18n } from 'vue-i18n'
import { LocationMarkerIcon } from '@heroicons/vue/solid'
import { ClockIcon } from '@heroicons/vue/outline'
const { t } = useI18n();
const bgg = "https://images.pexels.com/photos/3977262/pexels-photo-3977262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
</script>

<template>
  <div class="grid place-items-center bg-Home h-[599px] bg-cover bg-center bg-fixed">
    <div class="grid place-items-center gap-6">
      <div>
        <span
          class="text-white font-bold text-xl md:text-5xl filter drop-shadow-lg italic"
        >Welcome to Travel Taiwan</span>
      </div>
      <div class="flex gap-[19px]">
        <!-- 類別 -->
        <div class="dropdown dropdown-hover">
          <div
            tabindex="0"
            class="btn w-[107px] md:w-[191px] bg-base-100 hover:bg-base-100 text-gray-content border-0"
          >
            <span class="mx-auto">類別</span>
            <span>▼</span>
          </div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[107px] md:w-[191px] top-[40px]"
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
            class="btn w-[175px] md:w-[297px] bg-base-100 hover:bg-base-100 text-gray-content border-0"
          >
            <span class="mx-auto">所有縣市</span>
            <span>▼</span>
          </div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[175px] md:w-[297px] top-[40px]"
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
  <!-- api -->
  <div class="mx-20 font-black">
    <!-- 熱門景點 -->
    <div class="my-28">
      <div class="text-gray-content_light mb-12 ml-5">
        <span class="text-blue-main text-3xl flex mb-6">熱門景點</span>
        <p>台灣的各個美景，都美不勝收。</p>
        <p>等你一同來發現這座寶島的奧妙！</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-y-16">
        <div v-for="s in 8" class="card bordered shadow-lg">
          <figure>
            <img
              src="https://images.pexels.com/photos/10069550/pexels-photo-10069550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </figure>
          <div class="card-body p-5">
            <div class="flex items-center">
              <h2 class="card-title">正濱漁港懷舊碼頭</h2>
              <ClockIcon class="h-5 w-5 text-blue-main mx-auto" />
              <span class="text-gray-content text-sm">全天候開放</span>
            </div>
            <div class="flex items-center">
              <LocationMarkerIcon class="h-5 w-5 text-blue-main" />
              <p class="text-gray-content ml-2">臺東縣951綠島鄉</p>
            </div>
            <div class="justify-center card-actions">
              <button class="ring-4 ring-blue-main rounded text-blue-main font-black w-2/3">了解更多</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 活動類別 -->
    <div class="mb-28">
      <div class="text-gray-content_light mb-12 ml-5">
        <span class="text-blue-main text-3xl flex mb-6">活動類別</span>
        <p>各種不同的活動內容</p>
        <p>邀請您一銅來共襄盛舉！</p>
      </div>
      <div class="grid grid-cols-4 justify-between gap-8">
        <div v-for="s in 4">
          <div class="card shadow-xl w-[256px] h-[328px]">
            <img class="bg-center" :src="bgg" />
          </div>
          <div class="text-center w-[256px] mt-7 text-xl text-black-main font-bold">年度活動</div>
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