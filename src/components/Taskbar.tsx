import { useState, useEffect } from 'react'

export function Taskbar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-700 via-blue-500 to-blue-400 flex items-center justify-between px-1 border-t-2 border-blue-300 z-50">
      {/* 시작 버튼 */}
      <button className="flex items-center gap-1 bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold px-3 py-1 rounded-r-lg border-l-0 border border-green-800 shadow-md italic">
        <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-red-500 via-yellow-400 via-green-500 to-blue-500 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-br from-red-400 via-yellow-300 via-green-400 to-blue-400" />
        </div>
        <span className="text-sm">start</span>
      </button>

      {/* 퀵 런치 구분선 */}
      <div className="h-6 w-px bg-blue-300 mx-2" />

      {/* 열린 프로그램 (Windows Media Player) */}
      <div className="flex-1 flex items-center">
        <button className="flex items-center gap-2 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 text-white px-3 py-1 rounded border border-blue-700 shadow-inner max-w-[200px]">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 via-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
            <div className="w-0 h-0 border-l-[4px] border-l-white border-y-[3px] border-y-transparent ml-0.5" />
          </div>
          <span className="text-xs truncate">Windows Media Player</span>
        </button>
      </div>

      {/* 시스템 트레이 */}
      <div className="flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 px-3 py-1 rounded-l border-l border-blue-400">
        {/* 볼륨 아이콘 */}
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        </svg>

        {/* 시계 */}
        <span className="text-white text-xs font-bold">
          {formatTime(time)}
        </span>
      </div>
    </div>
  )
}
