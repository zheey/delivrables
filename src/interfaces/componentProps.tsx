import { ReactNode, ReactChild, ReactElement } from "react";

export interface IClassname {
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
    label: string,
    onClick?: (event: React.MouseEvent) => void
}

export interface IMenuCard extends IClassname{
    cardImage: string,
    imageAlt?: string,
    menuDescription: string,
    menuHeader: string,
    price: string,
    toogleMenuDetails: (event: React.MouseEvent) => void
}

export interface IInputWrapper {
    children: ReactNode,
    className?: string
}

export interface INavbar {
    onLoginClick: (event: React.MouseEvent) => void,
    onSignupClick: (event: React.MouseEvent) => void
}

export interface IClick {
    onClick?: (event: React.MouseEvent) => void
}

export interface ILogin extends IClick{
    onSignUp: (event: React.MouseEvent) => void
}

export interface ISignup extends IClick{
    onLogin: (event: React.MouseEvent) => void
}

export interface IComponent {
    children: ReactNode,
    className?: string
}

export interface ILandingPageWrapper{
    children: ReactNode
}

export interface IMenuWrapper {
    children: ReactNode,
    showNavigation?: boolean, 
    headerSubText?: string, 
    headerText: string,
    className?: string
}

export interface IMenu {
    toogleMenuDetails: (event: React.MouseEvent) => void
}