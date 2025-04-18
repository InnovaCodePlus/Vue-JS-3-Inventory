<script setup lang="ts">
import { RouterLink } from 'vue-router';


import { Button } from '../ui/button';
import { Table,TableBody ,TableCell,TableHead,TableHeader,TableRow } from '@/components/ui/table'
import { useCategories } from '../../hooks/categories/useCategories';

const { isPending, categories } = useCategories();

console.log(categories)


</script>

<template>

    <section>
        <div class="container">
            <div class="mb-4 flex justify-between items-center">
                <h2>Listado de categorias</h2>
                <RouterLink :to="{ name: 'new-category' }">
                    <Button>+ Registrar categoria</Button>
                </RouterLink>
            </div>

            <div class="w-full flex items-center justify-center min-h-[20vh]" v-if="isPending">
                <p>Cargando...</p>
            </div>

            <div v-else class="rounded-md overflow-hidden border bg-black/20">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                Codigo
                            </TableHead>
                            <TableHead>
                                Nombre
                            </TableHead>
                            <TableHead>
                                Fecha de Creación
                            </TableHead>
                            <TableHead>
                                Ultima actualización
                            </TableHead>

                            <TableHead>
                                Acciones
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="category in categories" :key="category.id">
                            <TableCell class="font-medium">
                                #{{ category.id }}
                            </TableCell>
                            <TableCell>
                                {{ category.name }}
                            </TableCell>
                            <TableCell>
                                {{ category.createdAt }}
                            </TableCell>
                            <TableCell>
                                {{ category.updatedAt }}
                            </TableCell>
                            <TableCell>
                                Eliminar | Editar
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </div>

    </section>

</template>