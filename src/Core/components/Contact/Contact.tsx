import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../../constants/emailjs.constants';
import './Contact.css'
import "react-toastify/ReactToastify.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

interface ContactForm {
    name: any;
    email: any;
    message: any;
}
export const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    const [blockForm, setBlockForm] = useState(false);
    const form = useRef<any>(null);
    const onSubmit = (data: any) => {
        emailjs.sendForm(emailConfig.SERVICE_ID, emailConfig.TEMPLATE_ID, form.current, emailConfig.PUBLIC_KEY)
        .then((result) => {
            reset();
            setBlockForm(true);
            toast.success('Mensaje enviado correctamente!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored"
            });
        }, (error) => {
            toast.success('Error al enviar el mensaje', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored"
            });
        });
    }
    useEffect(()=>{
        
    },[blockForm])
    return (
        <div id='form' className='w-full lg:w-1/4 mt-52 mb-20 mx-auto'>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <form onSubmit={handleSubmit(onSubmit)} ref={(e) => { form.current = e}}>
                <div className="pb-12 w-full">
                    <h2 className="text-3xl sm:mx-auto text-center font-bold color-primary title-section">CONTÁCTAME</h2>
                    <div className="mt-10 flex flex-col w-full gap-y-5">
                        <div className="">
                            <label htmlFor="first-name" className={(errors.user_name ? 'color-danger' : '') + " block pl-1 text-1xl font-semibold color-primary"}>
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="user_name"
                                    className={(errors.user_name ? 'error-input' : '') + " primary-input block w-full rounded-md py-1.5 sm:text-sm sm:leading-6 "}
                                    placeholder="Nombre Apellido..."
                                    {...register("user_name", { disabled: blockForm, required: 'El nombre es requerido' })}
                                />
                                {errors.user_name && <small role='alert' className='color-danger p-1'>{errors.user_name.message?.toString()}</small>}
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="email" className={(errors.user_email ? 'color-danger' : '') + " block text-1xl font-semibold color-primary "}>
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    id="user_email"
                                    className={(errors.user_email ? 'error-input' : '') + " primary-input block w-full rounded-md border-0 py-1.5  sm:text-sm sm:leading-6 "}
                                    placeholder="ejemplo@ejemplo.com"
                                    {...register("user_email", {
                                        disabled: blockForm,
                                        required: 'El email es requerido',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email invalido"
                                        }
                                    })}
                                />
                                {errors.user_email && <small role='alert' className='color-danger p-1'>{errors.user_email.message?.toString()}</small>}

                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="email" className={"block text-1xl font-semibold color-primary "}>
                                Mensaje
                            </label>
                            <div className="mt-2">
                                <textarea placeholder='Escribe algo...'
                                    {...register("user_message", {disabled: blockForm})}
                                    className={(errors.user_message ? 'error-input' : '') + " primary-input block w-full rounded-md  sm:text-sm sm:leading-6 "}></textarea>
                                {errors.user_message && <small role='alert' className='color-danger'>{errors.user_message.message?.toString()}</small>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto'>
                    <button className={((!isValid || blockForm) ? 'cta-invalid' : 'cta') + " w-full send-text"} type="submit">
                        <span className='text-2xl mx-auto font-bold flex gap-x-2'>ENVIAR
                            <FontAwesomeIcon icon={faPaperPlane} className='' />
                        </span>
                    </button>
                </div>

            </form>
        </div>
    );
};

