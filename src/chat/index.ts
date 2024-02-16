import { Elysia, t } from "elysia";

export const chat = new Elysia({ name: "chat" })
    .ws("/:email", { params: t.Object({ email: t.String() }),
                    headers: t.Object({  })
    })