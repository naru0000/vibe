import { useRef, useCallback } from 'react'
import ReactPlayer from 'react-player'
import { usePlayerStore } from '../store/playerStore'
import { TitleBar } from './TitleBar'
import { MenuBar } from './MenuBar'
import { StatusBar } from './StatusBar'
import { ControlBar } from './ControlBar'

export function Player() {
  const playerRef = useRef<ReactPlayer>(null)

  const {
    playlist,
    currentTrackIndex,
    isPlaying,
    volume,
    played,
    setPlayed,
    setDuration,
  } = usePlayerStore()

  const currentTrack = playlist[currentTrackIndex]

  const handleProgress = useCallback((state: { played: number }) => {
    setPlayed(state.played)
  }, [setPlayed])

  const handleDuration = useCallback((duration: number) => {
    setDuration(duration)
  }, [setDuration])

  const handleSeek = useCallback((value: number) => {
    playerRef.current?.seekTo(value)
  }, [])

  return (
    <div className="w-full h-screen md:h-[90vh] md:max-h-[800px] md:max-w-md mx-auto shadow-2xl flex flex-col md:rounded-lg overflow-hidden">
      {/* 타이틀바 */}
      <TitleBar />

      {/* 메뉴바 */}
      <MenuBar />

      {/* 비디오 영역 */}
      <div className="flex-1 bg-black relative overflow-hidden">
        {currentTrack && (
          <ReactPlayer
            ref={playerRef}
            url={currentTrack.url}
            playing={isPlaying}
            volume={volume}
            onProgress={handleProgress}
            onDuration={handleDuration}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  rel: 0,
                }
              }
            }}
          />
        )}
      </div>

      {/* 상태바 */}
      <StatusBar />

      {/* 컨트롤바 */}
      <ControlBar played={played} onSeek={handleSeek} />
    </div>
  )
}
