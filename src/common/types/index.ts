export interface Post{
    id: string;
    title: string;
    text: string;
}

export interface User {
    id: string;
    login: string;
    password: string;
}

export interface Message {
    type: any;
    isOpen: boolean;
    text: string;
}