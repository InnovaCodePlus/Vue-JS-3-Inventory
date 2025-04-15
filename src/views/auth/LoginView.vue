<script setup lang="ts">
import { Button } from "@/components/ui/button";


</script>

<template>

    <section class="flex items-center justify-center min-h-screen">
        <div
            class="mx-auto -z-10 absolute aspect-square rounded-full blur-[100px] -translate-y-2/3 bg-green-500/30 bottom-1/2 inset-0 max-w-5xl w-[65%]">
        </div>

        <form class="flex flex-col gap-4 border border-slate-300/20 w-full max-w-xl bg-black-soft rounded-md pt-7 pb-8 px-8">
            <div>
                <h1>Innova Inventory</h1>
            </div>

            <div>
                <h2>Inciar Sesion</h2>
                <p>Ingresa tus credenciales para acceder al sistema</p>
            </div>
            <Button>Iniciar Sesion</Button>
            <!-- FORM FLIEDS -->

        </form>
    </section>


</template>