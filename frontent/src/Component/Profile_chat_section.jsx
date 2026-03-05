const Audio_icon = new URL('../assets/Audio_icon.png',import.meta.url).href
const Video_icon = new URL('../assets/Video_icon.png',import.meta.url).href
const client_img = new URL('../assets/m_im14.png',import.meta.url).href

export default function Profile_chat_section()
{
    return (
  <div className="w-full h-full flex items-center justify-between px-4 bg-gray-50 border-b">

   
    <div className="flex items-center gap-3 overflow-hidden">

      <img
        src={client_img}
        alt="picture"
        className="w-12 h-12 rounded-full object-cover"
      />

      <div className="flex flex-col overflow-hidden">
        <h2 className="text-sm font-semibold text-gray-800 truncate">
          Kartavey Sharma
        </h2>
        <p className="text-xs text-gray-500 truncate">
          last seen 12:00 PM
        </p>
      </div>

    </div>

    <div className="flex items-center h-[100%] w-[30%] justify-around p-4 ">

      <img
        src={Audio_icon}
        alt="Audio call"
        className="w-8 h-8 cursor-pointer opacity-70 hover:opacity-100"
      />

      <img
        src={Video_icon}
        alt="Video call"
        className="w-10 h-10 cursor-pointer opacity-70 hover:opacity-100"
      />

    </div>

  </div>
)
}