import { ref } from "vue";
import categoryService from '@/services/categories';
import router from "@/router";



export const useCreateCategory = () => {
    const name = ref('');
    const isPending = ref(false);


    const handleSubmit = async () => {

        isPending.value = true;

        if (name.value.trim() === '') {
            alert("Debe agregar un nombre a la categoria");
            return;
        }

        const response = await categoryService.createCategory(name.value);


        isPending.value = false;

        alert(response.message);

        router.push({ name: 'categories' });

    }

    return {
        name,
        isPending,
        handleSubmit
    }
}