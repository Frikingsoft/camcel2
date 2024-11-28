<template>
    <q-page class="fondo row">
        <login_registro/>
    </q-page>
</template>
<script setup>
    import login_registro from "../components/login_registro.vue" 
    import { validar } from "../composables/validar_campos"
    import { ref,provide } from "vue"
    import { api } from "src/boot/axios"
    const pagina = ref('login')
    const alto = ref("70%")
    const  { reglas_correo, reglas_contra,reglas_repetir_contra,reglas_empresa } = validar()
        const entradas = ref([
            {nombre:"Empresa",tipo:"text", valor:"", icono:"mail",placeholder:"Nombre de Empresa", estado:true,reglas:reglas_empresa,},
            {nombre:"email",tipo:"mail", valor:"", icono:"mail",placeholder:"Correo", estado:true,reglas:reglas_correo,},
            {nombre:"password",tipo:"password", valor:"", icono:"mdi-lock-outline",placeholder:"Contraseña", estado:true,reglas:reglas_contra},
            {nombre:"repetir_password",tipo:"password", valor:"", icono:"mdi-lock-outline",placeholder:"Repetir Contraseña", estado:true,reglas:reglas_repetir_contra}
        ])
        const datos = ref({})
      const enviar = async () => {
        entradas.value.forEach(element => {
          
          datos.value ={
            ...datos.value, // Esto asegura que no sobrescribas los valores anteriores
            [element.nombre]: element.valor
            } 
        })
      }
 /* api
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
}    */
    provide("pagina",pagina)    
    provide("entradas",entradas.value)
    provide("alto",alto.value)
    provide("enviar",enviar)
</script>
<style scoped>
 .fondo{
        background-image: url("/imagenes/Fondo1.png")
    }
</style>
 

/* Cambiar el color del icono de error 
.q-field--error .q-icon {
  color: rgb(204, 94, 94) !important;  Color del icono de error 
}
.q-field--error .q-field__messages > div {
    color: rgb(204, 94, 94) !important;
}
.q-field--error .q-field__label {
  color: rgb(204, 94, 94) !important; /* Cambiar el color del label 
}*/