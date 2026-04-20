# Design System: Clarity from Complexity

## 1. Overview & Creative Direction
The current direction is a dark, premium UX portfolio with a clear "clarity from complexity" story and a stronger practical implementation than the earlier concept draft.

The live design in `code.html` is built around three ideas:
- **Precision:** clean structure, strong hierarchy, and restrained spacing.
- **Atmosphere:** dark surfaces, cyan glow, orange heat accents, and soft glass layers.
- **Vibe coding:** the portfolio should communicate that design and implementation sit close together. It should feel technically fluent without looking like a developer template.

This is no longer a purely conceptual "cosmic laboratory" system. The implemented direction is a **dark cinematic portfolio UI** with subtle product-design energy, clear section flow, and a more grounded presentation.

---

## 2. Implementation Surface
The current page is implemented in `code.html` using:
- **Tailwind via CDN** for layout, spacing, and utility styling.
- **Inline Tailwind config** for custom semantic colors and fonts.
- **Small custom CSS layer** for visual behaviors like glass panels, magnetic buttons, glow, and particle texture.

Design decisions should therefore prefer:
- utility-first layout changes in markup
- semantic token reuse from the Tailwind config
- only a thin custom CSS layer for effects that utilities do not express well

Avoid introducing a second competing visual system inside the same page.

---

## 3. Color System
The active palette is already defined in the Tailwind config and should remain the source of truth.

### Core Tokens
- **Base background:** `surface` `#101418`
- **Deep section background:** `surface-container-lowest` `#0b0e13`
- **Raised surfaces:** `surface-container-low`, `surface-container-high`, `surface-container-highest`
- **Primary accent:** `primary-container` `#00d4ff`
- **Readable highlight:** `primary` `#a8e8ff`
- **Warm contrast:** `secondary-container` `#b83900`
- **Body text:** `on-surface` `#e0e2e8`
- **Muted text:** `on-surface-variant` `#bbc9cf`

### Color Rules
- Use cyan as the main signal color for structure, interaction, and glow.
- Use orange as an accent, not a default primary action color.
- Keep dark surfaces layered tonally rather than switching to heavy hard borders.
- Favor translucent overlays, blurred glow, and tonal separation over flat blocks.

---

## 4. Typography
The page currently uses three families with clear roles.

### Roles
- **Space Grotesk:** hero titles, section headlines, strong labels.
- **Manrope:** body copy and supporting information.
- **JetBrains Mono:** micro-labels, metadata, tags, and footer-style technical accents.

### Typography Rules
- Headlines should feel compact, high-contrast, and editorial.
- Body text should stay readable and neutral, not over-styled.
- Mono text should be used sparingly as a technical accent.
- Gradient emphasis should be reserved for one or two focal phrases, not applied broadly.

---

## 5. Layout & Composition
The current composition is large-scale and cinematic rather than dense.

### Structure
- **Hero:** two-column layout with text left and portrait right.
- **Projects:** stacked horizontal case cards with image plus written outcome.
- **About / Process / Strengths:** modular sections using cards, lists, and metric blocks.
- **Contact:** large, centered CTA panel with supporting contact details.

### Spatial Rules
- Keep generous vertical spacing between sections.
- Use large container widths for the premium feel.
- Let the portrait and project imagery carry visual weight.
- Maintain asymmetry through content density, not random positioning.

---

## 6. Surfaces & Effects
The current UI language depends on soft depth rather than strong framing.

### Surface Behavior
- **Glass panels:** semi-transparent dark overlays with blur for premium cards.
- **Ghost borders:** very low-opacity edges for separation.
- **Glow states:** cyan glow should appear on hover or emphasis areas only.
- **Particle background:** subtle dotted field that adds texture without stealing focus.

### Motion Rules
- Motion should feel smooth and slightly elastic, not bouncy.
- Hover movement should be restrained: lift, glow, or a slight transform.
- Avoid decorative animation that does not reinforce hierarchy or interaction.

---

## 7. Components

### Top Navigation
- Fixed floating navbar with backdrop blur.
- Active link should be obvious through color and underline.
- CTA on the right should scroll users to the projects section.

### Portrait Block
- The profile image is a core visual anchor and should always use the local project image.
- Keep the portrait large, clean, and premium.
- Image treatments may include grayscale-to-color hover, but never obscure the face.

### Project Cards
- Cards should read as compact case studies, not blog posts.
- Each card should show context, role, and learning in a single scan.
- Image, tags, and written outcome should feel equally intentional.

### Strength Metrics
- The metrics block should balance credibility with personality.
- `Vibe coding` is now part of the current voice and should be treated as a deliberate positioning label, not a placeholder.

### Contact Actions
- Email is the primary action.
- LinkedIn is the secondary external action.
- Floating action button should always lead to the contact section.

---

## 8. Content Voice
The tone should be:
- calm
- precise
- human
- technically credible

Avoid sounding over-marketed or abstract. The strongest lines are the ones that sound like a designer who understands real users, real complexity, and real implementation constraints.

Preferred language themes:
- clarity
- structure
- flow
- understanding
- practical impact
- thoughtful execution

---

## 9. Do
- Use the current Tailwind token system before introducing new raw colors.
- Keep the cyan/orange contrast as the visual signature.
- Let the page feel premium through spacing, scale, blur, and glow.
- Preserve the connection between UX thinking and technical literacy.
- Keep interactions functional first, decorative second.

## 10. Don't
- Do not add generic startup gradients or random neon effects everywhere.
- Do not replace the dark atmosphere with flat light sections unless the entire design direction changes.
- Do not overload sections with too many badges, labels, or animations.
- Do not treat `Vibe coding` as a joke label in the UI; it should support the portfolio voice.
- Do not reintroduce broken placeholder links, remote portrait dependencies, or unused template styling.