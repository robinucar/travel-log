import { useEffect, useState } from "react";
import Posts from '../../components/posts/Posts'
import Header from '../../components/header/Header';
import './home.css';
import Search from '../../components/Search/Search'
import axios from 'axios'
import { useLocation } from "react-router-dom";

export default function Home() {

  const [posts,setPosts] = useState([]);
  const {search} = useLocation()
  const [input, setInput] = useState('');
  const [postsList, setPostsList] = useState();
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)

      console.log(res.data, 'checking')

      setPostsList(res.data)
    }
    fetchPosts()
  },[search])


  const updateInput = async (input) => {
     const filtered = postsList.filter(posts => {
      return posts.desc.toLowerCase().includes(input.toLowerCase()) || posts.title.toLowerCase().includes(input.toLowerCase()) 
     })
     setInput(input);
     setPosts(filtered);
  }
 
  return (
    <>
    <Search
       input={input} 
       onChange={updateInput}
    />
    <Header />
    <div className="home">
        <Posts posts ={posts}/>
    </div>
    </>
  )
}
