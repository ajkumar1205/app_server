import { getRandomSeed } from "bun:jsc";
import { otps } from "../utils/schema";
import { db } from "../db";

const generateOTP = (): number => {
    let num = getRandomSeed();
    return num%1000000;
}

const saveOTP = async (id: number) => {
    await db.insert(otps).values({ userId: id, otp: generateOTP()})
}