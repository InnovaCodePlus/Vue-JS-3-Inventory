import categoryService from '@/services/categories';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';



export const useCategories = () => {


    const { data, isPending, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: categoryService.getAllCategories,
        staleTime: 1000 * 60 * 60 * 12
    })


    return {
        categories: computed(() => data.value?.categories ?? []),
        meta: computed(() => data.value?.meta ?? null),
        links: computed(() => data.value?.links ?? null),
        isPending: computed(() => isPending.value),
        isError,
        error
    }




}