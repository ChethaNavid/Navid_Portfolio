import SocialCards from "@/components/socialCards";
import MessageForm from "@/components/messageForm";
import React from "react";

const Contact = () => {
  return (
    <div className="">
      <SocialCards />

      <hr className="w-full m-4 border-t border-neutral-300" />

      <p className="font-medium mb-4">Or send me a message</p>

      <MessageForm />
    </div>
  );
};

export default Contact;
