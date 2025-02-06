import z from "zod"

export const createDeploySchema = z.object({
    systemId: z.number(),
    personId: z.number(),
    type: z.string()
})