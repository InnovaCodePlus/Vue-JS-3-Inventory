<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue';
import { SidebarProvider } from '@/components/ui/sidebar';

</script>



<template>
    
    <SidebarProvider>
        <AppSidebar/>
        <main class="pt-8 w-full">
            <RouterView/>
        </main>
    </SidebarProvider>

</template>