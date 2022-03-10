import React, { useRef } from 'react';
import { send, sendForm } from '@emailjs/browser';
import EmailSVG from '@/components/Contact/EmailSVG';
import { RoundedButton } from '@/components/common/RoundedButton';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const { name, email, message } = event.target as typeof event.target & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    try {
      const result = await sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="pt-8 font-nautigal text-6xl">Contact Me.</h2>
      <div className="container mx-auto mt-2 flex justify-around space-x-8">
        <div className="w-1/2">
          <p className="leading-relaxed tracking-wider w-[500px]">
            To request a quote or want to meet up for coffee, contact me
            directly or fill out the form and we will get back to you promptly.
          </p>
          <form
            ref={formRef}
            onSubmit={onSubmitHandler}
            className="mt-8 w-[500px]  text-gray-300 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="text-secondary bg-gray-100 text-base rounded-xl h-12 outline-0 focus:outline-0 py-4 px-5"
                id="name"
                name="name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                className=" text-secondary bg-gray-100 text-base rounded-xl h-12 outline-0 focus:outline-0 py-4 px-5"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message">Your Message</label>
              <textarea
                className=" text-secondary bg-gray-100 text-base rounded-xl h-[120px] resize-none outline-0 focus:outline-0 py-4 px-5"
                id="message"
                name="message"
              />
            </div>
            <div className="pt-2 flex justify-end">
              <RoundedButton onClick={() => {}}>Send Message</RoundedButton>
            </div>
          </form>
        </div>
        <div className="w-1/2  tracking-wide text-[#EAE0FF]">
          <EmailSVG className="h-[300px] w-full" />
          <div className="mt-16 flex items-center">
            <span>
              <HiLocationMarker size={20} />
            </span>
            <span className="ml-4">
              Nguyen Thai Binh Street, Ward 4, Tan Binh District, HCMC
            </span>
          </div>
          <div className="flex mt-3 items-center">
            <span>
              <HiPhone size={20} />
            </span>
            <span className="ml-4">(093) 143 5335</span>
          </div>
          <div className="flex mt-3 items-center">
            <span>
              <HiMail size={20} />
            </span>
            <span className="ml-4">dat.daovu@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
