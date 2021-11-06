<script setup>

</script>
<template>
    <div class="grid grid-rows-2 md:grid-rows-1 grid-flow-col justify-between mx-[5%]">
        <div class="flex items-center gap-3 px-2 mx-2">
            <div>
                <img class="w-[40px]" src="@/assets/images/logo.png" />
            </div>
            <div>
                <span class="text-lg font-bold text-blue-main">Travel Taiwan</span>
            </div>
        </div>
        <div class="px-2 mx-2">
            <div class="items-stretch">
                <a class="btn btn-ghost btn-lg rounded-btn">首頁</a>
                <a class="btn btn-ghost btn-lg rounded-btn">景點導覽</a>
                <a class="btn btn-ghost btn-lg rounded-btn">觀光活動</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bg-logo {
    background-image: url("@/assets/images/logo.png");
}
</style>