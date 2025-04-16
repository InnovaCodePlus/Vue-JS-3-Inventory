<script setup lang="ts">
import { sideMenuOptions } from '@/constants';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';

</script>

<template>
    <Sidebar variant="floating">
        <SidebarContent class="sidebat">
            <SidebarGroup>
                
                <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>

                <SidebarGroupContent>
                    <SidebarMenu class="space-y-2">

                        <SidebarMenuItem v-for="item in sideMenuOptions" :key="item.pathName">
                            <SidebarMenuButton  active-class="sidebar__link--active" class="sidebar__link" asChild>
                                
                                <RouterLink :to="{name: item.pathName}">
                                    <component :is="item.icon"/>
                                    <span>{{ item.label }}</span>
                                </RouterLink>

                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>


</template>