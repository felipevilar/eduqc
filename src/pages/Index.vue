<template>
  <q-page class="container">
    <div class="row">
      <div class="col q-mb-md">
        <q-img class="logo" src="~assets/logo.png" />
      </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col text-weight-bold text-h3 text-sm">Bem-vindo!</div>
    </div>
    <div class="row">
      <div class="col text-subtitle1">Faça login ou registre-se</div>
    </div>
    <div class="row q-my-md">
      <div class="col q-gutter-md" style="max-width: 500px">
        <q-btn
          color="primary"
          glossy
          icon="login"
          label="Entrar"
          class="btn"
          to="/login"
        />
        <q-btn
          color="positive"
          glossy
          icon="app_registration"
          label="Registrar-se"
          to="/register"
          class="btn"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>

<style lang="scss">
.logo {
  width: 500px;
}
.btn {
  font-size: 16px;
  width: 200px;
  height: 50px;
}

@media (max-width: $breakpoint-xs-max) {
  .logo {
    width: 250px;
  }
}
</style>
