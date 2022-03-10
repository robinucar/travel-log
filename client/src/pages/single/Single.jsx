import SidebarPost from "../../components/sidebarPost/SidebarPost"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SidebarPost/>
    </div>
  )
}
