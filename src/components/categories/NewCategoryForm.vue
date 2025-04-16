<script setup lang="ts">

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormLabel from '../ui/form/FormLabel.vue';
import { FormField, FormControl, FormItem } from '@/components/ui/form';
import { useCreateCategory } from '@/hooks/categories/useCreateCategory';


const { handleSubmit, isPending, name } = useCreateCategory();


</script>


<template>

    <section>
        <form @submit.prevent="handleSubmit" class="form">
            <h2>Formulario</h2>

            <FormField name="name">
                <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                        <Input v-model="name" placeholder="Nombre de la categoria" />
                    </FormControl>
                </FormItem>
            </FormField>

            <Button type="submit" class="col-span-3 max-w-max">
                {{ isPending ? "Cargando..." : "Guardar categoria" }}
            </Button>

        </form>
    </section>

</template>