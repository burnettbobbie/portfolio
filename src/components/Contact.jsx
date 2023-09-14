import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import img from '../assets/Contact.png';
import { fadeIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Initialize state for form errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Check if name is empty
    if (!form.name.trim()) {
      newErrors.name = "Your name is required";
      valid = false;
    }

    // Check if email is empty and in a valid format
    if (!form.email.trim()) {
      newErrors.email = "An email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Check if message is empty
    if (!form.message.trim()) {
      newErrors.message = "Please write a message";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      emailjs
        .send(
          "service_c5myajs",
          "template_yzx52gw",
          {
            from_name: form.name,
            to_name: "Bobbie",
            from_email: form.email,
            to_email: "burnettbobbie@mgmail.com",
            message: form.message,
          },
          "zD8CuK5VqXN9OB362"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thanks for getting in touch. I will get back to you as soon as possible!");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);

            console.log(error);
            alert("Something went wrong.");
          }
        );
    }
  };

  return (
    <div className={`items-center justify-center w-full h-full flex xl:flex-row gap-10 overflow-hidden`} >
      <motion.div variants={fadeIn("down", "spring", 0, 1)}
        className=" bg-zinc-900 p-8 rounded-2xl">
        <img src={img} className="w-[250px] h-[70px]" alt="contact"/>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 w-[70vw] flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-white mb-2">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-slate-200 focus:bg-white py-4 px-6  text-zinc-800 rounded-lg outline-none border-none "
            />
            {errors.name && <span className="text-yellow-200">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-2">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-slate-200 focus:bg-white py-4 px-6 text-zinc-800 rounded-lg outline-none border-none"
            />
            {errors.email && <span className="text-yellow-200">{errors.email}</span>}
          </label>
          <label className="flex flex-col">
            <motion.span className="text-white mb-2">Message</motion.span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-slate-200 focus:bg-white py-4 px-6 text-zinc-800 rounded-lg outline-none border-[white 2px] border-white "
            />
            {errors.message && <span className="text-yellow-200">{errors.message}</span>}
          </label>

          <button
            type="submit"
            className="bg-yellow-100 hover:bg-yellow-200 py-2 px-7 mt-2 rounded-xl outline-none  text-zinc-700 font-bold shadow-sm border-[6px] shadow-black border-zinc-800"
          >
            {loading ? "Sending..." : "SEND"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
