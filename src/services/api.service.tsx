import axios from "axios";
import {IPost} from "../models/IPost";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const getPosts = () => {
    return instance.get<IPost[]>('/posts')
}

export {getPosts};