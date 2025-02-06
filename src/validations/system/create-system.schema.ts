import z from "zod"

export const createSystemSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(3).max(40)
})