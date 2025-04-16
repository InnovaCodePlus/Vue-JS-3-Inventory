<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { RouterLink } from 'vue-router';
import { Button } from '../ui/button';
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


            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                    <TableRow>
                        <TableCell class="font-medium">
                            #INV001
                        </TableCell>
                        <TableCell>
                            Nombre
                        </TableCell>
                        <TableCell>
                            21 de Septiembre
                        </TableCell>
                        <TableCell>
                            21 de Septiembre
                        </TableCell>
                        <TableCell>
                            Eliminar | Editar
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

    </section>

</template>