import { reactive, ref } from "vue";



export const useLoginForm = () => {
    const showPassword = ref(true);

    const formLogin = reactive({
        email: "",
        password: ""
    })

    const showPasswordHandler = () => {
        showPassword.value = !showPassword.value
    }

    const handleSubmit = () => {
        console.log(formLogin)
    }

    return {
        showPassword,
        formLogin,
        showPasswordHandler,
        handleSubmit,
    }
}
