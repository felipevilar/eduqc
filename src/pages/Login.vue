<template>
  <q-page class="container">
    <p class="text-h4 text-uppercase text-bold text-info">Entrar</p>
    <p class="text-subtitle2 text-grey-5">Entre com suas credenciais</p>
    <q-form @submit="onSubmit" @reset="onReset" class="q-px-md">
      <q-input
        class="mailInput q-my-md"
        filled
        v-model="email"
        label="Email *"
        hint="Informe seu email"
        :rules="[isValidEmail]"
      />

      <q-input
        class="passwordInput q-my-md"
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Informe sua senha"
        label="Digite sua senha"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer q-mx-sm"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="q-mt-lg">
        <q-btn label="Entrar" type="submit" color="positive" glossy />
        <q-btn
          label="Limpar"
          type="reset"
          color="negative"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { errorMessage, successMessage } from "../utils/notifyme.js";

export default {
  data: () => {
    return {
      $q: useQuasar(),
      email: "",
      isPwd: true,
      password: "",
      users: [],
    };
  },
  methods: {
    async onSubmit() {
      let user = this.users.filter((user) => user.email == this.email);
      if (user.length < 1) {
        errorMessage("Usuário não encontrado!");
      } else {
        if (this.password !== user[0].password) {
          errorMessage("Verifique sua senha!");
        } else {
          successMessage("Logado com sucesso!", "check");
          localStorage.setItem("loggedUser", JSON.stringify(user[0]));
          await this.$router.push("/dashboard");
          location.reload();
        }
      }
    },
    onReset() {
      this.email = "";
      this.password = "";
      this.isPwd = true;
    },
    isValidEmail(val) {
      return (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
        "Informe um email válido!"
      );
    },
  },
  computed: {},
  mounted() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
  },
};
</script>