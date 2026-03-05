export default function Type()
{
  return (
  <div className="w-full h-full flex items-center px-4 bg-gray-100">

    <div className="w-full flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border">

      <input
        type="text"
        placeholder="Type your message here"
        className="flex-1 px-3 py-2 outline-none text-sm placeholder-gray-400"
      />

      <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg 
                         hover:bg-blue-600 active:scale-95 transition">
        Send
      </button>

    </div>

  </div>
)
}