import { usePlayerStore } from './store/playerStore'
import { CategorySelect } from './components/CategorySelect'
import { Player } from './components/Player'
import xpWallpaper from './assets/xp-bliss.jpg'

function App() {
  const showCategorySelect = usePlayerStore((state) => state.showCategorySelect)

  return (
    <div
      className="app-background min-h-screen bg-black flex items-center justify-center md:p-4 relative"
      style={{ '--xp-wallpaper': `url(${xpWallpaper})` } as React.CSSProperties}
    >
      {/* 플레이어 */}
      <div className="relative z-10">
        {showCategorySelect ? <CategorySelect /> : <Player />}
      </div>
    </div>
  )
}

export default App
