import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "./Email";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 25,
  secure: true,
  auth: {
    user: "anatolysavchenko95@gmail.com",
    pass: "P5chkQi~7o*hXA",
  },
});

// const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: "you@example.com",
  to: "anatolysavchenko95@gmail.com",
  subject: "hello world",
//   html: emailHtml,
};

const sendEmail = await transporter.sendMail(options);

export { sendEmail };
