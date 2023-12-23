'use client'
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import { useForm } from "useform-simple-hook";

const formData = {
    nombre: "",
    email: "",
    description: ''
};

interface formData {
    nombre?: string,
    email?: string,
    description?: string
}

export const ContactForm = () => {
    const { formState, onInputChange, onResetForm } = useForm(formData);
    const {
        nombre,
        email,
        description
    }: formData = formState;

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        send("1", "contact", formState, "FeU-M-AMi2VrHWfO5")
            .then((response) => {
                onResetForm();
                Swal.fire(
                    "¡El mensaje se ha enviado!",
                    "Pronto me estaré comunicando contigo...",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salió mal!",
                    footer: "Intenta de nuevo más tarde",
                });
            });
    };

    return (
        <form action="/"
            method="POST"
            onSubmit={onSubmit} className="flex column gap-5 mt-20">
            <input type="text" className="input" placeholder="Nombre" name="nombre"
                value={nombre}
                onChange={onInputChange}
                required />
            <input type="text" className="input" placeholder="Correo electrónico" name="email"
                value={email}
                onChange={onInputChange}
                required />
            <textarea className="input" style={{ resize: 'none', minHeight: 100 }} placeholder="Mensaje..." name="description"
                value={description}
                onChange={onInputChange}
                required></textarea>
            <button className="no-border bg-black white-text p-10 radius-30 mt-10" style={{ border: 0 }}>Enviar ahora</button>
        </form>
    )
}
