<script setup>
import { useI18n } from 'vue-i18n'
import { LocationMarkerIcon, PhotographIcon } from '@heroicons/vue/solid'
import { ClockIcon, XIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
const { t } = useI18n();

const people = [
  { id: 1, name: '所有類別', unavailable: false },
  { id: 2, name: '類別1', unavailable: false },
  { id: 3, name: '類別2', unavailable: false },
  { id: 4, name: '類別3', unavailable: false },
  { id: 5, name: '類別4', unavailable: false },
]
const selectedPerson = ref(people[0])

const cities = [
  { id: 1, name: '所有縣市', unavailable: false },
  { id: 2, name: '高雄', unavailable: false },
  { id: 3, name: '台北', unavailable: false },
  { id: 4, name: '台中', unavailable: false },
  { id: 5, name: '嘉義', unavailable: false },
]
const selectedCitie = ref(cities[0])

const bgg = "https://images.pexels.com/photos/3977262/pexels-photo-3977262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
</script>

<template>
  <div class="grid place-items-center bg-Home h-[599px] bg-cover bg-center bg-fixed">
    <div class="grid place-items-center gap-6">
      <div>
        <span
          class="text-white font-bold text-xl md:text-5xl filter drop-shadow-4xl italic"
        >Welcome to Travel Taiwan</span>
      </div>
      <div class="flex gap-[19px]">
        <!-- 類別 -->
        <div class="dropdown dropdown-hover">
          <Listbox v-model="selectedPerson">
            <ListboxButton>
              <div
                tabindex="0"
                class="btn w-[107px] md:w-[191px] bg-base-100 hover:bg-base-100 text-gray-content border-0 text-sm md:text-base"
              >
                <span class="mx-auto">{{ selectedPerson.name }}</span>
                <span>▼</span>
              </div>
            </ListboxButton>
            <ListboxOptions
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[107px] md:w-[191px] top-[40px]"
            >
              <ListboxOption
                v-for="person in people"
                :key="person"
                :value="person"
                :disabled="person.unavailable"
              >
                <li class="hover:bg-blue-main rounded-lg">
                  <a>
                    <span class="text-gray-content font-semibold mx-auto">{{ person.name }}</span>
                  </a>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
        </div>
        <!-- 所有縣市 -->
        <div class="dropdown dropdown-hover">
          <Listbox v-model="selectedCitie">
            <ListboxButton>
              <div
                tabindex="0"
                class="btn w-[107px] md:w-[191px] bg-base-100 hover:bg-base-100 text-gray-content border-0 text-sm md:text-base"
              >
                <span class="mx-auto">{{ selectedCitie.name }}</span>
                <span>▼</span>
              </div>
            </ListboxButton>
            <ListboxOptions
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[107px] md:w-[191px] top-[40px]"
            >
              <ListboxOption
                v-for="citie in cities"
                :key="citie"
                :value="citie"
                :disabled="citie.unavailable"
              >
                <li class="hover:bg-blue-main rounded-lg">
                  <a>
                    <p class="text-gray-content font-semibold mx-auto">{{ citie.name }}</p>
                  </a>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
        </div>
        <!-- 搜尋按鈕 -->
        <div class="pt-1">
          <a href="#">
            <img src="@/assets/images/search.png" alt="搜尋按鈕" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- api -->
  <div class="md:mx-20 mx-9 font-black">
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
              <ClockIcon class="md:h-5 md:w-5 h-4 w-4 mx-auto" />
              <span class="text-gray-content text-sm">全天候開放</span>
            </div>
            <div class="flex items-center">
              <LocationMarkerIcon class="h-5 w-5 text-blue-main" />
              <p class="text-gray-content ml-2">臺東縣951綠島鄉</p>
            </div>
            <!-- modal  -->
            <div class="justify-center card-actions">
              <label
                for="my-modal-2"
                class="ring-4 ring-blue-main hover:bg-blue-main hover:text-white rounded text-blue-main w-2/3 modal-button text-center cursor-pointer"
              >了解更多</label>
              <input type="checkbox" id="my-modal-2" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box max-w-3xl rounded-lg">
                  <div class="modal-action mt-0">
                    <label
                      for="my-modal-2"
                      class="bg-gray-500 hover:bg-gray-400 rounded h-8 w-8 grid place-items-center cursor-pointer"
                    >
                      <XIcon class="h-5 w-5 text-white" />
                    </label>
                  </div>
                  <!-- modal內容 -->
                  <div>
                    <h1 class="text-2xl">紫坪</h1>
                    <div class="flex items-center py-5">
                      <LocationMarkerIcon class="h-5 w-5 text-blue-main" />
                      <p class="text-gray-content ml-2">臺東縣951綠島鄉溫泉路256號</p>
                    </div>
                    <p
                      class="text-gray-content"
                    >紫坪位在綠島最南方，從附近的步道，可通往海岸邊的潟湖。此處是由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。</p>
                    <div class="grid justify-end pb-5 pt-6 md:pt-0">
                      <div class="items-center flex cursor-pointer">
                        <PhotographIcon class="h-5 w-5 text-blue-main" />
                        <p class="text-blue-main ml-2">相片(12)></p>
                      </div>
                    </div>
                    <!-- 圖片 -->
                    <div class="grid grid-rows-2 grid-cols-3 gap-4">
                      <div class="row-span-2 col-span-3 md:col-span-2">
                        <img
                          src="https://images.pexels.com/photos/10069550/pexels-photo-10069550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                      </div>
                      <div class="row-span-1 col-span-1 hidden md:grid">
                        <img
                          src="https://images.pexels.com/photos/10069550/pexels-photo-10069550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                      </div>
                      <div class="row-span-1 col-span-1 hidden md:grid">
                        <img
                          src="https://images.pexels.com/photos/10069550/pexels-photo-10069550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                      </div>
                    </div>
                    <!-- 電話等 -->
                    <div
                      class="grid grid-cols-2 md:grid-cols-4 grid-flow-row place-items-center md:place-items-start py-5 gap-y-5"
                    >
                      <div class="flex">
                        <PhotographIcon class="h-5 w-5 text-blue-main" />
                        <p class="text-blue-main ml-2">全天候開放</p>
                      </div>
                      <div class="flex">
                        <PhotographIcon class="h-5 w-5 text-blue-main" />
                        <p class="text-blue-main ml-2">免費入場</p>
                      </div>
                      <div class="flex">
                        <PhotographIcon class="h-5 w-5 text-blue-main" />
                        <p class="text-blue-main ml-2">02-1154-7789</p>
                      </div>
                      <div class="flex">
                        <PhotographIcon class="h-5 w-5 text-blue-main" />
                        <p class="text-blue-main ml-2">自然風景類</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        <p>邀請您一同來共襄盛舉！</p>
      </div>
      <div class="flex overflow-auto no-scrollbar">
        <div v-for="s in 4">
          <div class="card shadow-xl w-[256px] h-[328px] mr-20">
            <img class="bg-center" :src="bgg" />
          </div>
          <div class="text-center w-[256px] mt-7 text-xl text-black-main font-bold">年度活動</div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer img -->
  <div class="bg-footer h-[332px] w-full bg-cover grid place-items-center text-center">
    <span class="text-white font-bold text-xl md:text-3xl filter drop-shadow-3xl">
      <p>“To travel is to live”</p>
      <br />
      <p>– Hans Christian Anderson-</p>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.bg-Home {
  background-image: url("@/assets/images/home.png");
}
.bg-footer {
  background-image: url("@/assets/images/footer.png");
}
</style>