import { otps } from "../utils/schema";
import { db } from "../db";
import { eq } from "drizzle-orm";

export const generateOTP = (): number => {
    let num = Math.random()*987654321;
    return Math.floor(num%1000000);
}

export const saveOTP = async (id: string) => {
    const otp = generateOTP();
    const should = await db.select().from(otps).where(eq(otps.email, id));
    if(should.length==0)
        await db.insert(otps).values({ email: id, otp: otp});
    else 
        await db.update(otps).set({otp: otp}).where(eq(otps.email, id));
    return otp;
}
