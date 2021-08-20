import { errorMessage, successMessage } from "./notifyme.js";

export const setUser = (user) => {
  let users = getUsers();
  let isRegistred = users.filter((el) => el.email === user.email).length > 0;

  if (isRegistred) {
    errorMessage("Usuario já registrado!");
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    successMessage("Cadastro realizado com sucesso!", "cloud_done");
  }
};

export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

export const isLoggedIn = () => {
  let user = JSON.parse(localStorage.getItem("loggedUser"));
  if (user != null) return true;
  return false;
};

export const getFirstLetter = () => {
  if(isLoggedIn()) {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    return user.email[0].toUpperCase();
  }
};

export default { setUser, getUsers, isLoggedIn, getFirstLetter };
