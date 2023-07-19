import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref, watch, onMounted, computed} from "vue";
import { useModalStore } from "./modal";
export const useFavoritosStore = defineStore('favoritos', ()=> {
    // SECTOR DE ESTADOS GLOBALES
    const bebidas = useBebidasStore()
    const modal = useModalStore()
    const favoritos = ref([])
    const noFavoritos = computed(() => favoritos.value.length === 0)
    // SECTOR DE DATOS PERSISTENTES
    onMounted(()=>{
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })
    watch(favoritos,()=>{
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }
    // SECTOR DE LAS FUNCIONES
const existeFavorito = (id) => {
    const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
    return favoritosLocalStorage.some(favorito => favorito.idDrink === id)
}

const eliminarDeFavoritos = () => {
    favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
}

    const handleClickFavorito = () => {
// hay que actualizar esta función 
        if (existeFavorito(bebidas.receta.idDrink)) {
            eliminarDeFavoritos()
            
        } else {
            favoritos.value.push(bebidas.receta)
            
        }
        modal.modal = false
    }


    return {
        // EXPORTAMOS EL ESTADO GLOBAL 
        favoritos,
        noFavoritos,
        // EXPORTAMOS LAS FUNCIONES
        handleClickFavorito,
        existeFavorito
    }
})