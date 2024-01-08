import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const sendEmailjs = async ({ email, name, phone }, setIsLoading) => {
  setIsLoading(true);

  const data = {
    service_id: "service_6xwf12j",
    template_id: "template_gvix7eg",
    user_id: "7zkEhCRJB0wpvbtvI",
    template_params: {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "ProAnapa",
    },
  };

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("res", res);
  } catch (err) {
  } finally {
    toast.error(
      `Произошла техническая ошибка...\nПопробуйте оставить заявку позже`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
    setIsLoading(false);
  }
};
