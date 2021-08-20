import { Notify } from 'quasar'

export const errorMessage = function (message) {
  Notify.create({
    color: "red-5",
    textColor: "white",
    icon: "warning",
    message: message,
  });
};

export const successMessage = function (message, icon) {
  Notify.create({
    color: "green-4",
    textColor: "white",
    icon: icon,
    message: message,
  });
};


export default { errorMessage, successMessage };
