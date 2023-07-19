<script setup>
import RecetaVue from '../components/Receta.vue'
import { useBebidasStore } from '../stores/bebidas';
const bebidasStore = useBebidasStore()
</script>
<template>
   <h1 class="text-6xl font-extrabold">Recetas</h1>
   <p v-if="bebidasStore.noRecetas" class="my-10 text-center text-2xl">No hay Resultados, utiliza el formulario para buscar recetas</p>
   <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <RecetaVue v-for="receta in bebidasStore.recetas"
    :receta="receta"
    :key="receta.idDrink"
    />
   </div>
</template>