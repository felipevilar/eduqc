<template>
  <q-page class="container">
    <p class="text-h4 text-uppercase text-bold text-info">Novo por aqui?</p>
    <p class="text-subtitle2 text-grey-5">Crie uma conta</p>
    <q-form @submit="onSubmit" @reset="onReset" class="q-px-md" ref="mailInput">
      <q-input
        class="mailInput q-my-md"
        filled
        v-model="name"
        label="Email *"
        hint="Informe seu email"
        :rules="[(v) => isValidEmail(v)]"
      />

      <q-input
        class="passwordInput q-my-md"
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Informe sua senha"
        label="Digite sua senha"
        :rules="[isValidPassword]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer q-mx-sm"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input
        class="confirmInput q-my-md"
        v-model="passwordConfirm"
        filled
        :type="isPwdConfirm ? 'password' : 'text'"
        hint="Confirme sua senha"
        label="Confirme sua senha"
        :rules="[isValidPassword]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
            class="cursor-pointer q-mx-sm"
            @click="isPwdConfirm = !isPwdConfirm"
          />
        </template>
      </q-input>

      <div class="q-mt-lg">
        <q-btn label="Cadastrar" type="submit" color="positive" glossy />
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
import { errorMessage } from "../utils/notifyme.js";
import { setUser } from "../utils/handleUsers.js";

export default {
  data: () => {
    return {
      name: "",
      password: "",
      isPwd: true,
      passwordConfirm: "",
      isPwdConfirm: true,
      user: {},
      users: [],
      mailInput: null,
    };
  },
  methods: {
    async onReset() {
      await this.clearFields(); 
      this.$refs.mailInput.resetValidation();
    },
    onSubmit() {
      if (this.password !== this.passwordConfirm) {
        errorMessage("Verifique sua confirmação de senha");
      } else {
        this.user.email = this.name;
        this.user.password = this.password;
        setUser(this.user);
        this.onReset();
      }
    },
    clearFields() {
      this.name = null;
      this.password = null;
      this.passwordConfirm = null;
      this.isPwd = true;
      this.isPwdConfirm = true;
    },
    /*       isEmpty(val) {
        return (val && val.length !== 0) || "Preencha este campo";
      }, */
    isValidPassword(val) {
      return (val && val.length > 3) || "Senha muito curta";
    },
    isValidEmail(val) {
      return (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
        "Informe um email válido!"
      );
    },
  },
  computed: {},
};
</script>