<template>
  <q-page class="container">
    <p class="text-h3 q-mt-lg">Dashboard</p>
    <p class="text-subtitle1">Suas informações</p>
    <q-circular-progress
      v-show="loading"
      indeterminate
      size="50px"
      color="lime"
      class="q-ma-md"
    />
    <q-card
      v-show="!loading"
      class="my-card q-mb-md"
      v-for="item in responseData"
      :key="item._id"
    >
      <q-card-section class="mycard-section">
        <p>Id:</p>
        {{ item._id || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>Duration:</p>
        {{ item.duration || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>Date Made:</p>
        {{ item.date_made || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>User Email:</p>
        {{ item.user_email || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>Probability:</p>
        {{ item.probability || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>Status:</p>
        {{ item.status || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>Created:</p>
        {{ item._created || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>Uptaded:</p>
        {{ item._updated || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>E-Tag:</p>
        {{ item._etag || "-" }}
        <q-separator color="grey-6" class="q-my-sm" />
        <p>Link:</p>
        {{ item._links.self.href || "-" }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { errorMessage, successMessage } from "../utils/notifyme.js";
import { api } from "boot/axios";

export default {
  data: () => {
    return {
      responseData: null,
      loading: true,
    };
  },
  beforeMount() {
    api
      .get("https://public-dev-teste.dev.eduqc.com.br/simulation", {
        auth: {
          username: "admin",
          password: "admin",
        },
      })
      .then((response) => {
        this.responseData = response.data._items;
        this.loading = false;
      })
      .catch(() => {
        errorMessage("Erro com a requisição!");
      });
  },

  beforeRouteEnter(to, from, next) {
    let isUserLogged = JSON.parse(localStorage.getItem("loggedUser"));
    if (isUserLogged) {
      next();
    } else {
      console.log("Unauthenticated");
      next("/login");
      errorMessage("Acesso não autorizado!");
    }
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 90%;
  max-width: 400px;
  border-radius: 8px;
  text-align: start;
  word-break: break-all;
}
.container {
  align-items: center;
}
.mycard-section {
  p {
    display: inline;
    color: rgb(134, 255, 134);
  }
}
</style>