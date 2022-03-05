import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header';
import './home.css';

export default function Home() {
  return (
    <>
    <Header />
    <div className="home">
        <Posts/>
        <Sidebar />
    </div>
    </>
  )
}
