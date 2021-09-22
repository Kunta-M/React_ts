import {IPost} from "./models/IPost";
import React, {MouseEvent} from "react";
import{Link} from "react-router-dom";

const Post = (props: IPost) => {

    let {body, id, title, userId} = props;

    return <div>
        <h3>{title}</h3>
        <p>{body}</p>
        {/*<button onClick={(e: MouseEvent<HTMLButtonElement>): void =>{*/}
        {/*    console.log(e.pageX);*/}
        {/*}}>Info</button>*/}

        <Link to={'/posts/' + id}>Info</Link>
    </div>
}

export default Post;