import { Elysia, t } from "elysia";
import { db } from "../db";
import { otps } from "../utils/schema";
import { eq } from "drizzle-orm";

export const verifyOTP = async (id: string, otp: number): Promise<boolean> => {
    const check = (await db.select({otp : otps.otp, time: otps.timeStamp}).from(otps).where(eq(otps.email, id)))[0];
    if(check.time!.getMilliseconds() + 60000> Date.now()) return false;
    return check.otp === otp ? true : false;
}