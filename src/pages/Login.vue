<template>
    <q-page class="fondo row">
        <login_registro/>
    </q-page>
</template>
<script setup>
    import { provide ,ref} from "vue"
    import login_registro from "../components/login_registro.vue" 
    import { validar } from "../composables/validar_campos"
    import { api } from "src/boot/axios"
    const pagina = ref('registro')
    const alto = ref("60%")
    const  { reglas_correo, reglas_contra } = validar()
        const entradas = ref([
            {nombre:"email",tipo:"mail", valor:"", icono:"mail",placeholder:"Correo", estado:true,reglas:reglas_correo,},
            {nombre:"password",tipo:"password", valor:"", icono:"mdi-lock-outline",placeholder:"Contraseña", estado:true,reglas:reglas_contra}
        ])
   
   
    const datos = ref({})
    const enviar = async () => {
        entradas.value.forEach(element => {
          
          datos.value ={
            ...datos.value, // Esto asegura que no sobrescribas los valores anteriores
            [element.nombre]: element.valor
            } 
        })
        
  api
    .post("/login", {
       datos
    })
    .then(function (response) {
      userStore.setToken(response.data.access_token);
      userStore.setUser (response.data.user);
      userStore.setAuth(true);
      router.push("/");
    })
    .catch(function (error) {
      console.log(error);
    })
}
 provide("entradas",entradas.value)
    provide("pagina",pagina)
    provide("alto",alto.value)
 provide("enviar",enviar)
</script>
<style scoped>
 .fondo{
        background-image: url("/imagenes/Fondo1.png")
    }
</style>