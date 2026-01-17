# AI Luyện Thi - Intelligent IELTS Training Platform

**AI Luyện Thi** is a premium, AI-powered IELTS preparation platform designed to help learners master Reading, Listening, Writing, and Speaking skills. Built with a "Confidence-First" philosophy, it combines realistic exam simulations with anxiety-reducing UX patterns.

### 📚 Comprehensive Skill Modules

#### 📖 Reading
- **Paper-Like Experience**: Optimized typography (`Crimson Pro`) for comfortable long-form reading.
- **Exam Realism**: Split-screen layout with passage and questions side-by-side.
- **Smart Tools**: Highlight, annotate, and quick-navigate between questions.

#### 🎧 Listening
- **Audio Pulse Visualization**: Ambient animations to anchor the listening experience.
- **Exam Controls**: Strict playback rules in "Exam Mode" vs. flexible controls in "Practice Mode".
- **Bento-Grid Dashboard**: Quick access to Parts 1-4 and daily challenges.

#### ✍️ Writing
- **Typing Focus**: A distraction-free editor with live word counting and time tracking.
- **Improvement Roadmap**: Visual step-by-step guides to reach the next band score.
- **Performance Snapshot**: detailed breakdown of Task Achievement, Coherence, Lexical, and Grammar.

#### 🎤 Speaking
- **Anxiety Reduction**: "Breathing" microphone animations to lower test stress.
- **Fluency Analysis**: Real-time feedback on pauses, fillers, and intonation.
- **Confidence Roadmap**: A journey focused on small wins to build speaking courage.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Alpha) with CSS Variables
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Outfit (Headings), Inter (UI), Crimson Pro (Reading)

## 🏁 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/khanhnguyendev/ailuyenthi.git
    cd ailuyenthi
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000) to start practicing.

## 📂 Project Structure

```
src/
├── app/
│   ├── (auth)/             # Login & Signup pages
│   ├── (dashboard)/        # Main learning interface
│   │   ├── skills/         # Skill specific pages
│   │   │   ├── reading/    # Reading dashboard & test
│   │   │   ├── writing/    # Writing dashboard & editor
│   │   │   ├── listening/  # Listening dashboard & player
│   │   │   └── speaking/   # Speaking dashboard & recorder
│   │   └── profile/        # User settings
│   └── layout.tsx          # Root layout & Metadata
├── components/
│   ├── layout/             # Sidebar, TopNav
│   ├── skills/             # Reusable skill components
│   └── ui/                 # Design system primitives
└── globals.css             # Tailwind @theme configuration
```

## 🤝 Contribution

This project is currently in active development.

---
*Built with ❤️ for IELTS Learners.*
