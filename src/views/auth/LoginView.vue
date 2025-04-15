<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

import { HugeiconsIcon } from '@hugeicons/vue';
import { ViewOffIcon, ViewIcon } from '@hugeicons/core-free-icons';
import { useLoginForm } from "@/hooks/auth/useLoginForm";


const { formLogin, handleSubmit, showPassword, showPasswordHandler } = useLoginForm();

</script>

<template>

    <section class="flex items-center justify-center min-h-screen">
        <div
            class="mx-auto -z-10 absolute aspect-square rounded-full blur-[100px] -translate-y-2/3 bg-green-500/30 bottom-1/2 inset-0 max-w-5xl w-[65%]">
        </div>

        <form
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-4 border border-slate-300/20 w-full max-w-xl bg-black-soft rounded-md pt-7 pb-8 px-8">
            <div class="flex items-center justify-center mb-4">
                <h1>Innova Inventory</h1>
            </div>

            <div class="mb-4">
                <h2 >Inciar Sesion</h2>
                <p>Ingresa tus credenciales para acceder al sistema</p>
            </div>

            <!-- FORM FLIEDS -->
            <FormField name="email">
                <FormItem>
                    <FormLabel>Correo electronico</FormLabel>
                    <FormControl>
                        <Input v-model="formLogin.email" placeholder="Ej: correo@example.com" type="email" />
                    </FormControl>
                </FormItem>
            </FormField>

            <FormField name="password">
                <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl class="flex flex-row">
                        <div class="flex items-center">
                            
                            <Input v-model="formLogin.password" :type="showPassword ? 'text' : 'password'" />

                            <Button @click="showPasswordHandler" v-if="showPassword == false" type="button" variant="outline">
                                <HugeiconsIcon :icon="ViewOffIcon" :size="24" color="currentColor"
                                    :stroke-width="1.5" />
                            </Button>
                            
                            <Button @click="showPasswordHandler" v-else type="button" variant="outline">
                                <HugeiconsIcon :icon="ViewIcon" :size="24" color="currentColor"
                                    :stroke-width="1.5" />
                            </Button>
                
                        </div>
                    </FormControl>
                </FormItem>
            </FormField>

            <Button>Iniciar Sesion</Button>
        </form>
    </section>
</template>