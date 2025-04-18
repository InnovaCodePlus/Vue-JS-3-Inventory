<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { useProducts } from '@/hooks/products/useProducts';

import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const { isPending, products } = useProducts();

</script>

<template>

    <section>
        <div class="container">
            <div class="mb-4 flex justify-between items-center">
                <h2>Listado de productos</h2>
                <RouterLink :to="{ name: 'new-category' }">
                    <Button>+ Registrar producto</Button>
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
                        <TableRow v-for="product in products" :key="product.id">
                            <TableCell class="font-medium">
                                #{{ product.id }}
                            </TableCell>
                            <TableCell>
                                {{ product.name }}
                            </TableCell>
                            <TableCell>
                                {{ product.createdAt }}
                            </TableCell>
                            <TableCell>
                                {{ product.updatedAt }}
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