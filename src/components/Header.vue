<script setup>

</script>
<template>
    <div class="grid grid-rows-2 md:grid-rows-1 grid-flow-col md:justify-between md:mx-[5%]">
        <div class="flex items-center justify-center gap-3 px-2 mx-2">
            <div>
                <img class="w-[40px]" src="@/assets/images/logo.png" />
            </div>
            <div>
                <span class="text-lg font-bold text-blue-main">Travel Taiwan</span>
            </div>
        </div>
        <div class="flex items-center justify-center px-2 mx-2">
            <router-link to="/" class="btn btn-ghost btn-lg rounded-btn">首頁</router-link>
            <router-link to="Guide" class="btn btn-ghost btn-lg rounded-btn">景點導覽</router-link>
            <router-link to="/" class="btn btn-ghost btn-lg rounded-btn">觀光活動</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bg-logo {
    background-image: url("@/assets/images/logo.png");
}
</style>