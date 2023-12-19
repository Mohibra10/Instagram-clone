import './StoryPanel.css'
import Avatar from './Avatar.js'
function StoryPanel(){
  return (
    <div className='story__panel'>
        <Avatar 
        image="Gloria"
        name="Gloria"
        />
        <Avatar 
        image="Fathu"
        name="Fathu"
        />
       <Avatar 
        image="Hamdan"
        name="Hamdan"
        /> 

    </div>
    )
}

export default StoryPanel;