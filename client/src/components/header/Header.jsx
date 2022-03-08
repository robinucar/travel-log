import './header.css';

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleLg">Travel Log</span>
        </div>
        <div>
        <img 
        className="headerImg" 
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" 
        alt="" />
        </div>
    </div>
  )
}
