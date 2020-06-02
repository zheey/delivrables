interface IClassname {
    className?: string
}

export interface IImage extends IClassname {
    image: string,
    alt: string
}

export interface IText extends IClassname{
    content: string
}

export interface IButton extends IClassname{
    label: string
}

export interface IMenuCard extends IClassname{
    cardImage: string,
    imageAlt?: string,
    menuDescription: string,
    menuHeader: string,
    price: string
}