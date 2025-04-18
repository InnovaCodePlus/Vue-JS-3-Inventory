import { computed, ref } from "vue";
import categoryService from '@/services/categories';
import router from "@/router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";



export const useCreateCategory = () => {
    const name = ref('');
    const queryClient = useQueryClient();

    const {isPending, mutate} = useMutation({
        mutationFn: categoryService.createCategory,
        onSuccess: (data) => {
            alert(data.message);
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        },
        onError: () => {
            alert("Error al crear la categoria");
        }
    });


    const handleSubmit = async () => {
        if (name.value.trim() === '') {
            alert("Debe agregar un nombre a la categoria");
            return;
        }

        mutate(name.value);

        router.push({ name: 'categories' });

    }

    return {
        name,
        isPending: computed(() => isPending.value),
        handleSubmit
    }
}