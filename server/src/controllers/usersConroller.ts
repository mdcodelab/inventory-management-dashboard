import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (req:Request, res: Response)=> {
try {
   const users=await prisma.users.findMany({})
    res.status(200).json(users);
} catch (error) {
    res.status(500).json({message: "Error getting users"})
}
}