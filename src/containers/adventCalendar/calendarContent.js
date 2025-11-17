export const calendarContent = [
  {
    day: 1,
    title: ":has() Pseudo-Class",
    description: "The :has() pseudo-class is a powerful new addition to CSS that allows you to select an element based on its children or descendants.",
    browserSupport: ["Chrome 105+", "Firefox 121+", "Safari 15.4+", "Edge 105+"],
    links: [
      { label: "📖 MDN Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:has" },
      { label: "📺 Watch Tutorial", url: "https://youtu.be/OGJvhpoE8b4" }
    ],
    code: `.container:has(.child) {
  border: 2px solid blue;
}

/* Style a form when an input is focused */
.form:has(input:focus) {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}`,
    language: "css",
  },
  {
    day: 2,
    title: "CSS Custom Highlight API",
    description: "The CSS Custom Highlight API provides a mechanism for styling arbitrary text ranges on a document by using JavaScript to create the ranges, and CSS to style them.",
    browserSupport: ["Chrome 105+", "Firefox Nightly", "Safari 17.2+", "Edge 105+"],
    links: [
      { label: "📖 MDN Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::highlight" },
      { label: "📺 Watch Tutorial", url: "https://www.youtube.com/watch?v=1qldqyT324o" }
    ],
    code: `::highlight(custom-highlight) {
  background-color: #ff0;
  color: black;
}

/* Use JavaScript to create ranges:
   const range = new Range();
   CSS.highlights.set('custom-highlight', 
     new Highlight(range)); */`,
    language: "css",
  },
  {
    day: 3,
    title: ":user-valid and :user-invalid",
    description: "These pseudo-class selectors help improve the user experience of input validation by giving feedback about mistakes only after a user has changed input.",
    browserSupport: ["Chrome 119+", "Firefox 88+", "Safari 16.5+", "Edge 119+"],
    code: `input:user-invalid {
  border-color: red;
}

input:user-valid {
  border-color: green;
}

/* No stateful JavaScript needed to track
   which inputs the user has interacted with! */`,
    language: "css",
  },
  {
    day: 4,
    title: "Popover API",
    description: "The Popover API provides a native way to create popups, tooltips, and other floating UI elements with proper keyboard navigation and focus management.",
    browserSupport: ["Chrome 114+", "Firefox 125+", "Safari 17+", "Edge 114+"],
    links: [
      { label: "📖 MDN Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API" },
      { label: "📺 Watch Tutorial", url: "https://www.youtube.com/watch?v=0_wgyB64a8I" }
    ],
    code: `/* HTML:
<button popovertarget="my-popover">
  Open Popover
</button>

<div id="my-popover" popover>
  <p>I am a popover with more info.</p>
</div> */

[popover] {
  border: 2px solid #3b82f6;
  padding: 1rem;
}`,
    language: "css",
  },
  {
    day: 5,
    title: "Custom <select> Styling",
    description: "Experimental: new ways to style select menus. Use appearance: base-select to opt-in to a new, customizable select experience.",
    browserSupport: ["Chrome Experimental", "Edge Experimental"],
    links: [
      { label: "📖 Chrome Article", url: "https://developer.chrome.com/blog/new-in-web-ui-io-2024#selectmenu" }
    ],
    code: `select {
  appearance: base-select;
  padding: 0.5rem 1rem;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  font-size: 1rem;
}`,
    language: "css",
  },
  {
    day: 6,
    title: "Anchor Positioning",
    description: "Using anchor positioning, the browser can handle the logic to tether a positioned element to one or more anchor elements. Perfect for tooltips!",
    browserSupport: ["Chrome 125+", "Edge 125+"],
    links: [
      { label: "📖 MDN Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning" },
      { label: "📖 Chrome Article", url: "https://developer.chrome.com/blog/anchor-positioning-api" },
      { label: "📺 Watch Tutorial", url: "https://www.youtube.com/watch?v=ri8mBLXK9gE" }
    ],
    code: `.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  bottom: anchor(top);
  left: anchor(center);
  translate: -50% 0;
}`,
    language: "css",
  },
  {
    day: 7,
    title: "Container Queries",
    description: "Style elements based on their container's size, not the viewport. Game-changer for component-based design!",
    browserSupport: ["Chrome 105+", "Firefox 110+", "Safari 16+"],
    code: `.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}`,
    language: "css",
  },
  {
    day: 8,
    title: "CSS Layers (@layer)",
    description: "Control specificity with more granularity by creating explicit layers of styles.",
    browserSupport: ["Chrome 99+", "Firefox 97+", "Safari 15.4+", "Edge 99+"],
    code: `@layer base, components, utilities;

@layer base {
  h1 { font-size: 2rem; }
}

@layer components {
  .card { padding: 1rem; }
}

@layer utilities {
  .text-center { text-align: center; }
}

/* Lower layers have less specificity */`,
    language: "css",
  },
  {
    day: 9,
    title: "CSS Masonry Layout",
    description: "Create Pinterest-style masonry layouts using CSS Grid's upcoming masonry value. Still in discussion.",
    browserSupport: ["Firefox 77+ (flag)", "Safari TP"],
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill, 
    minmax(14rem, 1fr)
  );
  grid-template-rows: masonry;
  gap: 1rem;
}

