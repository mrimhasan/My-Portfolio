import React, { useReducer, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const inputClass =
  "px-4  w-full h-9 font-light border-1 focus:border-none focus-within:ring-3 focus-within:ring-blue-600 rounded-lg outline-none ";
const inputDivClass = "w-[80%] sm:w-[60%] mb-8";

const input = [
  {
    id: 0,
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "enter your full name",
  },
  {
    id: 1,
    label: "Your Contact Number",
    name: "contact",
    type: "text",
    placeholder: "enter your contact number",
  },
  {
    id: 2,
    label: "Your Email",
    name: "email",
    type: "email",
    placeholder: "enter your email",
  },
];

const initialState = {
  name: "",
  email: "",
  message: "",
  contact: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [required, setRequired] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fillAllFields = (text) => {
    setRequired(true);
    return toast.warning(
      <div className="text-center">
        <p className="text-lg">{text}</p>
      </div>,
      {
        position: "top-center",
        draggable: true,
        theme: "dark",
      }
    );
  };

  const formSubmitSuccessfully = () => {
    setRequired(false);
    return toast.success(
      <div>
        <p className="text-lg">Thank you {state.name}</p>
        <small className="font-light text-slate-300">
          Imran will contact you back within an hour.
        </small>
      </div>,
      {
        position: "top-center",
        draggable: true,
        theme: "dark",
      }
    );
  };
  const somthingWrong = (text) =>
    toast.error(
      <div className="text-center">
        <p className="text-lg">{text}</p>
      </div>,
      {
        position: "top-center",
        draggable: true,
        theme: "dark",
      }
    );

  const handleChange = (e) => {
    console.log(state);
    console.log(e.target.name + " " + e.target.value);
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      Object.values(state).some((val) => val === "")
        ? fillAllFields("Please fill all the fields")
        : ![10, 11, 12, 13].includes(state.contact.length)
        ? toast.warning("Please enter valid contact number", {
            position: "top-center",
            draggable: true,
            theme: "dark",
          })
        : emailRegex.test(state.email)
        ? emailjs.send(serviceId, templateId, state, publicKey).then(
            (res) => {
              console.log("EmailJS__RESPONSE:", res);
              formSubmitSuccessfully();
              dispatch({ type: "RESET" });
            },
            (error) => {
              console.log("EmailJS__ERROR:", error);
              somthingWrong("Something went wrong!");
            }
          )
        : toast.warning("Please enter valid email", {
            position: "top-center",
            draggable: true,
            theme: "dark",
          });
    }
    console.log("Submitted:", state);
    //dispatch({ type: "RESET" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="max-w-3xl h-auto py-5 text-white mx-auto mt-8 rounded-2xl flex flex-col items-center justify-around bg-gradient-to-b from-neutral-800/20 to-slate-800/30"
    >
      <h1 className="text-3xl sm:text-5xl mb-5 text-blue-600 font-extrabold">
        Contact Form
      </h1>

      {input.map((item, indx) => (
        <div key={indx} className={`${inputDivClass}`}>
          <label htmlFor={item.name}>
            {item.label}
            <sup className="text-red-600">*</sup>
          </label>
          <br />
          <input
            className={`${inputClass}`}
            id={item.name}
            name={item.name}
            autoComplete="true"
            value={
              item.name === "name"
                ? state.name
                : item.name === "email"
                ? state.email
                : state.contact
            }
            onChange={handleChange}
            type={item.type}
            placeholder={item.placeholder}
          />
          {required ? (
            <small className="font-extralight text-red-600">
              This fields is required
            </small>
          ) : null}
        </div>
      ))}

      <div className={`${inputDivClass}`}>
        <label htmlFor="message">
          Your Message
          <sup className="text-red-600">*</sup>
        </label>
        <br />
        <textarea
          className="w-full h-[150px] p-3 font-light border-1 focus:border-none focus-within:ring-3 focus-within:ring-blue-600 rounded-lg outline-none overflow-auto"
          id="message"
          name="message"
          placeholder="enter your message here"
          value={state.message}
          onChange={handleChange}
        ></textarea>
        {required ? (
          <small className="font-extralight text-red-600">
            This fields is required
          </small>
        ) : null}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="w-40 h-10 mt-4 cursor-pointer border-2 border-white  rounded-xl hover:bg-linear-to-t from-indigo-500 to-sky-500"
        type="submit"
      >
        Submit
      </motion.button>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
