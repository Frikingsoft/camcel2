<template>
    <q-page class="fondo row">
        <login_registro/>
    </q-page>
</template>
<script setup>
    import { provide ,ref} from "vue"
    import login_registro from "../components/login_registro.vue" 
    import { validar } from "../composables/validar_campos"
    const pagina = ref('registro')
    const alto = ref("60%")
    const  { reglas_correo, reglas_contra } = validar()
        const entradas = ref([
            {nombre:"email",tipo:"mail", valor:"", icono:"mail",placeholder:"Correo", estado:true,reglas:reglas_correo,},
            {nombre:"password",tipo:"password", valor:"", icono:"mdi-lock-outline",placeholder:"Contraseña", estado:true,reglas:reglas_contra}
        ])
    provide("entradas",entradas.value)
    provide("pagina",pagina)
    provide("alto",alto.value)
</script>
<style scoped>
 .fondo{
        background-image: url("/imagenes/Fondo1.png")
    }
</style>