export interface Post{
    id: string;
    userId: string;
    title: string;
    text: string;
    isNew: boolean;
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