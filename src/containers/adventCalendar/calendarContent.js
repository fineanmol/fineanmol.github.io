export const calendarContent = [
  {
    day: 1,
    title: "CSS :has() Selector Magic",
    description: "The revolutionary :has() selector lets you style parent elements based on their children. Perfect for modern layouts!",
    code: `.card:has(img) {
  padding: 0;
  overflow: hidden;
}

.form:has(input:focus) {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}`,
    language: "css",
  },
  {
    day: 2,
    title: "Container Queries",
    description: "Style elements based on their container's size, not the viewport. Game-changer for component-based design!",
    code: `.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}`,
    language: "css",
  },
  {
    day: 3,
    title: "Smooth Color Transitions",
    description: "Create buttery-smooth color animations with color-mix() and modern gradients.",
    code: `.button {
  background: color-mix(in srgb, #3b82f6 80%, #8b5cf6);
  transition: background 0.3s ease;
}

.button:hover {
  background: color-mix(in srgb, #8b5cf6 80%, #3b82f6);
}`,
    language: "css",
  },
  {
    day: 4,
    title: "CSS Snowflake Animation",
    description: "Create beautiful falling snowflakes with pure CSS animations.",
    code: `.snowflake {
  position: fixed;
  top: -10px;
  color: white;
  animation: fall linear infinite;
}

@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}`,
    language: "css",
  },
  {
    day: 5,
    title: "Fluid Typography",
    description: "Responsive text sizing with clamp() - no media queries needed!",
    code: `h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}

p {
  font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
  line-height: 1.6;
}`,
    language: "css",
  },
  {
    day: 6,
    title: "Glass Morphism Effect",
    description: "Create stunning frosted glass effects for modern UI designs.",
    code: `.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
    language: "css",
  },
  {
    day: 7,
    title: "CSS Grid Auto-Fit",
    description: "Responsive grids that adapt without media queries using auto-fit.",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  );
  gap: 1.5rem;
}`,
    language: "css",
  },
  {
    day: 8,
    title: "Gradient Text Effect",
    description: "Eye-catching gradient text for headings and special elements.",
    code: `.gradient-text {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
    language: "css",
  },
  {
    day: 9,
    title: "Scroll Snap Points",
    description: "Create smooth, native-feeling scroll experiences with scroll-snap.",
    code: `.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
}

.scroll-item {
  scroll-snap-align: center;
  flex-shrink: 0;
}`,
    language: "css",
  },
  {
    day: 10,
    title: "Custom Scrollbar Styling",
    description: "Beautiful custom scrollbars to match your design aesthetic.",
    code: `::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #667eea, #764ba2);
  border-radius: 5px;
}`,
    language: "css",
  },
  {
    day: 11,
    title: "Aspect Ratio Property",
    description: "Maintain perfect aspect ratios without padding hacks!",
    code: `.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.avatar {
  aspect-ratio: 1;
  width: 64px;
  border-radius: 50%;
}`,
    language: "css",
  },
  {
    day: 12,
    title: "CSS Variables with Calc",
    description: "Dynamic spacing and sizing with CSS custom properties and calc().",
    code: `:root {
  --spacing-unit: 0.5rem;
  --max-width: 1200px;
}

.container {
  padding: calc(var(--spacing-unit) * 4);
  max-width: var(--max-width);
  margin: 0 auto;
}`,
    language: "css",
  },
  {
    day: 13,
    title: "Hover Glow Effect",
    description: "Add magical hover effects with box-shadow transitions.",
    code: `.card {
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.3);
}`,
    language: "css",
  },
  {
    day: 14,
    title: "Neon Text Effect",
    description: "Create stunning neon-style text with multiple text-shadows.",
    code: `.neon {
  color: #fff;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #0ff,
    0 0 40px #0ff,
    0 0 80px #0ff;
}`,
    language: "css",
  },
  {
    day: 15,
    title: "CSS Filters for Images",
    description: "Transform images with powerful CSS filter effects.",
    code: `.image {
  filter: grayscale(0);
  transition: filter 0.3s;
}

.image:hover {
  filter: grayscale(100%) contrast(120%);
}

.vintage {
  filter: sepia(60%) contrast(80%) brightness(90%);
}`,
    language: "css",
  },
  {
    day: 16,
    title: "Flexbox Gap Property",
    description: "Consistent spacing in flex layouts without margin hacks.",
    code: `.flex-container {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}`,
    language: "css",
  },
  {
    day: 17,
    title: "Gradient Borders",
    description: "Beautiful gradient borders using background tricks.",
    code: `.gradient-border {
  position: relative;
  background: #fff;
  border-radius: 8px;
  padding: 2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: #fff;
  border-radius: 6px;
}`,
    language: "css",
  },
  {
    day: 18,
    title: "CSS 3D Card Flip",
    description: "Interactive 3D card flip effect for revealing content.",
    code: `.card-flip {
  perspective: 1000px;
}

.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-flip:hover .card-inner {
  transform: rotateY(180deg);
}`,
    language: "css",
  },
  {
    day: 19,
    title: "Custom Checkboxes",
    description: "Beautiful custom checkbox styling for better UX.",
    code: `input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  transition: all 0.2s;
}

input[type="checkbox"]:checked {
  background: #3b82f6;
  background-image: url("data:image/svg+xml,...");
}`,
    language: "css",
  },
  {
    day: 20,
    title: "CSS Animations with @keyframes",
    description: "Create smooth, performant animations with keyframes.",
    code: `@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.bounce {
  animation: bounce 1s ease-in-out infinite;
}`,
    language: "css",
  },
  {
    day: 21,
    title: "Focus-Visible for Accessibility",
    description: "Better focus indicators for keyboard navigation only.",
    code: `button:focus {
  outline: none;
}

button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`,
    language: "css",
  },
  {
    day: 22,
    title: "CSS Masking",
    description: "Create complex shapes and reveal effects with mask-image.",
    code: `.masked {
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    transparent 100%
  );
}

.circular-mask {
  mask-image: radial-gradient(circle, black 60%, transparent 70%);
}`,
    language: "css",
  },
  {
    day: 23,
    title: "Smooth Scroll Behavior",
    description: "Native smooth scrolling for better user experience.",
    code: `html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}`,
    language: "css",
  },
  {
    day: 24,
    title: "CSS Counters",
    description: "Automatic numbering without JavaScript using CSS counters.",
    code: `.numbered-list {
  counter-reset: item;
}

.numbered-list li::before {
  counter-increment: item;
  content: counter(item) ". ";
  font-weight: bold;
  color: #3b82f6;
}`,
    language: "css",
  },
];

