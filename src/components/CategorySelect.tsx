import { categories, CategoryType, usePlayerStore } from '../store/playerStore'

export function CategorySelect() {
  const selectCategory = usePlayerStore((state) => state.selectCategory)

  return (
    <div className="w-full h-screen md:h-[80vh] md:max-h-[700px] md:max-w-xl mx-auto flex flex-col md:rounded-lg overflow-hidden shadow-2xl">
      {/* 타이틀바 */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-2 py-1 flex items-center justify-between md:rounded-t-lg flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 via-green-400 to-blue-500 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
          </div>
          <span className="text-white text-sm font-bold drop-shadow-md">
            Windows Media Player
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-5 h-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm flex items-center justify-center hover:from-blue-300 hover:to-blue-500 border border-blue-700">
            <div className="w-2 h-0.5 bg-white" />
          </button>
          <button className="w-5 h-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm flex items-center justify-center hover:from-blue-300 hover:to-blue-500 border border-blue-700">
            <div className="w-2 h-2 border border-white" />
          </button>
          <button className="w-5 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-sm flex items-center justify-center hover:from-red-300 hover:to-red-500 border border-red-700">
            <span className="text-white text-xs font-bold">✕</span>
          </button>
        </div>
      </div>

      {/* 메인 영역 */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 flex-1 flex flex-col justify-center">
        <h2 className="text-white text-center text-lg font-bold mb-2">
          카테고리를 선택하세요
        </h2>
        <p className="text-gray-400 text-center text-sm mb-6">
          원하는 장르를 선택하면 랜덤 음악이 재생됩니다
        </p>

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => selectCategory(category.id as CategoryType)}
              className="flex flex-col items-center p-5 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg border-2 border-blue-400 hover:from-blue-400 hover:to-blue-600 hover:border-blue-300 transition-all active:scale-95 shadow-lg"
            >
              <span className="text-4xl mb-2">{category.icon}</span>
              <span className="text-white text-sm font-bold">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 하단 바 */}
      <div className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 p-3 md:rounded-b-lg flex-shrink-0">
        <p className="text-white/70 text-center text-xs">
          Vibe Coding Music Player
        </p>
      </div>
    </div>
  )
}
