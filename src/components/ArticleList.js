import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articlePost = posts.map((post)=> {
        return <a key={post.id}><Article title={post.title} date={post.date}  preview={post.preview}/></a> 
    })
    return (
        <main>
            {articlePost}
        </main>
  
    )

}



export default ArticleList;

