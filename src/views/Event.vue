<script setup>
import { useI18n } from "vue-i18n";
import axios from "axios";
import { LocationMarkerIcon, PhotographIcon } from "@heroicons/vue/solid";
import { ClockIcon } from "@heroicons/vue/outline";
import jsSHA from "jssha";
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const { t } = useI18n();
//顯示開關
const noData = ref(true); //現有無資料
const link = (e) => { //在vue中打開外部網站連結
  window.open(e);
}
// api參數儲存區
const pictureURL = ref([]);
//
const types = [
  { id: 0, name: "所有活動", value: "" },
  { id: 1, name: "年度活動", value: "年度活動" },
  { id: 2, name: "藝文活動", value: "藝文活動" },
  { id: 3, name: "節慶活動", value: "節慶活動" },
  { id: 4, name: "自行車活動", value: "自行車活動" },
];
const selectedType = ref(types[0]);

const cities = [
  { id: 1, name: "所有縣市", value: "" },
  { id: 2, name: "臺北市", value: "Taipei" },
  { id: 3, name: "新北市", value: "NewTaipei" },
  { id: 4, name: "桃園市", value: "Taoyuan" },
  { id: 5, name: "臺中市", value: "Taichung" },
  { id: 6, name: "臺南市", value: "Tainan" },
  { id: 7, name: "高雄市", value: "Kaohsiung" },
  { id: 8, name: "基隆市", value: "Keelung" },
  { id: 9, name: "新竹市", value: "Hsinchu" },
  { id: 10, name: "新竹縣", value: "HsinchuCounty" },
  { id: 11, name: "苗栗縣", value: "MiaoliCounty" },
  { id: 12, name: "彰化縣", value: "ChanghuaCounty" },
  { id: 13, name: "南投縣", value: "NantouCounty" },
  { id: 14, name: "雲林縣", value: "YunlinCounty" },
  { id: 15, name: "嘉義縣", value: "ChiayiCounty" },
  { id: 16, name: "嘉義市", value: "Chiayi" },
  { id: 17, name: "屏東縣", value: "PingtungCounty" },
  { id: 18, name: "宜蘭縣", value: "YilanCounty" },
  { id: 19, name: "花蓮縣", value: "HualienCounty" },
  { id: 20, name: "臺東縣", value: "TaitungCounty" },
  { id: 21, name: "金門縣", value: "KinmenCounty" },
  { id: 22, name: "澎湖縣", value: "PenghuCounty" },
  { id: 23, name: "連江縣", value: "LienchiangCounty" },
];
const selectedCity = ref(cities[0]);
//快速請求
const getSpeedQuery = (type) => {
  axios({
    method: "get",
    url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$select=Name%2CAddress%2CCharge%2CPhone%2CPicture%2CDescription%2CWebsiteUrl%2CStartTime%2CEndTime%2CClass1&$filter=contains(Class1%2C'${type}')&$top=12&$format=JSON`,
    headers: GetAuthorizationHeader(),
  })
    .then((res) => {
      const data = res.data;
      pictureURL.value = data;
      if (data.length === 0) {
        alert("查無該條件資料");
        noData.value = true;
      } else {
        noData.value = false;
        document.getElementById("showRes").scrollIntoView({ behavior: "smooth" });
        selectedType.value = types[0];
        selectedCity.value = cities[0];
      }
    })
    .catch((error) => console.log("error", error));
}
// axios
function getAttractions() {
  const city = selectedCity.value.value;
  const type = selectedType.value.value;
  axios({
    method: "get",
    url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${city}?$select=Name%2CAddress%2CCharge%2CPhone%2CPicture%2CDescription%2CWebsiteUrl%2CStartTime%2CEndTime%2CClass1&$filter=contains(Class1%2C'${type}')&$top=12&$format=JSON`,
    headers: GetAuthorizationHeader(),
  })
    .then((res) => {
      const data = res.data;
      pictureURL.value = data;
      for (let index = 0; index < pictureURL.value.length; index++) {
        pictureURL.value[index].visibility = false;
      }
      if (data.length === 0) {
        alert("查無該條件資料");
        noData.value = true;
      } else {
        noData.value = false;
      }
    })
    .catch((error) => console.log("error", error));
}
// API 驗證用
function GetAuthorizationHeader() {
  var AppID = (import.meta.env.VITE_APP_AppID)
  var AppKey = (import.meta.env.VITE_APP_AppKey)
  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return {
    Authorization: Authorization,
    "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/,
  }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
</script>

<template>
  <div class="grid place-items-center bg-event h-[599px] bg-cover bg-center bg-fixed">
    <div class="grid place-items-center gap-6">
      <div>
        <span
          class="text-white font-bold text-xl md:text-5xl filter drop-shadow-4xl italic"
        >Welcome to Travel Taiwan</span>
      </div>
      <div class="flex gap-[19px]">
        <!-- 類別 -->
        <div class="dropdown dropdown-hover">
          <Listbox v-model="selectedType">
            <ListboxButton>
              <div
                tabindex="0"
                class="btn w-[107px] md:w-[191px] bg-base-100 hover:bg-base-100 text-gray-content border-0 text-sm md:text-base"
              >
                <span class="mx-auto">{{ selectedType.name }}</span>
                <span>▼</span>
              </div>
            </ListboxButton>
            <ListboxOptions
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[107px] md:w-[191px] top-[40px]"
            >
              <ListboxOption v-for="types in types" :key="types" :value="types">
                <li class="hover:bg-blue-main rounded-lg">
                  <a>
                    <span class="text-gray-content font-semibold mx-auto">
                      {{
                        types.name
                      }}
                    </span>
                  </a>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
        </div>
        <!-- 所有縣市 -->
        <div class="dropdown dropdown-hover">
          <Listbox v-model="selectedCity">
            <ListboxButton>
              <div
                tabindex="0"
                class="btn w-[107px] md:w-[191px] bg-base-100 hover:bg-base-100 text-gray-content border-0 text-sm md:text-base"
              >
                <span class="mx-auto">{{ selectedCity.name }}</span>
                <span>▼</span>
              </div>
            </ListboxButton>
            <ListboxOptions
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-b-lg w-[107px] md:w-[191px] top-[40px]"
            >
              <ListboxOption v-for="city in cities" :key="city" :value="city">
                <li class="hover:bg-blue-main rounded-lg">
                  <a>
                    <p class="text-gray-content font-semibold mx-auto">{{ city.name }}</p>
                  </a>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
        </div>
        <!-- 搜尋按鈕 -->
        <div class="pt-1" @click.prevent="getAttractions()">
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
    <div id="showRes" class="my-28">
      <div class="text-gray-content_light mb-12 ml-5">
        <span
          class="text-blue-main text-3xl flex mb-6"
        >{{ selectedCity.name }}{{ selectedType.name }}</span>
        <p>台灣的各個美景，都美不勝收。</p>
        <p>等你一同來發現這座寶島的奧妙！</p>
      </div>
      <div v-if="noData">
        <span class="text-blue-main text-3xl flex mb-6">※尚未查詢或無查詢資料※</span>
      </div>

      <!-- cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-y-16">
        <div
          v-for="(picture, index) in pictureURL"
          :key="picture.index"
          class="card bordered shadow-lg max-w-[350px]"
        >
          <div class="h-[184px]">
            <img
              v-if="picture.Picture.PictureUrl1"
              class="object-cover w-full h-full"
              :src="picture.Picture.PictureUrl1"
            />

            <div v-if="!picture.Picture.PictureUrl1" class="grid place-items-center">
              <img class="w-[80px] mt-12" src="@/assets/images/logo.png" />
              <span class="text-lg font-bold text-blue-main mt-3">Travel Taiwan</span>
            </div>
          </div>

          <div class="card-body p-5">
            <div class="grid gap-1">
              <div class="flex">
                <h2 class="card-title">{{ picture.Name }}</h2>
              </div>
              <div class="flex items-center">
                <ClockIcon class="md:h-5 md:w-5 h-4 w-4 mr-2" />
                <span class="text-gray-content text-sm">{{ picture.StartTime }}始</span>
                <span v-if="!picture.StartTime" class="text-gray-content text-sm">查無開始時間資料</span>
              </div>
              <div class="flex items-center">
                <ClockIcon class="md:h-5 md:w-5 h-4 w-4 mr-2" />
                <span class="text-gray-content text-sm">{{ picture.EndTime }}閉</span>
                <span v-if="!picture.EndTime" class="text-gray-content text-sm">查無結束時間資料</span>
              </div>
              <div class="flex items-center pt-2">
                <LocationMarkerIcon class="h-5 w-5 text-blue-main" />
                <p class="text-gray-content ml-2">{{ picture.Address }}</p>
                <p v-if="!picture.Address" class="text-gray-content ml-2">查無地點資料</p>
              </div>
            </div>
            <!-- modal  -->
            <!-- element plus -->
            <div class="flex justify-center pt-4">
              <label
                class="ring-4 ring-blue-main hover:bg-blue-main hover:text-white rounded text-blue-main w-2/3 modal-button text-center cursor-pointer"
                @click="picture.visibility = true"
              >了解更多</label>
            </div>
            <el-dialog v-model="picture.visibility" :title="picture.Name" width="80%">
              <!-- modal內容 -->
              <div class="overflow-y-auto h-full">
                <div class="flex items-center py-5">
                  <LocationMarkerIcon class="h-5 w-5 text-blue-main" />
                  <p class="text-gray-content ml-2">{{ picture.Address }}</p>
                  <p v-if="!picture.Address" class="text-gray-content ml-2">查無地點資料</p>
                </div>
                <p class="text-gray-content">{{ picture.Description }}</p>
                <p v-if="!picture.Description" class="text-gray-content">查無說明</p>
                <div class="grid justify-start pt-6">
                  <div class="items-center flex cursor-pointer">
                    <PhotographIcon class="h-5 w-5 text-blue-main" />
                    <p class="text-blue-main ml-2">相片</p>
                  </div>
                </div>
                <!-- 圖片 -->
                <div class="grid grid-flow-row md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="col-span-1 md:row-span-2 md:col-span-2">
                    <img
                      v-if="picture.Picture.PictureUrl1"
                      class="object-cover w-full h-full"
                      :src="picture.Picture.PictureUrl1"
                    />

                    <div v-if="!picture.Picture.PictureUrl1" class="grid place-items-center">
                      <img class="w-[80px] mt-12" src="@/assets/images/logo.png" />
                      <span class="text-lg font-bold text-blue-main mt-3">Travel Taiwan</span>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <img
                      v-if="picture.Picture.PictureUrl2"
                      class="object-cover w-full h-full"
                      :src="picture.Picture.PictureUrl2"
                    />

                    <div v-if="!picture.Picture.PictureUrl2" class="grid place-items-center">
                      <img class="w-[80px] mt-12" src="@/assets/images/logo.png" />
                      <span class="text-lg font-bold text-blue-main mt-3">Travel Taiwan</span>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <img
                      v-if="picture.Picture.PictureUrl3"
                      class="object-cover w-full h-full"
                      :src="picture.Picture.PictureUrl3"
                    />

                    <div v-if="!picture.Picture.PictureUrl3" class="grid place-items-center">
                      <img class="w-[80px] mt-12" src="@/assets/images/logo.png" />
                      <span class="text-lg font-bold text-blue-main mt-3">Travel Taiwan</span>
                    </div>
                  </div>
                </div>
                <!-- 電話等 -->
                <div
                  class="grid grid-cols-2 md:grid-cols-4 grid-flow-row place-items-center md:place-items-start py-5 gap-y-5"
                >
                  <div class="flex">
                    <PhotographIcon class="h-5 w-5 text-blue-main" />
                    <p v-if="picture.WebsiteUrl" class="text-blue-main ml-2 cursor-pointer">
                      <span class="link-url" @click="link(picture.WebsiteUrl)">官方網站連結</span>
                    </p>
                    <p v-if="!picture.WebsiteUrl" class="text-blue-main ml-2">查無官方網站連結</p>
                  </div>
                  <div class="flex">
                    <PhotographIcon class="h-5 w-5 text-blue-main" />
                    <p class="text-blue-main ml-2">{{ picture.Charge }}</p>
                    <p v-if="!picture.Charge" class="text-blue-main ml-2">查無票價資訊</p>
                  </div>
                  <div class="flex">
                    <PhotographIcon class="h-5 w-5 text-blue-main" />
                    <p class="text-blue-main ml-2">{{ picture.Phone }}</p>
                    <p v-if="!picture.Phone" class="text-blue-main ml-2">查無景點服務電話</p>
                  </div>
                  <div class="flex">
                    <PhotographIcon class="h-5 w-5 text-blue-main" />
                    <p class="text-blue-main ml-2">{{ picture.Class1 }}</p>
                  </div>
                </div>
              </div>
            </el-dialog>
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
      <div class="flex overflow-auto no-scrollbar justify-between">
        <div @click="getSpeedQuery('年度活動')" class="cursor-pointer">
          <div class="card shadow-xl w-[256px] h-[328px] mr-20">
            <img class="object-cover w-full h-full" src="@/assets/images/homeType1.jpg" />
          </div>
          <div class="text-center w-[256px] mt-7 text-xl text-black-main font-bold">年度活動</div>
        </div>
        <div @click="getSpeedQuery('藝文活動')" class="cursor-pointer">
          <div class="card shadow-xl w-[256px] h-[328px] mr-20">
            <img class="object-cover w-full h-full" src="@/assets/images/homeType2.jpg" />
          </div>
          <div class="text-center w-[256px] mt-7 text-xl text-black-main font-bold">藝文活動</div>
        </div>
        <div @click="getSpeedQuery('節慶活動')" class="cursor-pointer">
          <div class="card shadow-xl w-[256px] h-[328px] mr-20">
            <img class="object-cover w-full h-full" src="@/assets/images/homeType3.jpg" />
          </div>
          <div class="text-center w-[256px] mt-7 text-xl text-black-main font-bold">節慶活動</div>
        </div>
        <div @click="getSpeedQuery('其他')" class="cursor-pointer">
          <div class="card shadow-xl w-[256px] h-[328px] mr-20">
            <img class="object-cover w-full h-full" src="@/assets/images/homeType4.jpg" />
          </div>
          <div class="text-center w-[256px] mt-7 text-xl text-black-main font-bold">其他</div>
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
.bg-event {
  background-image: url("@/assets/images/event.png");
}
.bg-footer {
  background-image: url("@/assets/images/footer.png");
}
</style>
