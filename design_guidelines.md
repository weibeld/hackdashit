# Design Guidelines: Hacker Simulator

## Design Approach

**Reference-Based: Terminal/Hacker Aesthetic**
Draw inspiration from classic hacker movie interfaces and modern terminal applications. The design should evoke the feeling of a command-line interface while maintaining modern web usability standards.

**Key Design Principles:**
- Immersive terminal experience with dark backgrounds
- High-contrast green/cyan text on dark backgrounds
- Retro-futuristic aesthetic mixing 80s hacker movies with modern UI polish
- Single-page focused tool interface - no traditional landing page needed
- Minimalist and distraction-free to emphasize the core interaction

## Typography

**Primary Font:** `'Courier New', Courier, monospace` - Classic terminal font for all text
**Alternative:** `'Space Mono'` or `'Roboto Mono'` from Google Fonts for enhanced readability

**Hierarchy:**
- Page Title: 2.5rem (40px), font-weight: 700, letter-spacing: 0.1em, uppercase
- Input Label: 1rem (16px), font-weight: 600, uppercase, letter-spacing: 0.05em
- Progress Messages: 0.875rem (14px), font-weight: 400
- Success Message: 1.75rem (28px), font-weight: 700, uppercase
- Body Text: 1rem (16px), font-weight: 400

## Layout System

**Container Structure:**
- Full viewport height centered layout (min-h-screen with flex centering)
- Main card/terminal window: max-width: 600px with generous padding
- Mobile-first responsive approach

**Spacing Scale (Tailwind units):**
- Primary spacing: 4, 6, 8 (p-4, p-6, p-8)
- Component gaps: 4, 6 (gap-4, gap-6)
- Section spacing: 8, 12 (mt-8, mb-12)

**Border Treatment:**
- Terminal window border: 2px solid with neon glow effect
- Border radius: Minimal (rounded-lg for subtle corners)
- Input fields: 1px border with focus glow

## Component Library

### Core Layout
- **Terminal Window Container**: Card-style container with subtle shadow and border glow, centered on dark background
- **Background**: Solid dark color with subtle noise texture or scanline effect overlay

### Input Components
- **URL Input Field**: Full-width monospace input with bright border on focus, placeholder text in dimmed color
- **Hack Button**: Large, prominent with uppercase text, rectangular shape, width matches input field
- Button states: Default has subtle glow, hover brightens, active state shows press effect

### Progress System
- **Progress Bar Container**: Full-width track with rounded corners
- **Progress Fill**: Animated fill with gradient and glow effect
- **Status Messages**: Display above progress bar, typewriter effect for text reveal
- **Progress Stages**: 
  - "Initializing scan..." (0-20%)
  - "Bypassing firewall..." (20-40%)
  - "Cracking encryption..." (40-60%)
  - "Accessing mainframe..." (60-80%)
  - "Downloading data..." (80-95%)
  - "Finalizing hack..." (95-100%)

### Success Display
- **Success Card**: Appears after completion with border glow pulse animation
- **Checkmark Icon**: Large glowing checkmark or terminal success symbol
- **Success Message**: Bold, uppercase, centered text
- **Reset Action**: Small button/link to "Hack another URL"

### Visual Accents
- **Scanline Overlay**: Subtle horizontal lines across entire interface (5-10% opacity)
- **Glow Effects**: Applied to borders, buttons, and active elements using CSS box-shadow
- **Flicker Animation**: Very subtle on title text for retro terminal effect

## Animations

**Progress Bar Animation:**
- Duration: 5-7 seconds total
- Easing: Linear with slight acceleration at start
- Progress text updates every stage transition
- Glowing pulse effect on progress bar fill

**Success Reveal:**
- Fade in + scale up effect (0.95 to 1.0 scale)
- Duration: 600ms with ease-out
- Accompanied by brief border glow pulse

**Button Interactions:**
- Hover: Brightness increase (110%) and glow intensification (200ms)
- Active: Scale down (0.98) with immediate feedback
- Disabled state during progress: Reduced opacity (50%)

**Text Effects:**
- Progress messages: Typewriter reveal (50ms per character)
- Success message: Fade in with slight upward movement

## Responsive Behavior

**Desktop (>768px):**
- Terminal window: 600px max-width, centered
- Generous padding: p-12 on terminal container
- Full progress bar visibility

**Mobile (<768px):**
- Terminal window: Full width with side margins (mx-4)
- Reduced padding: p-6 on terminal container
- Adjusted font sizes (title: 2rem, success: 1.5rem)
- Stack all elements vertically with consistent gap-6

## Accessibility
- High contrast text (WCAG AAA compliant)
- Focus indicators on all interactive elements with visible glow
- ARIA labels for progress bar and status updates
- Keyboard navigation: Enter key triggers hack button
- Screen reader announcements for progress stages

This design creates an immersive, playful hacker experience that's both nostalgic and modern, with clear visual feedback throughout the "hacking" process.