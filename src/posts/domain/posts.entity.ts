export interface PostEntityDT0 {
    user: string
    content: string
    token: string
}

export interface PostEntity extends PostEntityDT0 {
    uuid: string
}