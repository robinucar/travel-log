import './posts.css'
import Post from '../post/Post'

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts && posts.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
    }).map(p =>(
        <Post post = {p} key ={p.id}/>
      ))}
    </div>
  )
}
