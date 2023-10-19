import { toast } from "react-toastify";

export const showCustomToast = (message,type) => {
    toast(message, {
      position: 'top-right',
      autoClose: 2000, // Auto close after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      className: type, // Add a custom class for styling
    });
  };