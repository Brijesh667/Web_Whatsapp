const Search_icon = new URL('../assets/Search_icon.png', import.meta.url).href
export default function Search()
{
    return(
       <div className="w-full h-full flex items-center px-4">

  <div className="w-full flex items-center gap-3 px-4 py-2 rounded-xl shadow-sm border">

    <img src={Search_icon} alt="Search" className="w-5 h-5 opacity-70" />

    <input
      type="text"
      placeholder="Search your chat here"
      className="w-full outline-none text-sm placeholder-gray-400"
    />

  </div>

</div>
    )
}