export default function Type()
{
  return (
  <div className="w-full h-full flex items-center px-4 bg-gray-50">

    <div className="w-full flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border">

      <input
        type="text"
        placeholder="Type your message here"
        className="flex-1 px-3 py-2 outline-none text-sm placeholder-gray-400"
      />

      <button className="px-4 py-2 bg-gray-300 text-black text-sm rounded-lg 
                         hover:bg-gray-400 active:scale-95 transition">
        Send
      </button>

    </div>

  </div>
)
}