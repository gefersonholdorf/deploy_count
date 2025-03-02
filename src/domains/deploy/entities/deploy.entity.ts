export type TypeDeploy = 'BACK-END' | 'FRONT-END' | 'AMBOS'

export interface DeployProps {
    id ?: number
    systemId : number
    personId : number
    type : TypeDeploy
    createdAt ?: Date
}

export class DeployEntity {

    private constructor(private props : DeployProps) {}

    public static build(id : number, systemId : number, personId : number, type : TypeDeploy, createdAt : Date) {
        return new DeployEntity({
            id, systemId, personId, type,
            createdAt: createdAt || new Date()
        })
    }

    public static with(props : DeployProps) {
        return new DeployEntity(props)
    }

    public get id() {
        return this.props.id
    }

    public get systemId() {
        return this.props.systemId
    }

    public get personId() {
        return this.props.personId
    }

    public get type() {
        return this.props.type
    }

    public get createdAt() {
        return this.props.createdAt
    }
}