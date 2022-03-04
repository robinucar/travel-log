import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti accusantium voluptas dolores cupiditate adipisci, alias eaque doloribus at aspernatur, nesciunt quos blanditiis quia maiores? Harum laboriosam id quaerat labore.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">MOST VISITED CITIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">New York</li>
                <li className="sidebarListItem">London</li>
                <li className="sidebarListItem">Paris</li>
                <li className="sidebarListItem">Rome</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
