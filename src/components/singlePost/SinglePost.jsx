import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Dummy Name</b></span>
          <span className="singlePostDate">I hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quas incidunt illum libero beatae earum culpa nostrum provident, nam dolorum odit voluptatibus consectetur quam! Obcaecati fugiat provident ipsum vel repudiandae.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quas incidunt illum libero beatae earum culpa nostrum provident, nam dolorum odit voluptatibus consectetur quam! Obcaecati fugiat provident ipsum vel repudiandae.
        </p>
      </div>
    </div>
  )
}
