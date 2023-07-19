<script setup>
import HeaderVue from './components/Header.vue';
import { RouterView } from 'vue-router';
import Modal from './components/Modal.vue';
import Notificacion from './components/Notificacion.vue'
</script>

<template>
  <HeaderVue />
  <main class="container mx-auto mt-10">
 <RouterView />
  </main>
  <Modal />
<Notificacion />
</template>
