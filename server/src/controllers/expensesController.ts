import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (req:Request, res:Response)=> {
try {
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
        orderBy: {
            date: "desc"
        }
    });
    const expenseByCategorySummary=expenseByCategorySummaryRaw.map((expense)=> {
        return (
            {...expense,
                amount: expense.amount.toString()
            }
        )
    })
    res.status(200).json(expenseByCategorySummary);
} catch (error) {
    res.status(500).json({message: "Error retrieving data"})
}
}