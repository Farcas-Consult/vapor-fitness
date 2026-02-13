/**
 * Color Configuration for Overland Fitness
 * 
 * All colors are defined as CSS variables in app/globals.css
 * Import and use these colors instead of hardcoding them
 */

export const brandColors = {
  primary: 'var(--primary)',      // Orange
  secondary: 'var(--secondary)',  // Yellow
  accent: 'var(--accent)',        // Yellow
  yellow: 'var(--yellow)',        // Brand yellow
  orange: 'var(--orange)',        // Brand orange
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  muted: 'var(--muted)',
  mutedForeground: 'var(--muted-foreground)',
  border: 'var(--border)',
  ring: 'var(--ring)',
} as const;

/**
 * Usage Examples:
 * 
 * In inline styles:
 * <div style={{ color: brandColors.primary }}>Text</div>
 * 
 * In className with CSS variables:
 * <div className="bg-[var(--orange)] text-white">Text</div>
 * 
 * In Tailwind (with opacity):
 * <div className="bg-orange-600 text-white">Text</div>
 * 
 * In CSS files:
 * .my-element {
 *   color: var(--primary);
 *   background: var(--secondary);
 * }
 */
