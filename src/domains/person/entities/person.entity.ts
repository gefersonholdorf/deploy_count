export interface PersonProps {
    id : number
    name : string
}

export class PersonEntity {

    private constructor(private props : PersonProps) {}

    public static build(id : number, name : string) {
        return new PersonEntity({
            id, name
        })
    }

    public static with(props : PersonProps) {
        return new PersonEntity(props)
    }

    public get id() {
        return this.props.id
    }

    public get name() {
        return this.props.name
    }
}