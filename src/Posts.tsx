import {useEffect, useState} from "react";
import {IPost} from "./models/IPost";
import {getPosts} from "./services/api.service";
import Post from "./Post";

const Posts = () => {

    let [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, []);

    return <div>
        {
            posts.map(value => <Post {...value} key={value.id}/>)
        }
    </div>
}

export default Posts;