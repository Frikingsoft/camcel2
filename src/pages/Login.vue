<template>
    <q-page class="fondo">
        <q-card class="fondo_azul row justify-center items-center">
            <q-card class="my-card col-10 row">
                <q-card-section class="col-12 flex flex-center">
                    <q-avatar size="128px" font-size="100px" color="teal-9" text-color="white" icon="mdi-account-check-outline" />
                </q-card-section>
                <q-card-section class="col-12 row flex flex-center">
                    <q-input v-for="(entrada,index) in entradas"
                            :key="index"  
                            filled
                            v-model="entrada.valor"
                            :type="entrada.tipo"
                            :placeholder="entrada.placeholder"
                            class="col-9"
                            color="teal-9"
                            :rules="entrada.reglas"
                            
                            >
                    <template v-slot:before>
                        <q-icon :class="{animar: entrada.nombre ==='password'}" size="32px" :name="entrada.icono" v-if="entrada.estado" @click="cambiar_estado(entrada.nombre)"/>
                         <q-icon class="animar teal-9" name="mdi-lock-open-variant-outline" size="32px" @click="cambiar_estado(entrada.nombre)" v-if='!entrada.estado && entrada.nombre=="password"' />
                    </template>
                </q-input>
                </q-card-section>
                <q-card-section class="col-12 flex justify-center">
                    <q-btn label="Enviar" type="submit" class="boton_enviar q-mr-md"/>
                    <q-btn label="Registro" type="submit" class="boton_enviar" @click="enviar_registro"/>
                </q-card-section>
            </q-card>
        </q-card>
    </q-page>
</template>
<script setup>
    import { ref } from "vue"
    import { validar } from "../composables/validar_campos"
    
    const  { reglas_correo, reglas_contra } = validar()
    const icono_login = ref("mdi-account-check-outline")
    
    const entradas = ref([
        {nombre:"email",tipo:"mail", valor:"", icono:"mail",placeholder:"Correo", estado:true,reglas:reglas_correo,},
        {nombre:"password",tipo:"password", valor:"", icono:"mdi-lock-outline",placeholder:"Contraseña", estado:true,reglas:reglas_contra}
    ])
    
    const cambiar_estado = (nombre,estado) => {
    let entrada = entradas.value.find((e) => e.nombre === nombre)
        if(nombre==="password"){
            entrada.estado = !entrada.estado
            if(entrada.tipo==="password"){
                entrada.tipo="text"
            }
            else{
                entrada.tipo="password"
            }
        }
  
    }

    const enviar_registro = () => {
        router.push("/registro")
    }

   
</script>
<style scoped>
    .fondo{
        background-image: url("/imagenes/Fondo1.png")
    }
    .fondo_azul{
        width: 35%;
        height: 100vh;
        background-color: rgba(18, 68, 139, 0.5);
    }
    .my-card{
        height: 60%;
        backdrop-filter: blur(15px);
        background-color: rgba(255, 255, 255, 0.3);
        box-shadow: 3px 3px 5px rgba(151, 175, 209, 0.5);
        border-radius: 5% !important;
        box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(29, 98, 68),
        3px 3px 3px rgb(101, 101, 101),4px 4px 2px rgb(29, 98, 68),5px 5px 2px rgb(15, 15, 15) !important;
    }
    .animar:hover{
  animation: animar .5s;
  transform: scale(1.1);
 color: rgb(29, 98, 68);
}
@keyframes animar {
  from{
    transform: scale(1);
    
  }
  to{
    transform: scale(1.1);
    
  }
}
.boton_enviar{
    width: 40%;
    background-color: rgb(0, 105, 92);
    color: white;
    box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
    3px 3px 3px rgb(101, 101, 101),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
    height: 40px; 
    font-weight: bold;
    font-size: 1rem;
}
.boton_enviar:hover{
    transition: .5s;
    background-color: rgb(0, 105, 92);
    color: white;
    
}
.q-field__messages col{
    color: white;
}
.botones{
  background-color: rgb(8, 43, 83);
}

 

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
</style>