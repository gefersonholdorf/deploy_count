export interface SystemProps {
    id ?: number
    name : string
}

export class SystemEntity {

    private constructor(private props : SystemProps) {}

    public static build(id : number, name : string) {
        return new SystemEntity({
            id, name
        })
    }

    public static with(props : SystemProps) {
        return new SystemEntity(props)
    }

    public get id() {
        return this.props.id
    }

    public get name() {
        return this.props.name
    }
}