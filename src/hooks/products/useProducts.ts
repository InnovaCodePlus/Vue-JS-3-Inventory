import { useQuery } from "@tanstack/vue-query"
import productService from "@/services/products"
import { computed } from "vue"


export const useProducts = () => {

    const {isPending, data, isError, error} = useQuery({
        queryKey: ["products"],
        queryFn: productService.getAllProducts,
        staleTime: 1000 * 60 * 60 * 12
    })

    return {
        products: computed(() => data.value?.products ?? []),
        isPending: computed(() => isPending.value),
        isError: computed(() => isError.value),
        error: computed(() => error.value)
    }
}