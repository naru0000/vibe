import { usePlayerStore } from './store/playerStore'
import { CategorySelect } from './components/CategorySelect'
import { Player } from './components/Player'
import { Taskbar } from './components/Taskbar'
import xpWallpaper from './assets/xp-bliss.jpg'

function App() {
  const showCategorySelect = usePlayerStore((state) => state.showCategorySelect)

  return (
    <div
      className="app-background min-h-screen flex items-center justify-center md:p-4 md:pb-14"
      style={{ '--xp-wallpaper': `url(${xpWallpaper})` } as React.CSSProperties}
    >
      {showCategorySelect ? <CategorySelect /> : <Player />}

      {/* 작업 표시줄 - 태블릿/PC에서만 표시 */}
      <div className="hidden md:block">
        <Taskbar />
      </div>
    </div>
  )
}

export default App
