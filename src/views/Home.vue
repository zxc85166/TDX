<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<template>
  <div>
    <div class="h-screen w-screen bg-Home bg-cover bg-fixed">
      <div class="h-screen w-screen">
        <div class="md:px-[232px] md:py-[140px]">123</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-Home {
  background-image: url("@/assets/images/home.png");
}
</style>