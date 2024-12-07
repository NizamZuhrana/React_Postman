const Sidebar = ({toggleSidebar, isSidebarOpen }) => {
    return ( 
        <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
        <button
            onClick={toggleSidebar}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </div>
        <ul className="mt-10 space-y-4 px-4">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Services</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-900 text-white p-4 flex items-center">
        <button
            onClick={toggleSidebar}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </header>
      </div>
    </div>
     );
}
 
export default Sidebar;