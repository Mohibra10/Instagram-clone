
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './TopNav.css';
function TopNav (){
  return (
<div className='top__nav'>
 {/* left side Instagram */}
 <div className='left'>
      <h4>Instagram</h4>
      < ExpandMoreIcon/>
 </div>
 { /* right side Add post, likes */}
  <div className='right'>
      <AddIcon className='add__icon'/>
      <FavoriteBorderIcon/>
 </div>
    
</div>
    )
}

export default TopNav;