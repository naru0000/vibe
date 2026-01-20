import { create } from 'zustand'

export interface Track {
  id: string
  title: string
  artist: string
  url: string // YouTube URL
}

export type CategoryType = 'work' | 'jazz' | 'asmr' | 'anime' | 'pop' | 'kpop'

export interface Category {
  id: CategoryType
  name: string
  icon: string // 임시 이모지 아이콘
}

export const categories: Category[] = [
  { id: 'work', name: '노동요', icon: '⚒️' },
  { id: 'jazz', name: '재즈', icon: '🎷' },
  { id: 'asmr', name: 'ASMR', icon: '🎧' },
  { id: 'anime', name: '애니', icon: '📚' },
  { id: 'pop', name: '팝송', icon: '🎤' },
  { id: 'kpop', name: '가요', icon: '🇰🇷' },
]

// 카테고리별 샘플 플레이리스트 (YouTube URL)
export const categoryPlaylists: Record<CategoryType, Track[]> = {
  work: [
    { id: 'work1', title: 'Lofi Hip Hop Radio', artist: 'ChilledCow', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk' },
    { id: 'work2', title: 'Coffee Shop Ambience', artist: 'Relaxing', url: 'https://www.youtube.com/watch?v=h2zkV-l_TbY' },
    { id: 'work3', title: 'Study With Me', artist: 'TheStrive', url: 'https://www.youtube.com/watch?v=arj7oStGLkU' },
  ],
  jazz: [
    { id: 'jazz1', title: 'Jazz Relaxing Music', artist: 'Jazz Cafe', url: 'https://www.youtube.com/watch?v=Dx5qFachd3A' },
    { id: 'jazz2', title: 'Smooth Jazz', artist: 'Dr. SaxLove', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'jazz3', title: 'Jazz Piano', artist: 'Cafe Music BGM', url: 'https://www.youtube.com/watch?v=fEvM-OUbaKs' },
  ],
  asmr: [
    { id: 'asmr1', title: 'Rain Sounds', artist: 'Nature', url: 'https://www.youtube.com/watch?v=mPZkdNFkNps' },
    { id: 'asmr2', title: 'Fireplace Sounds', artist: 'Relaxing', url: 'https://www.youtube.com/watch?v=L_LUpnjgPso' },
    { id: 'asmr3', title: 'Ocean Waves', artist: 'Nature Sounds', url: 'https://www.youtube.com/watch?v=WHPEKLQID4U' },
  ],
  anime: [
    { id: 'anime1', title: 'Anime OST Mix', artist: 'Various', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'anime2', title: 'Studio Ghibli Music', artist: 'Joe Hisaishi', url: 'https://www.youtube.com/watch?v=aBkEj7KL8sI' },
    { id: 'anime3', title: 'Anime Piano Collection', artist: 'Animenz', url: 'https://www.youtube.com/watch?v=sEQf5lcnj_o' },
  ],
  pop: [
    { id: 'pop1', title: 'Top Hits 2024', artist: 'Various', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'pop2', title: 'Pop Music Mix', artist: 'Various', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk' },
    { id: 'pop3', title: 'Best Pop Songs', artist: 'Various', url: 'https://www.youtube.com/watch?v=RgKAFK5djSk' },
  ],
  kpop: [
    { id: 'kpop1', title: 'K-Pop Playlist', artist: 'Various', url: 'https://www.youtube.com/watch?v=gdZLi9oWNZg' },
    { id: 'kpop2', title: 'K-Pop Hits', artist: 'Various', url: 'https://www.youtube.com/watch?v=UOxkGD8qRB4' },
    { id: 'kpop3', title: 'K-Pop Mix', artist: 'Various', url: 'https://www.youtube.com/watch?v=WPdWvnAAurg' },
  ],
}

interface PlayerState {
  // 카테고리 선택 상태
  selectedCategory: CategoryType | null
  showCategorySelect: boolean

  // 플레이리스트
  playlist: Track[]
  currentTrackIndex: number

  // 재생 상태
  isPlaying: boolean
  volume: number
  played: number // 0 ~ 1
  duration: number

  // 카테고리 액션
  selectCategory: (category: CategoryType) => void
  goBackToCategories: () => void

  // 플레이리스트 액션
  setPlaylist: (tracks: Track[]) => void
  addTrack: (track: Track) => void
  removeTrack: (id: string) => void

  setCurrentTrackIndex: (index: number) => void
  nextTrack: () => void
  prevTrack: () => void

  play: () => void
  pause: () => void
  stop: () => void
  togglePlay: () => void

  setVolume: (volume: number) => void
  setPlayed: (played: number) => void
  setDuration: (duration: number) => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  selectedCategory: null,
  showCategorySelect: true,
  playlist: [],
  currentTrackIndex: 0,
  isPlaying: false,
  volume: 0.8,
  played: 0,
  duration: 0,

  selectCategory: (category) => {
    const tracks = categoryPlaylists[category]
    // 랜덤하게 섞기
    const shuffled = [...tracks].sort(() => Math.random() - 0.5)
    set({
      selectedCategory: category,
      showCategorySelect: false,
      playlist: shuffled,
      currentTrackIndex: 0,
      played: 0,
      isPlaying: true,
    })
  },

  goBackToCategories: () => {
    set({
      selectedCategory: null,
      showCategorySelect: true,
      isPlaying: false,
      played: 0,
    })
  },

  setPlaylist: (tracks) => set({ playlist: tracks, currentTrackIndex: 0 }),

  addTrack: (track) => set((state) => ({
    playlist: [...state.playlist, track]
  })),

  removeTrack: (id) => set((state) => ({
    playlist: state.playlist.filter((t) => t.id !== id)
  })),

  setCurrentTrackIndex: (index) => {
    const { playlist } = get()
    if (index >= 0 && index < playlist.length) {
      set({ currentTrackIndex: index, played: 0, isPlaying: true })
    }
  },

  nextTrack: () => {
    const { currentTrackIndex, playlist } = get()
    if (playlist.length > 1) {
      const nextIndex = (currentTrackIndex + 1) % playlist.length
      set({ currentTrackIndex: nextIndex, played: 0, isPlaying: true })
    }
  },

  prevTrack: () => {
    const { currentTrackIndex, playlist } = get()
    if (playlist.length > 1) {
      const prevIndex = currentTrackIndex === 0
        ? playlist.length - 1
        : currentTrackIndex - 1
      set({ currentTrackIndex: prevIndex, played: 0, isPlaying: true })
    }
  },

  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  stop: () => set({ isPlaying: false, played: 0 }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),
  setPlayed: (played) => set({ played }),
  setDuration: (duration) => set({ duration }),
}))