/* Experimental - enable in Firefox with:
   layout.css.grid-template-masonry-value.enabled */`,
    language: "css",
  },
  {
    day: 10,
    title: "color-mix() Function",
    description: "The color-mix() functional notation takes two color values and returns the result of mixing them in a given colorspace by a given amount.",
    browserSupport: ["Chrome 111+", "Firefox 113+", "Safari 16.2+", "Edge 111+"],
    code: `li:nth-child(1) {
  background-color: color-mix(
    in oklab, 
    #a71e14 0%, 
    white
  );
}

.button {
  background: color-mix(in srgb, blue 50%, red);
}`,
    language: "css",
  },
  {
    day: 11,
    title: "scroll-snap-type",
    description: "The scroll-snap-type CSS property is set on a scroll container, opting it into scroll snapping.",
    browserSupport: ["Chrome 69+", "Firefox 99+", "Safari 11+", "Edge 79+"],
    code: `.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}`,
    language: "css",
  },
  {
    day: 12,
    title: "@scope At-Rule",
    description: "The @scope at-rule enables you to select elements in specific DOM subtrees, targeting elements precisely without overly-specific selectors.",
    browserSupport: ["Chrome 118+", "Firefox 128+ (flag)", "Safari 17.4+", "Edge 118+"],
    code: `@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }
  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }
  a {
    color: plum;
  }
}`,
    language: "css",
  },
  {
    day: 13,
    title: "Trigonometric Functions",
    description: "Use mathematical functions like sin, cos, and tan in CSS for advanced calculations.",
    browserSupport: ["Chrome 111+", "Firefox 108+", "Safari 15.4+", "Edge 111+"],
    code: `/* Single angle values */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* Single number values */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* Other values */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));`,
    language: "css",
  },
  {
    day: 14,
    title: "Gradient Text Effect",
    description: "Eye-catching gradient text for headings and special elements using background-clip.",
    code: `.gradient-text {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}`,
    language: "css",
  },
  {
    day: 15,
    title: "@font-palette-values",
    description: "The @font-palette-values at-rule allows you to customize the default values of font-palette created by the font-maker.",
    browserSupport: ["Chrome 101+", "Firefox 107+", "Safari 14.4+", "Edge 101+"],
    code: `@font-palette-values --identifier {
  font-family: Bixa;
  base-palette: 0;
  override-colors:
    0 #FF0000,
    1 #00FF00,
    2 #0000FF;
}

.my-class {
  font-palette: --identifier;
}`,
    language: "css",
  },
  {
    day: 16,
    title: "Field Sizing",
    description: "Without field-sizing, you had to guess input sizes or use JavaScript. Now it's a CSS one-liner to create content-sized inputs!",
    browserSupport: ["Chrome 123+", "Edge 123+"],
    code: `textarea, select, input {
  field-sizing: content;
}

/* The input will now grow/shrink based
   on the content inside it! */

input[type="text"] {
  field-sizing: content;
  min-width: 100px;
}`,
    language: "css",
  },
  {
    day: 17,
    title: "interpolate-size",
    description: "The interpolate-size CSS property allows you to enable animations and transitions between a length-percentage value and intrinsic size values like auto.",
    browserSupport: ["Chrome 129+", "Edge 129+"],
    code: `:root {
  interpolate-size: allow-keywords;
}

.element {
  height: auto;
  transition: height 0.3s ease;
}

.element.expanded {
  height: 500px;
}

/* Now animating from auto to fixed height works! */`,
    language: "css",
  },
  {
    day: 18,
    title: "Glass Morphism Effect",
    description: "Create stunning frosted glass effects for modern UI designs using backdrop-filter.",
    code: `.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}`,
    language: "css",
  },
  {
    day: 19,
    title: "Aspect Ratio Property",
    description: "Maintain perfect aspect ratios without padding hacks! Great for responsive images and videos.",
    code: `.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.avatar {
  aspect-ratio: 1;
  width: 64px;
  border-radius: 50%;
}

.card-image {
  aspect-ratio: 4 / 3;
  object-fit: cover;
}`,
    language: "css",
  },
  {
    day: 20,
    title: "Fluid Typography with clamp()",
    description: "Responsive text sizing with clamp() - no media queries needed! Scales smoothly between min and max values.",
    code: `h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}

p {
  font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
  line-height: 1.6;
}

.container {
  padding: clamp(1rem, 3vw, 3rem);
}`,
    language: "css",
  },
  {
    day: 21,
    title: "CSS Grid Auto-Fit",
    description: "Responsive grids that adapt without media queries using auto-fit. Cards automatically wrap to new rows!",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  );
  gap: 1.5rem;
}

/* Cards resize and wrap automatically! */`,
    language: "css",
  },
  {
    day: 22,
    title: "CSS 3D Card Flip",
    description: "Interactive 3D card flip effect for revealing content using transform-style: preserve-3d.",
    code: `.card-flip {
  perspective: 1000px;
}

.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-flip:hover .card-inner {
  transform: rotateY(180deg);
}

.card-back {
  transform: rotateY(180deg);
}`,
    language: "css",
  },
  {
    day: 23,
    title: "Custom Scrollbar Styling",
    description: "Beautiful custom scrollbars to match your design aesthetic using ::-webkit-scrollbar pseudo-elements.",
    code: `::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg, 
    #667eea, 
    #764ba2
  );
  border-radius: 5px;
}`,
    language: "css",
  },
  {
    day: 24,
    title: "Focus-Visible for Accessibility",
    description: "Better focus indicators for keyboard navigation only. Improves accessibility without affecting mouse users!",
    code: `button:focus {
  outline: none;
}

button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

/* Shows outline only for keyboard navigation */`,
    language: "css",
  },
];
