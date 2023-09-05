import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import img from '../assets/Contact.png';

const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          form_name: form.name,
          to_name: "Liron",
          from_email: form.email,
          to_email: "contact@mail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiA5c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

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
  };

  return (
    <div className={`xl:mt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} >
      <motion.div
        className="flex-[0.75] bg-zinc-900 p-8 rounded-2xl"
      >
        <img src={img} alt="contact"/>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 w-[70vw] flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-slate-200 focus:bg-white py-4 px-6  placeholder:text-secondary text-zinc-800 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-slate-200 focus:bg-white py-4 px-6 placeholder:text-secondary text-zinc-800 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-slate-200 focus:bg-white py-4 px-6 placeholder:text-secondary text-zinc-800 rounded-lg outline-none border-none font-medium"
            />
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
