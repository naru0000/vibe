import { usePlayerStore } from '../store/playerStore'

interface ControlBarProps {
  played: number
  onSeek: (value: number) => void
}

export function ControlBar({ played, onSeek }: ControlBarProps) {
  const {
    isPlaying,
    volume,
    duration,
    play,
    pause,
    stop,
    prevTrack,
    nextTrack,
    setVolume,
    setPlayed,
  } = usePlayerStore()

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const currentTime = formatTime(played * duration)
  const totalTime = formatTime(duration)

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setPlayed(value) // UI 즉시 반영
    onSeek(value)    // 플레이어에 seek 명령
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value))
  }

  return (
    <div className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 p-3 rounded-b-lg">
      {/* 시크바 */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-white text-xs w-10">{currentTime}</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={played}
          onChange={handleSeekChange}
          className="flex-1 h-1"
        />
        <span className="text-white text-xs w-10 text-right">{totalTime}</span>
      </div>

      {/* 컨트롤 버튼들 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* 재생/일시정지 버튼 */}
          <button
            onClick={isPlaying ? pause : play}
            className="w-12 h-12 rounded-full bg-gradient-to-b from-blue-300 to-blue-500 border-2 border-blue-700 flex items-center justify-center hover:from-blue-200 hover:to-blue-400 shadow-lg"
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-1.5 h-5 bg-white rounded-sm" />
                <div className="w-1.5 h-5 bg-white rounded-sm" />
              </div>
            ) : (
              <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1" />
            )}
          </button>

          {/* 정지 버튼 */}
          <button
            onClick={stop}
            className="w-8 h-8 rounded bg-gradient-to-b from-blue-300 to-blue-500 border border-blue-700 flex items-center justify-center hover:from-blue-200 hover:to-blue-400"
          >
            <div className="w-3 h-3 bg-white rounded-sm" />
          </button>

          {/* 이전 트랙 */}
          <button
            onClick={prevTrack}
            className="w-8 h-8 rounded bg-gradient-to-b from-blue-300 to-blue-500 border border-blue-700 flex items-center justify-center hover:from-blue-200 hover:to-blue-400"
          >
            <div className="flex items-center">
              <div className="w-1 h-3 bg-white" />
              <div className="w-0 h-0 border-r-[8px] border-r-white border-y-[6px] border-y-transparent" />
            </div>
          </button>

          {/* 다음 트랙 */}
          <button
            onClick={nextTrack}
            className="w-8 h-8 rounded bg-gradient-to-b from-blue-300 to-blue-500 border border-blue-700 flex items-center justify-center hover:from-blue-200 hover:to-blue-400"
          >
            <div className="flex items-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent" />
              <div className="w-1 h-3 bg-white" />
            </div>
          </button>
        </div>

        {/* 볼륨 컨트롤 */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1"
          />
        </div>
      </div>
    </div>
  )
}
