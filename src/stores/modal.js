import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFavoritosStore } from "./favoritos";
import { useBebidasStore } from "./bebidas";
export const useModalStore = defineStore('modal', () => {
// SECTOR DE ESTADOS GLOBALES
const favoritos = useFavoritosStore()
const bebidas = useBebidasStore()
   const modal = ref(false)

   const textoBoton = computed(() => {
    return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'
   })
// SECTOR DE FUNCIONES 
function handleClickModal(){
    modal.value = !modal.value
} 
    return {
        // EXPORTAMOS LAS VARIABLES
        modal,
        textoBoton,
        // EXPORTAMOS LAS FUNCIONES
        handleClickModal
    }
})