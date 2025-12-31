import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";

import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "form",
        input: z.object({
            nombre: z.string({ message: "El nombre es requerido" }).min(2),
            email: z.string({ message: "El correo es requerido" }).email(),
            telefono: z.string({ message: "El teléfono es requerido" }).min(10, { message: "El teléfono debe tener al menos 10 caracteres" }),
            comentarios: z.string().optional(),
        }),
        handler: async ({ nombre, email, telefono, comentarios }) => {
            console.log("Sending email...");
            const { data, error } = await resend.emails.send({
                from: "SealCode <contacto@sealcode.com.mx>",
                to: [email],
                template: {
                    id: 'user_template',
                    variables: {
                        name: nombre
                    },
                },
            });

            await resend.emails.send({
                from: "SealCode <contacto@sealcode.com.mx>",
                to: [import.meta.env.ADMIN_EMAIL],
                template: {
                    id: 'admin_template',
                    variables: {
                        name: nombre,
                        client_email: email,
                        phone: telefono,
                        comments: comentarios!
                    },
                },
            })

            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message,
                });
            }

            return data;
        },
    }),

};