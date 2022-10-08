import React,{useState} from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import EditProfileForm from './EditProfileForm';
import ProfileBio from './ProfileBio';
import './UserProfile.css';

const UserProfile = () => {
  const {id} = useParams();
  const users = useSelector(state=>state.usersReducers);
  const currentUser = useSelector(state=>state.currentuserReducer); //The person who is logged in website
  const currentProfile = users.filter((user)=>user._id === id)[0]; //Selected profile by login person
  
  const [Switch, setSwitch] = useState(false)
  
//   const handleEdit = ()=>{

//   }
  
  // console.log(currentProfile);
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2">
            <section>
                <div className="user-details-container">
                   <div className='user-details'>
                     <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                       {currentProfile?.name.charAt(0).toUpperCase()}
                     </Avatar>
                     <div className="user-name">
                        <h1>{currentProfile.name}</h1>
                        <p>Joined {moment(currentProfile.joinedOn).fromNow()}</p>
                     </div>
                   </div>
                   {
                    currentUser?.result._id === id && (
                        <button type='button' onClick={()=>setSwitch(true)} className='edit-profile-btn'>EDIT PROFILE</button>
                    )
                   }
                </div>
                <>
                 {
                    Switch ? (<EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>) : (<ProfileBio currentProfile={currentProfile}/>)
                 }
                </>
            </section>
        </div>
    </div>
  )
}

export default UserProfile