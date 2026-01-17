# AI Luyện Thi - Intelligent IELTS Training Platform 🚀

**AI Luyện Thi** is a premium, AI-powered IELTS preparation platform designed to help learners master Reading, Listening, Writing, and Speaking skills. Built with a "Confidence-First" philosophy, it combines realistic exam simulations with gamified "Skill Boosters" to make practice engaging and effective.

![Platform Preview](https://placehold.co/1200x600/1e293b/ffffff?text=AI+Luyen+Thi+Platform)

## ✨ Key Features

### 🎧 Listening Module
*   **Daily Challenge**: Streak-based daily missions to build engagement.
*   **Shadowing Practice**: Interactive audio player with waveform recording and playback.
*   **Spelling Drills**: Rapid-fire input focus for catching tricky words.
*   **Distractor Training**: Learn to identify trap answers in MCQs.
*   **Accent Training**: interactive map to practice UK, US, And Aussie accents.

### 📖 Reading Module
*   **Speed Reading**: RSVP-style auto-scrolling text with configurable WPM.
*   **Weakness Focus**: Drills targeting specific question types (e.g., True/False/Not Given).
*   **Daily Practice**: Bite-sized articles with comprehension checks.
*   **Realistic Exam UI**: Split-screen layout optimized for long-form reading.

### ✍️ Writing Module
*   **Sentence Builder**: Gamified drag-and-drop syntax practice.
*   **Paragraph Logic**: Reordering exercises to master coherence and cohesion.
*   **Vocabulary Builder**: 3D flip-card interface for high-band lexical resources.
*   **Grammar Fix**: Interactive error correction editor.

### 🎤 Speaking Module
*   **Pronunciation IPA**: Interactive phonemic chart with mouth position visuals.
*   **Fluency Drills**: Random topic generator with Part 2 timer logic (1m prep / 2m speak).
*   **Video Shadowing**: Video-synced intonation practice.

### 🎮 Gamification & Analytics
*   **Leaderboard**: Competitive ranking with Daily, Weekly, and Monthly leagues.
*   **Progress Dashboard**: Holistic view of performance across all 4 skills including Band Score estimation.
*   **Practice Hub**: Centralized library for all drills and mock tests.
*   **Points System**: Earn rewards for consistency and high scores.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Alpha) with CSS Variables
-   **Language**: TypeScript
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Fonts**: Outfit (Headings), Inter (UI), Crimson Pro (Reading)

---

## 🏁 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/khanhnguyendev/ailuyenthi.git
    cd ailuyenthi
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000) to start practicing.

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── (dashboard)/        # Main app layout
│   │   ├── leaderboard/    # Ranking & Events
│   │   ├── practice/       # Centralized Drill Hub
│   │   ├── progress/       # Analytics Dashboard
│   │   ├── skills/         # Skill specific pages
│   │   │   ├── listening/  # 5+ Booster Sub-pages
│   │   │   ├── reading/    # 3+ Booster Sub-pages
│   │   │   ├── writing/    # 4+ Booster Sub-pages
│   │   │   └── speaking/   # 3+ Booster Sub-pages
│   │   └── points/         # Rewards system
│   └── layout.tsx          # Root
├── components/
│   ├── layout/             # TopNavbar, NavMenu, MobileNav
│   ├── referrals/          # Sharing & Invite system
│   └── ...
└── globals.css             # Tailwind @theme config
```

---

*Built with ❤️ for IELTS Learners.*
