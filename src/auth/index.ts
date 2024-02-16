import { Elysia, t } from "elysia";
import { saveOTP } from "./otpRequest";
import { verifyOTP } from "./otpVerification";


export const auth = new Elysia({ name: "auth" })
    .post("/sendotp", async ({ body : { email }}) =>  {
        const otp = await saveOTP(email);
        return { 
                msg : `The email is successfully sent to ${email}`,
                otp: otp
                };

    }, { body : t.Object({ email : t.String()})})
    .post("/verifyotp", async ({ body : { email, otp}}) => {

        const verified = await verifyOTP(email, otp);
        return { verification: verified ? "Successful" : "Unsuccessful" };
    }, 
    {body: t.Object({ email : t.String(), otp: t.Number()})})
    .get("/", () => "This is the get")