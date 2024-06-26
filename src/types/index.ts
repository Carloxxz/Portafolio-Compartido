import { ReactElement } from "react"

export type iconData = {
    name: string
    url: string
    icon: ReactElement
    alt: string
}

export type iconsData = {
    [key: string]: iconData[]
}