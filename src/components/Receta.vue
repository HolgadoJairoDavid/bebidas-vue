<script setup>
import { useBebidasStore } from '../stores/bebidas';

const bebidasStore = useBebidasStore()
defineProps({
    receta:{
        type: Object
    }
})

const handleRecipe = () => {

}
</script>
<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
        <img
        class="hover:scale-125 transition-transform hover:rotate-2"
         :src="receta.strDrinkThumb"
         :alt="`Imagen de ${receta.strDrink}`">
    </div>
    <div class="p-5">
        <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
        <button
        @click="bebidasStore.seleccionarBebida(receta.idDrink)"
        class="bg-orange-400 hover:bg-orange-300 mt-5 w-full p-3 font-bold text-white text-lg">
            Ver Receta
        </button>
    </div>
  </div>
</template>
