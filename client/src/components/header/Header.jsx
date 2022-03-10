import './header.css';

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleLg">WanderPost</span>
        </div>
        <div>
        <img 
        className="headerImg" 
        src="https://www.allinclusivemarketing.com/wp-content/uploads/2017/11/AIM-Travel-Header-1.jpg" 
        alt="" />
        </div>
    </div>
  )
}
