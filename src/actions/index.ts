import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";

import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "form",
        input: z.object({
            nombre: z.string().min(2),
            email: z.string().email(),
            telefono: z.string().min(10),
            comentarios: z.string().optional(),
        }),
        handler: async ({ nombre, email, telefono, comentarios }) => {
            console.log("Sending email...");
            const { data, error } = await resend.emails.send({
                from: "Contacto <contacto@updates.sealcode.com.mx>",
                to: ["andrestorresm001@gmail.com"],
                subject: "Solicitud de información",
                html: `<p>Cliente: ${nombre}</p>
                br/><p>Email: ${email}</p>
                <br/>
                <p>Teléfono: ${telefono}</p>
                <br/>
                <p>Comentarios: ${comentarios || "N/A"}</p>`,
            });

            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message,
                });
            }

            return data;
        },
    }),
    test: defineAction({
        handler: async () => {
            return { message: "Test action works!" };
        },
    }),
    sendContact: defineAction({
        accept: "form", // o "json"
        input: z.object({
            nombre: z.string().min(2),
            email: z.string().email(),
            telefono: z.string().min(10),
            comentarios: z.string().optional(),
        }),
        handler: async ({ nombre, email, telefono, comentarios }) => {
            // lógica del servidor
            console.log({ nombre, email, telefono, comentarios });
            return {
                ok: true,
            };
        },
    })
};