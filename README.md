# Vibe Coding - Windows Media Player Style Music Player

90년대 Windows XP 스타일의 Windows Media Player를 모방한 모바일 웹 음악 플레이어입니다.

## Features

- Windows XP Media Player 스타일 UI
- 6개 카테고리 기반 음악 선택 (노동요, 재즈, ASMR, 애니, 팝송, 가요)
- YouTube 영상 재생
- 재생/일시정지/정지/이전곡/다음곡 컨트롤
- 시크바 및 볼륨 조절
- 모바일 풀스크린 / 데스크톱 반응형 레이아웃
- Galmuri11 레트로 폰트 적용

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- Zustand (상태 관리)
- react-player (YouTube 재생)

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## TODO

- [ ] 카테고리 아이콘 이미지로 변경 (현재 이모지 사용 중)
- [ ] 음악 추천 알고리즘 개선 (YouTube 플레이리스트 연동 등)
- [ ] 플레이리스트 UI 추가 (현재 재생 목록 표시)
- [ ] 다크/라이트 테마 전환
- [ ] PWA 지원 (오프라인 사용)
