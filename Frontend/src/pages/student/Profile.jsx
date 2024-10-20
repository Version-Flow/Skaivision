import { useEffect } from 'react';
import Config from '../../../helpers/config';

const Profile = () => {

  useEffect(()=>{
    var titles = "Profile";
    Config[0].currentPage = titles
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
    
  },[])


  return (
    <div>
      <h1>Profile Which contains Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia voluptatibus ea cumque explicabo laborum quia maxime voluptatem ex optio beatae minus, deleniti provident consectetur architecto quaerat asperiores nisi quisquam!</h1>
    </div>
  );
};

export default Profile;
