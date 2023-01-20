import { v4 } from 'uuid'

export class IdGenerator {
    public generate = (): string => {
        return v4()
    }
}