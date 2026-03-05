export default function User_msg()
{
return (
  <div className=" w-[70%] relative right-0 p-3 bg-gray-100 rounded-lg shadow-sm">

    {/* Username */}
    <h1 className="text-sm font-semibold text-gray-800">
      Amit Sagar
    </h1>

    {/* Message */}
    <p className="text-sm text-gray-700 mt-1 pr-12">
      hello bhia kesa hia mai thik hu aur bta kya hal chal
    </p>

    {/* Time */}
    <span className="absolute bottom-2 right-3 text-xs text-gray-500">
      12:00 pm
    </span>

  </div>
)
}