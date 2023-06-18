export interface ISuperhero {
    id: number
    nickname: string
    realName: string
    originDescription: string
    superpowers: string
    catchPhrase: string
    images: string[]
}

export interface ICreateSuperhero {
    nickname: string
    realName: string
    originDescription: string
    superpowers: string
    catchPhrase: string
}