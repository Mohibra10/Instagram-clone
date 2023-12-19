import TopNav from '../components/TopNav.js';
import BottomNav from '../components/BottomNav.js';
import StoryPanel from '../components/StoryPanel.js'
import Post from '../components/Post.js'
import './Home.css'
function Home(){
  return (
     <>
      < TopNav/>
       <div className='body'>
        <StoryPanel/>
        <Post/>
        </div>
      < BottomNav/>
    </>
    )
}

export default Home;