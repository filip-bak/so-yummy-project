const { toast } = require("react-toastify");

export const notifySuccess = message => toast.success(message);

export const notifyError = message => toast.error(message);
