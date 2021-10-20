import Swal from "sweetalert2";
import "./index.css";

const notification = {
  notication(icon = "error", text, title, config = {}) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      ...config,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({ icon, title: title, text });
  },
};

export default notification;
