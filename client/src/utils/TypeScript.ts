import { ChangeEvent, FormEvent } from "react"


export type InputChange = ChangeEvent<HTMLInputElement>
export type FormSubmit = FormEvent<HTMLFormElement>


export interface IUserLogin {
   account: string,
   password: string
}

export interface IParams {
    page: string
    slug: string
}
