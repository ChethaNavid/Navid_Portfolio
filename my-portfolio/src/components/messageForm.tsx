"use client"

import React, { useState } from 'react'
import emailjs from "emailjs-com";

const MessageForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_PUBLIC_KEY as string
            )
            .then(
                () => {
                    alert("Message sent successfully");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error(error);
                    alert("Something went wrong");
                }
            );
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex gap-1 mb-2'>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    className='border border-gray-400 rounded-md w-full p-1'
                />

                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='border border-gray-400 rounded-md w-full p-1'
                />
            </div>

            <textarea 
                name='message'
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                className='border border-gray-400 rounded-md w-full p-1'
            />

            <button 
                type='submit'
                className='border rounded-md text-center w-full bg-gray-200 text-gray-700 p-1 text-sm font-medium cursor-pointer hover:bg-gray-300'
            >
                Send Email
            </button>
        </form>
    </div>
  )
}

export default MessageForm