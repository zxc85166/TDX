<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<template>
  <div class="w-screen bg-Home h-screen bg-cover bg-fixed"></div>
</template>

<style lang="scss" scoped>
.bg-Home {
  background-image: url("@/assets/images/home.png");
}
</style>