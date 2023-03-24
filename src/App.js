import React, {useRef, useState} from "react";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 1', body: 'Description 1'},
        {id: 3, title: 'JavaScript 2', body: 'Description 2'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title="Список постов JS"/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
