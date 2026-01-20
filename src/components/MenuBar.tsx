export function MenuBar() {
  const menuItems = ['File', 'View', 'Play', 'Tools', 'Help']

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 px-1 py-0.5 flex items-center border-b border-gray-300">
      {menuItems.map((item) => (
        <button
          key={item}
          className="px-3 py-0.5 text-sm hover:bg-blue-500 hover:text-white rounded"
        >
          {item}
        </button>
      ))}
    </div>
  )
}
