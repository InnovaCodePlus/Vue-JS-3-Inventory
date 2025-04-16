<script setup lang="ts">

    defineProps<{
        title: string,
        description: string
    }>()

</script>


<template>
    <header>
        <div class="title-page">
            <h1 class="text-3xl font-bold">{{ title }}</h1>
            <p class="text-slate-300">{{ description }}</p>
        </div>
    </header>
</template>