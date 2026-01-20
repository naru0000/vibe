import { usePlayerStore } from '../store/playerStore'

export function TitleBar() {
  const goBackToCategories = usePlayerStore((state) => state.goBackToCategories)

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 px-2 py-1 flex items-center justify-between rounded-t-lg">
      {/* 왼쪽: 뒤로가기 + 아이콘 + 제목 */}
      <div className="flex items-center gap-2">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={goBackToCategories}
          className="w-6 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm flex items-center justify-center hover:from-blue-300 hover:to-blue-500 border border-blue-700"
          title="카테고리로 돌아가기"
        >
          <span className="text-white text-sm">←</span>
        </button>

        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 via-green-400 to-blue-500 flex items-center justify-center">
          <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
        </div>
        <span className="text-white text-sm font-bold drop-shadow-md">
          Windows Media Player
        </span>
      </div>

      {/* 오른쪽: 윈도우 버튼들 */}
      <div className="flex items-center gap-1">
        {/* 최소화 */}
        <button className="w-5 h-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm flex items-center justify-center hover:from-blue-300 hover:to-blue-500 border border-blue-700">
          <div className="w-2 h-0.5 bg-white" />
        </button>
        {/* 최대화 */}
        <button className="w-5 h-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm flex items-center justify-center hover:from-blue-300 hover:to-blue-500 border border-blue-700">
          <div className="w-2 h-2 border border-white" />
        </button>
        {/* 닫기 */}
        <button className="w-5 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-sm flex items-center justify-center hover:from-red-300 hover:to-red-500 border border-red-700">
          <span className="text-white text-xs font-bold">✕</span>
        </button>
      </div>
    </div>
  )
}
