import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import './Post.css'
import Avatar from './Avatar.js'
function Post(){
  return(
    <div className='post__wrapper'>
        <div className='post__top'>
          <div className='post__user'>
               < Avatar/>
               <h4>Mohibra</h4>
          </div>
          <div className='post__options'>
              ....
          </div>
        </div>
        <div className='post__item'>
        </div>
        <div className='post__buttons'>
            <div className='post__metrics'>
                 <FavoriteBorderIcon/>
                 <AddIcon/>
                 <SendOutlinedIcon/>
            </div>
            <div className='post__bookmark'>
               bookmark
            </div>
        </div>
        <div className='post__details'>
           <h3>2,200 likes</h3>
           <p className='post__body'>
           Everyone should at least know to code
           </p>
           <p className='comments'>view comments</p>
           <p className='date'>2 hours ago</p>
        </div>
        
        
                <div className='post__top'>
          <div className='post__user'>
               < Avatar/>
               <h4>Mohibra</h4>
          </div>
          <div className='post__options'>
              ....
          </div>
        </div>
        <div className='post__item'>
        </div>
        <div className='post__buttons'>
            <div className='post__metrics'>
                 <FavoriteBorderIcon/>
                 <AddIcon/>
                 <SendOutlinedIcon/>
            </div>
            <div className='post__bookmark'>
               bookmark
            </div>
        </div>
        <div className='post__details'>
           <h3>2,200 likes</h3>
           <p className='post__body'>
           Everyone should at least know to code
           </p>
           <p>view comments</p>
           <p>2 hours ago</p>
        </div>
    </div>
    )
}


export default Post;