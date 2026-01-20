import { usePlayerStore } from '../store/playerStore'

export function StatusBar() {
  const { isPlaying, playlist, currentTrackIndex } = usePlayerStore()
  const currentTrack = playlist[currentTrackIndex]

  const status = isPlaying
    ? `Playing: ${currentTrack?.title || 'Unknown'}`
    : 'Ready'

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-300 px-3 py-1 text-sm text-gray-700 border-t border-gray-400">
      {status}
    </div>
  )
}
