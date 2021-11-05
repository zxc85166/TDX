<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="bg-gray-50">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <!-- 目錄與簡介 -->
      <div class="grid grid-cols-1 md:grid-cols-2 place-content-between">
        <!-- 目錄 -->
        <div class="border border-gray p-4">
          <span class="font-semibold text-xl">{{ t('home.Directory.directory') }}</span>
          <div class="pt-3 flex flex-col">
            <span>
              <a href="#s-1">1</a>
              . {{ t('home.Directory.summary') }}
            </span>
            <span>
              <a href="#s-2">2</a>
              . {{ t('home.Directory.member') }}
            </span>
            <span class="pl-6">
              <a href="#s-2.1">2.1</a>
              . {{ t('home.Directory.CP') }}
            </span>
            <span>
              <a href="#s-3">3</a>
              . {{ t('home.Directory.appearance') }}
            </span>
            <span>
              <a href="#s-4">4</a>
              . {{ t('home.Directory.world View') }}
            </span>
            <span>
              <a href="#s-5">5</a>
              . {{ t('home.Directory.album List') }}
            </span>
            <span>
              <a href="#s-6">6</a>
              . {{ t('home.Directory.MV') }}
            </span>
            <span>
              <a href="#s-7">7</a>
              . {{ t('home.Directory.activity') }}
            </span>
            <span class="pl-6">
              <a href="#s-7.1">7.1</a>
              . V LIVE
            </span>
            <span class="pl-6">
              <a href="#s-7.2">7.2</a>
              . {{ t('home.Directory.advertise') }}
            </span>
            <span class="pl-12">
              <a href="#s-7.2.1">7.2.1</a>
              {{ t('home.Directory.ads') }}
            </span>
            <span>
              <a href="#s-8">8</a>
              . {{ t('home.Directory.award Experience') }}
            </span>
            <span class="pl-6">
              <a href="#s-8.1">8.1</a>
              . {{ t('home.Directory.awards Ceremony') }}
            </span>
            <span>
              <a href="#s-9">9</a>
              . {{ t('home.Directory.fan') }}
            </span>
            <span>
              <a href="#s-10">10</a>
              . {{ t('home.Directory.support') }}
            </span>
            <span>
              <a href="#s-11">11</a>
              . {{ t('home.Directory.chat') }}
            </span>
          </div>
        </div>
        <!-- 簡介 -->
        <div class="grid grid-flow-row border-2 border-blue-100 divide-y">
          <div class="text-white font-bold bg-blue-100 text-center">
            <div class="my-2">
              <p>이수진</p>
              <p>LEE SOO JIN</p>
            </div>
          </div>
          <!-- 照片 -->
          <div class="grid gap-2 grid-flow-col">
            <div class="col-span-2 grid place-items-center">
              <img
                src="https://w.namu.la/s/37c77f7672813b8d9b470b54825673af5dbd950b05c4b777dfb3f1e9fd4ef47648bdcc55cbc5e6d553dc15590371696a7e8f6e315ab1428ba51b7bd1549f4b008d3c28d97ba8cdec1177eb785ef484336250b98b0a41611079da017fa480713b443aaf7237630b2a31445a420d7b22bd"
                class="w-full"
              />
            </div>
          </div>
          <!-- 資訊 -->
          <div class="grid grid-cols-3 grid-flow-col grid-flow-row text-center">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-2 grid place-items-center">
              <div class="pl-2 text-blue-100">
                <p>2020년 6월 30일</p>
                <p>미니 1집 We are</p>
                <p>데뷔일로부터 +491일째</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-2 grid place-items-center">
              <p class="pl-2 text-blue-100">댄스, 퓨처 베이스, R&B</p>
            </div>
          </div>
          <div class="grid grid-cols-3 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-2 grid place-items-center">
              <span class="pl-2">
                <router-link to="Soojin" class="no-underline hover:underline">이수진</router-link>
              </span>
            </div>
          </div>
          <div class="grid grid-cols-3 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-2 grid place-items-center">
              <img
                class="w-1/4"
                src="https://w.namu.la/s/7d36306a2571e6b24e97b8783de7f86cd83d69df44e5eb9020eaed48376b6432eb44dae00b8fc73890f33e6acc51f12e068a005a258ddb6324c6fb507adf1c47908cb1b349be3325c1e626962f9516bfb6e28634e6435f7d02fd60ed3832fcac"
              />
            </div>
          </div>
          <div class="grid grid-cols-3 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-2 grid place-items-center">
              <img
                class="w-1/4"
                src="https://w.namu.la/s/f5e46b377a4d14462bb42dab69de0836a68482277ccfe747f4e15c2db3ef4c5c6f78cabebce800da869595cacd330243eb9adb95402ebc9d6619bb3170917941851402affa281d2a47597998d58274c1998472bf1d3b79679fd8aad7004cd6e6b0dd106a1ab4a0b61bafac62a08700ad"
              />
            </div>
          </div>
          <div class="grid grid-cols-3 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-2 grid place-items-center">
              <img
                class="w-1/4"
                src="https://w.namu.la/s/1ea4f8c5687089f13cad14958cbdc4088ec9d500b4c0048554c3f260a3ed48a49b6346391594ecf152b074830d195541c29d654c8be0130d4156e0c2276d6732ecab057b3776312b4bf4bd00e9843d35640237e67b439653b090ee8b069cfb29daff3d9528a7b6fbfafa5d96e31855c1"
              />
            </div>
          </div>
          <div class="grid grid-cols-3 grid-flow-col grid-flow-row">
            <div class="col-span-1 bg-blue-100 text-white font-bold grid place-items-center">데뷔</div>
            <div class="col-span-2 flex items-center justify-center gap-3">
              <img
                class="w-5"
                src="https://w.namu.la/s/913173d9078c65ab468fc0584e1f3a16b5ef767d17e370285caa47913fae652bd9c3da90c997e8e85d353d1ca53e2c816ce616a49efb77fd06c2293d9f27f87b8b4b5fc1a86214cd25b209039a98b3431cf54722cb12601aeb1f634969d780917d6c30f7fba8b6b7802a41dbcc48bcf8"
              />
              <img
                class="w-5"
                src="https://w.namu.la/s/eef6347d4d73181f644798e66f41e8d401e6456cb6900dc18e2adea3063786d6899111f5402ce000614fd34a4f33f74bc100a3715644e98a3a16d523cc063882faa2815d12144595818f5dfa3bf59825f5d1fce36bf19be62e433998a3e80bf88171602573ed007c1297ae14e7ecb564"
              />
              <img
                class="w-5"
                src="https://w.namu.la/s/475da918f355850479ae4c0703cf4a70e2911a4df7b96f86396a2e30f5cbd3ff29b1b4fed7cbcc2854a27ddff6258cabb8c720321c5bbdac6e0357fbb8628797a8d5876dfbd70e4880c4cd4ba2120176d06e275ec0e0ba90d37bfd7c7a13c37a2016e9f92b272d2bb8bdf1d38bd7271e"
              />
              <img
                class="w-5"
                src="https://w.namu.la/s/0234a4424011b37bad371ec569978fc3fcbea877b1cdff4672890639045092ffe895ff91f17f48e847fe3664866675da272775b5939b11fae30ee70c594f4d637edcf4218a2a9de38a7d0fe1fd1b1c3f0cccb6c62a8e3c2b461088c44e4a1a103ab4eb18758182f35dc419ed3932eceb"
              />
              <img
                class="w-5"
                src="https://ww.namu.la/s/730c5c72e8e073034dd120d96b3e5122c702771b56ca31d3d4d6f18546a1f2a5bd6f145858e7660b5e2c52e55c051b95436ed2b9a3418d7057dde447b93e274620227400ed831e8a91aa0de1d329131526cf09195b8d474ab49d467c65a1df9656590d965758f2f5b4c271b3d817379f"
              />
              <img
                class="w-5"
                src="https://ww.namu.la/s/45d577dc77bdacb6c18a19d646e551b8900e5bf84e2b9ff3f35a8e93d08b946e4fbd019fa569ce55708c48bc0d454ad44e7438ce8eb71e8e93d70c47a17f102ac8dd29549a43a62d60096a91475a1af4e1c6017bda94c36253f13fbe6ca851c2afbf41ce6a8e79d6c3d6fc423995738f"
              />
              <img
                class="w-5"
                src="https://w.namu.la/s/3f7fe28881a1a628116c1d2285451f63131d46016d9816f3a977919696834eaee1bfaeacb35084dd8983eae09f554e57d4b0ba0b63fdd831a72fdb63224fdc7c6756963245b92e54beec37b34873488ea2bddabdc38573048aca2644fa4e85de46ec6830a34e7094e9755fb3dc35b55d"
              />
              <img
                class="w-5"
                src="https://w.namu.la/s/f9b53f68eade2129c1e1001cdabb7c3829b46440e3ce6d749951b2dc64fd11a23a6d94eb9283baced38768fb2dee261306818d7cf27be1ad525df960f6ad65cb0bdbdfb2a548a06369c14282c4b657eec9a60290543985c0e96036d7aabaf0c02032979bf658f38f40d3c14652279e7f"
              />
            </div>
          </div>
          <!-- 資訊 -->
        </div>
      </div>
    </div>
  </div>
</template>
