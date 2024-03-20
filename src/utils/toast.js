import { toast } from "react-toastify";

export const showCustomToast = (message,type) => {
    if(type=="success-toast"){
      toast.success(message, {
        position: 'top-right',
        autoClose: 2000, // Auto close after 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme:"colored",
        progress: undefined,
        // className: type, // Add a custom class for styling
      });
    }
    else{
      toast.error(message, {
        position: 'top-right',
        theme:"colored",
        hideProgressBar:false,
        autoClose: 2000, // Auto close after 2 seconds
        // hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        // className: type, // Add a custom class for styling
      });
    }
  };