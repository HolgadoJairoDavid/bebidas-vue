import api from "../lib/axios";

export default {
    // BEBIDAS
    obtenerCategorias(){
        return api('/list.php?c=list')
    },
    buscarRecetas({categoria, nombre}){
        return api(`/filter.php?c=${categoria}&i=${nombre}`)
    },

    // PARA VER LA RECETA DE CADA BEBIDA

    buscarReceta(id){
        return api(`/lookup.php?i=${id}`)
    }
}