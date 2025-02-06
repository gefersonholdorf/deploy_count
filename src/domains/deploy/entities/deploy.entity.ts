export type TypeDeploy = 'BACK-END' | 'FRONT-END'

export interface DeployProps {
    id : number
    systemId : number
    personId : number
    type : TypeDeploy
    createdAt : Date
}

export class DeployEntity {

    private constructor(private)
}