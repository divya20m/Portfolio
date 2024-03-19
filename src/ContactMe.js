import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ThankYouPage } from "./ThankYouPage";

const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export function ContactMe() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm("service_k12zg63", "template_s3uogr7", form.current, {
        publicKey: "3t-UJq9PZDhYarRuj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          resetForm();
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  if (submitted) {
    return <ThankYouPage />;
  }

  return (
    <div className="contact-me">
      <Formik
        initialValues={{ user_name: "", user_email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ errors, touched }) => (
          <Form ref={form}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "pink" }}>"Let's Connect! Drop a Line."</h1>

              <Field
                as={TextField}
                sx={{ width: "30rem" }}
                color="secondary"
                id="user_name"
                name="user_name"
                label="Name"
                placeholder="Your Name"
              />
              <ErrorMessage
                name="user_name"
                component="div"
                className="error-message"
              />

              <Field
                as={TextField}
                sx={{ width: "100%" }}
                color="secondary"
                id="user_email"
                name="user_email"
                label="Email"
                placeholder="Your Email"
              />
              <ErrorMessage
                name="user_email"
                component="div"
                className="error-message"
              />

              <Field
                as={TextField}
                sx={{ width: "100%" }}
                color="secondary"
                id="message"
                name="message"
                label="Message"
                placeholder="Your Message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error-message"
              />

              <Button
                size="larger"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Send
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
