'use client'

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { authenticate } from "@/actions";


export const LoginForm = () => {
    const [state, dispatch] = useFormState(authenticate, undefined);
    

    useEffect(() => {
        if (state === 'Success') {
            window.location.replace('/blog/admin');
        }

    }, [state]);

    return (
        <form action={dispatch} className="flex column justify-center align-center bg-blue">
            <input type="email" className="input" placeholder="Correo electrónico" name="email" />
            <input type="password" className="input" placeholder="Contraseña" name="password" />
            <div>
                <button>Ingresar</button>
            </div>
        </form>
    )
}
