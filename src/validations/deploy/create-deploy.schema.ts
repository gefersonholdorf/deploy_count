import z from "zod"

export const createDeploySchema = z.object({
    systemId: z.number(),
    personId: z.number(),
    type: z.enum(['BACK-END', 'FRONT-END', 'AMBOS'])
})