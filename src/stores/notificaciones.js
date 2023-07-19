import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificacionesStore = defineStore("notificaciones", () => {
  // SECTOR DE LOS ESTADOS GLOBALES
  const texto = ref("");
  const error = ref(false);
  const mostrar = ref(false);

  // SECTOR DE LAS FUNCIONES

  function $reset (){
     texto = ref("");
     error = ref(false);
     mostrar = ref(false);
  
  }
  return {
    // IMPORTAMOS LAS VARIABLES
    texto,
    error,
    mostrar,
    // IMPORTAMOS LAS FUNCIONES
    $reset
  };
});
