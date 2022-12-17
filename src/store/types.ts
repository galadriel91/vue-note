interface SignUp {
    username: string;
    password: string;
    nickname: string;
}

interface Login {
    username: string;
    password: string;
}

interface PostItem {
    title: string;
    contents: string;
}

export { type SignUp, type Login, type PostItem };
