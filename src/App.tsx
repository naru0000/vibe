import { usePlayerStore } from './store/playerStore'
import { CategorySelect } from './components/CategorySelect'
import { Player } from './components/Player'
import xpWallpaper from './assets/xp-bliss.jpg'

function App() {
  const showCategorySelect = usePlayerStore((state) => state.showCategorySelect)

  return (
    <div
      className="app-background min-h-screen flex items-center justify-center md:p-4"
      style={{ '--xp-wallpaper': `url(${xpWallpaper})` } as React.CSSProperties}
    >
      {showCategorySelect ? <CategorySelect /> : <Player />}
    </div>
  )
}

export default App
