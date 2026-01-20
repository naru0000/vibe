import { usePlayerStore } from './store/playerStore'
import { CategorySelect } from './components/CategorySelect'
import { Player } from './components/Player'

function App() {
  const showCategorySelect = usePlayerStore((state) => state.showCategorySelect)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center md:p-4">
      {showCategorySelect ? <CategorySelect /> : <Player />}
    </div>
  )
}

export default App
