<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn to="/" flat dense round icon="home" aria-label="Menu" />
        <q-btn
          to="/dashboard"
          flat
          dense
          round
          icon="dashboard"
          aria-label="Dashboard"
        />

        <q-toolbar-title>Eduqc</q-toolbar-title>
        <q-avatar v-show="loggedIn" color="accent" text-color="white">{{
          getFirst()
        }}</q-avatar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { isLoggedIn, getFirstLetter } from "../utils/handleUsers.js";
export default defineComponent({
  name: "MainLayout",
  methods: {
    getFirst() {
      return getFirstLetter();
    },
  },
  computed: {
    loggedIn() {
      return isLoggedIn();
    },
  },
});
</script>

