import axios from "axios";

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
    await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
  } catch (err) {
    console.log("err--->", err);
  } finally {
    setIsLoading(false);
  }
};
