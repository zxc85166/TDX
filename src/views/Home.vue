<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<template>
  <div>
    <div class="h-screen w-screen bg-Home bg-cover">
      <div class="bg-white opacity-50 w-[1200px] h-[200px] rounded-[10px]">123</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-Home {
  background-image: url("@/assets/images/home.png");
}
</style>