import z from "zod"

export const CreatePersonSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(3).max(40)
})