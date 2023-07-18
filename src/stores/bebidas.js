import { defineStore } from "pinia";
import { useModalStore } from "./modal";
import { onMounted, reactive, ref } from "vue";
import clienteService from "../services/clienteService";

export const useBebidasStore = defineStore("bebidas", () => {
    // SECTOR DE ESTADOS GLOBALES
const modal = useModalStore()
  const categorias = ref([]);
  const recetas = ref([])
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });
  onMounted(async () => {
    const { data } = await clienteService.obtenerCategorias();
    categorias.value = data.drinks;
  });

  // SECTOR DE FUNCIONES
  async function obtenerRecetas() {
    const { data } = await clienteService.buscarRecetas(busqueda);
    recetas.value = data.drinks
  }

  async function seleccionarBebida(id){
    const {data} = await clienteService.buscarReceta(id)
    
    modal.handleClickModal()

  }
  return {
    // EXPORTAMOS VARIABLES
    busqueda,
    categorias,
    recetas,
    // EXPORTAMOS FUNCIONES
    obtenerRecetas,
    seleccionarBebida
  };
});
