const user_pic = new URL("../assets/m_im11.png", import.meta.url).href
export default function Profile_profile_section() {
  return (
    <div className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer transition">

     
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src={user_pic}
          alt="picture"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col overflow-hidden w-full">

        <h2 className="text-sm font-semibold text-gray-800 truncate">
          Amit Sagar
        </h2>

        <p className="text-sm text-gray-500 truncate">
          Hello Bhai mai thik hu aap btao aap kese ho
        </p>

      </div>

    </div>
  );
}