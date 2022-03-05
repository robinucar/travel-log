import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
      src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">London</span>
        </div>  
          <span className="postTitle">
            Lorem ipsum dolor sit amet
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laboriosam quam ducimus 
        blanditiis mollitia sint ratione suscipit odio saepe laudantium, eius corporis facere quos, 
        eaque tempora iusto cupiditate quae perspiciatis?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laboriosam quam ducimus 
        blanditiis mollitia sint ratione suscipit odio saepe laudantium, eius corporis facere quos, 
        eaque tempora iusto cupiditate quae perspiciatis?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laboriosam quam ducimus 
        blanditiis mollitia sint ratione suscipit odio saepe laudantium, eius corporis facere quos, 
        eaque tempora iusto cupiditate quae perspiciatis?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laboriosam quam ducimus 
        blanditiis mollitia sint ratione suscipit odio saepe laudantium, eius corporis facere quos, 
        eaque tempora iusto cupiditate quae perspiciatis?
        </p>
    </div>

  )
}
