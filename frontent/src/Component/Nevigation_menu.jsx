export default function Nevigation_menu()
{
    return (
    <div className="w-full h-full p-4 flex items-center justify-center gap-10">

        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg shadow-md 
                        transition active:scale-90 active:bg-gray-300">
        All
        </button>

        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg shadow-md 
                        transition active:scale-90 active:bg-gray-300">
        Unread
        </button>

        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg shadow-md 
                        transition active:scale-90 active:bg-gray-300">
        Group
        </button>

        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg shadow-md 
                        transition active:scale-90 active:bg-gray-300">
        Muted
        </button>

    </div>
    )

}