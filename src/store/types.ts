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
    __v: number;
    _id: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    title: string;
    contents: string;
}

interface AddItem {
    title: string;
    contents: string;
}

interface UpdateItem {
    _id: string;
    title: string;
    contents: string;
}

export {
    type SignUp,
    type Login,
    type PostItem,
    type UpdateItem,
    type AddItem,
};
