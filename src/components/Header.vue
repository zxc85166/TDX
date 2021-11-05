<script setup>

</script>
<template>
    <div class="navbar mb-2 text-neutral-content absolute w-full">
        <div class="flex-1 pl-[78px]">
            <img class="w-[150px]" src="@/assets/images/logo.png" />
        </div>
        <div class="flex-1">
            <div class="items-stretch hidden md:flex">
                <a class="btn btn-ghost btn-lg rounded-btn text-2xl">旅遊景點</a>
                <a class="btn btn-ghost btn-lg rounded-btn text-2xl">推薦住宿</a>
                <a class="btn btn-ghost btn-lg rounded-btn text-2xl">美食饗宴</a>
            </div>
        </div>
        <div class="flex-none pr-[50px]">
            <button class="btn btn-square btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-12 h-12 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </div>
        <div class="flex-none pr-[81px]">
            <button class="btn btn-square btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-12 h-12 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bg-logo {
    background-image: url("@/assets/images/logo.png");
}
</style>