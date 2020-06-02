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

export interface ILandingPage extends IClassname{
    image: string,
    header: string
}