import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import './BottomNav.css'
import NavOption from './NavOption.js'
function BottomNav(){
return (
  <div className='bottom__nav'>
     <HomeIcon/>
     <SearchIcon/>
    <MovieOutlinedIcon/>
    <SendOutlinedIcon/>
    <AccountCircleIcon/>
  </div>
  )
}

export default BottomNav;