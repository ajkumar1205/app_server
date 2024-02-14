import { Elysia, t } from "elysia";
import { db } from "./db";
import { users, chats, messages, contacts } from "./utils/schema";


const app = new Elysia();

app.get("/", () => { 
  return { routes: [
      { type: "GET", path: "/", info : "Return this message"},
      { type: "POST", path: "/auth/sendotp", info : "Sends OTP to your given email"},
      { type: "POST", path: "/auth/verifyotp", info : "Verify your input OTP"},
      { type: "POST", path: "/auth/createuser", info : "Create a user's profile"}]
    };
  },
  { response : t.Object(
    { routes: t.Array( 
        t.Object(
          { type : t.String(), path : t.String(), info: t.String()}
        )
      )
    })
  }
);




app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
