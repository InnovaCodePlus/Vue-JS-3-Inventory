<script setup lang="ts">
import CategoryTable from '@/components/categories/CategoryTable.vue';
import NewCategoryForm from '@/components/categories/NewCategoryForm.vue';
import TitlePage from '@/components/TitlePage.vue';
import { Button } from '@/components/ui/button';

</script>

<template>
        <TitlePage
            title="Categorias"
            description="Gestiona las categorias de tus productos."
        />


        <CategoryTable/>


</template>