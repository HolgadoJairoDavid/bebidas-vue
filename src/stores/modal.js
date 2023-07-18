import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore('modal', () => {
// SECTOR DE ESTADOS GLOBALES
   const modal = ref(false)
// SECTOR DE FUNCIONES 
function handleClickModal(){
    modal.value = !modal.value
} 
    return {
        // EXPORTAMOS LAS VARIABLES
        modal,
        // EXPORTAMOS LAS FUNCIONES
        handleClickModal
    }
})