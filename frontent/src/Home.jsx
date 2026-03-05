import Nevigation_menu from './Component/Nevigation_menu.jsx'
import Search from './Component/Search_box.jsx';
import Profile_profile_section from './Component/Profile_profile_section.jsx'
import Profile_chat_section from './Component/Profile_chat_section.jsx'
import Type from './Component/Type.jsx';
import User_msg from './Component/User_msg.jsx';
import Client_msg from './Component/Client_msg.jsx';

export default function Home() {
  return (
    <div className="flex w-full h-screen ">

     
      <div className="w-[35%] h-full flex flex-col p-1">

          
            <div className="w-full h-[10%] bg-gray-50">
                <Search/>
            </div>

            
            <div className="w-full h-[10%] bg-gray-50">
                <Nevigation_menu/>
            </div>

           
            <div className="w-full h-full ">
                <Profile_profile_section/>
                <Profile_profile_section/>
                <Profile_profile_section/>
                <Profile_profile_section/>
                <Profile_profile_section/>
                <Profile_profile_section/>
                <Profile_profile_section/>
            </div>

      </div>


      <div className="w-[65%] h-full  flex flex-col">

      
            <div className="w-full h-[10%] ">
                <Profile_chat_section/>
            </div>

      
            <div className="relative w-full h-full overflow-y-scroll">
                <User_msg/>
                <Client_msg/>
                <User_msg/>
                <Client_msg/>
                <User_msg/>
                <Client_msg/>
                <User_msg/>
                <Client_msg/>
                <User_msg/>
                <Client_msg/>
            
            </div>

            <div className="w-full h-[12%] p-2">
                <Type/>
            </div>

      </div>

    </div>
  );
}