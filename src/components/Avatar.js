import './StoryPanel.css'
function Avatar({image,name}){
  return (
        <div className='user__info'>
           <div className='avatar'>{image}</div>
           <h4>{name}</h4>
        </div>
    )
}

export default Avatar;