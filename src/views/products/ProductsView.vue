<script setup lang="ts">
import TitlePage from '@/components/TitlePage.vue';
import ProductsTable from '@/components/products/ProductsTable.vue';

</script>

<template>

    <TitlePage
        title="Productos"
        description="Gestion de productos registrados en el sistema."
    />

    <ProductsTable/>

</template>