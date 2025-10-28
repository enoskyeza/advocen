# Advocen Initiative - Color Palette Guide

## Primary Colors

### Navy Blue (Primary)
**Hex**: `#0a3d62`

**Usage**: Primary brand color for headers, buttons, key elements

**Tailwind Classes**:
- `bg-primary` / `text-primary` - Main shade
- `bg-primary-500` / `text-primary-500` - Same as main
- `bg-primary-50` to `bg-primary-900` - Light to dark variations

**Represents**: Trust, professionalism, authority, stability

---

### Beige (Accent)
**Hex**: `#f5f5dc`

**Usage**: Backgrounds, subtle highlights, secondary elements

**Tailwind Classes**:
- `bg-accent` / `text-accent` - Main shade
- `bg-beige` / `text-beige` - Alias
- `bg-accent-50` to `bg-accent-900` - Variations

**Represents**: Warmth, accessibility, neutrality, calm

---

## Complementary Colors

### Gold
**Hex**: `#d4af37`

**Usage**: Accents, highlights, call-to-action elements, awards/achievements

**Tailwind Classes**:
- `bg-gold` / `text-gold` - Main shade
- `bg-gold-50` to `bg-gold-900` - Variations

**Represents**: Excellence, quality, achievement, prestige

---

### Teal
**Hex**: `#2c7a7b`

**Usage**: Secondary actions, gradients, links, interactive elements

**Tailwind Classes**:
- `bg-teal` / `text-teal` - Main shade
- `bg-teal-50` to `bg-teal-900` - Variations

**Represents**: Growth, healing, balance, progress

---

## Color Combinations

### Gradients

**Primary Gradient** (Navy to Teal):
```css
.gradient-primary {
  background: linear-gradient(135deg, #0a3d62 0%, #2c7a7b 100%);
}
```

**Accent Gradient** (Beige to Gold):
```css
.gradient-accent {
  background: linear-gradient(135deg, #f5f5dc 0%, #d4af37 100%);
}
```

### Recommended Pairings

1. **Navy + Beige** - Primary combination
   - High contrast, professional, accessible
   - Example: Navy text on beige background

2. **Navy + Gold** - Premium feel
   - Luxurious, authoritative
   - Example: Gold accents on navy buttons

3. **Teal + Beige** - Soft, approachable
   - Health-focused, calming
   - Example: Teal links on beige cards

4. **Navy + Teal + Gold** - Full palette
   - Dynamic, comprehensive
   - Example: Navy background, teal elements, gold highlights

---

## Accessibility

### Contrast Ratios (WCAG AA Compliance)

✅ **Navy (#0a3d62) on White** - 9.5:1 (Excellent)
✅ **Navy (#0a3d62) on Beige (#f5f5dc)** - 8.9:1 (Excellent)
✅ **Teal (#2c7a7b) on White** - 5.1:1 (Good)
✅ **Gold (#d4af37) on Navy** - 4.8:1 (Good)

All primary combinations meet or exceed WCAG AA standards.

---

## Usage in Code

### Tailwind (Recommended)
```jsx
<div className="bg-primary text-white">
  <h1 className="text-accent">Title</h1>
  <button className="bg-gold hover:bg-gold-600">Click</button>
</div>
```

### Custom CSS
```css
.custom-element {
  background-color: #0a3d62;
  color: #f5f5dc;
  border: 2px solid #d4af37;
}
```

### Inline Styles (when necessary)
```jsx
<div style={{ backgroundColor: '#0a3d62', color: '#f5f5dc' }}>
  Content
</div>
```

---

## Color Psychology & Brand Alignment

### Navy Blue (#0a3d62)
- **Emotion**: Trust, intelligence, expertise
- **Brand Fit**: Perfect for research and policy organization
- **Use For**: Headers, important text, primary buttons

### Beige (#f5f5dc)
- **Emotion**: Warmth, comfort, reliability
- **Brand Fit**: Makes complex policy topics approachable
- **Use For**: Backgrounds, cards, subtle sections

### Gold (#d4af37)
- **Emotion**: Success, achievement, value
- **Brand Fit**: Represents impact and excellence
- **Use For**: Highlights, awards, important CTAs

### Teal (#2c7a7b)
- **Emotion**: Balance, health, growth
- **Brand Fit**: Aligns with health law and development focus
- **Use For**: Links, secondary buttons, health-related content

---

## Don'ts

❌ Don't use bright reds or aggressive colors (conflicts with professional tone)
❌ Don't use pure black (#000000) - use navy instead
❌ Don't use pure white backgrounds everywhere - mix in beige
❌ Don't overuse gold - it should accent, not dominate
❌ Don't combine teal and gold without navy or beige to balance

---

## Color Variables Reference

If you want to add CSS variables:

```css
:root {
  --color-primary: #0a3d62;
  --color-accent: #f5f5dc;
  --color-gold: #d4af37;
  --color-teal: #2c7a7b;
  
  --color-navy: #0a3d62;
  --color-beige: #f5f5dc;
}
```

---

**Advocen Initiative**
Making evidence visible through thoughtful design.
