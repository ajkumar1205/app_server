import { Elysia, t } from "elysia";

export const chat = new Elysia({ name: "chat" })
    .ws("/:chatId", 
        { params: t.Object({ chatId: t.Number() }),
            body : t.Object({ message: t.String() }),
            // open(ws){
                // AS SOON AS THE WEBSOCKET OPENS, WE NEED TO GET ALL THE UNSEND
                // MESSAGE AND SEND IT TO THE USER, SO BASICALLY WE NEED A TABLE
                // FOR STORING THE UNSEND MESSAGES OF THE USER
            // },
            message(ws, { message }){
                ws.send("")
            }
        })