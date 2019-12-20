<template>
  <v-app>
    <Menu/>

    <v-content>
      <v-container>
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'App',

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
