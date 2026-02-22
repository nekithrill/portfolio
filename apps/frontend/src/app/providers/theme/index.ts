/**
 * Theme handling module
 *
 * @example
 * // In app main file
 * import { ThemeProvider } from '@/app/providers/theme'
 *
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // In any component
 * import { useTheme } from '@/app/providers/theme'
 *
 * function MyComponent() {
 *   const { theme, setTheme } = useTheme()
 *
 *   return (
 *     <button onClick={() => setTheme('dark')}>
 *       Темная тема
 *     </button>
 *   )
 * }
 */

export { ThemeProvider } from './ThemeProvider'
export { useTheme } from './useTheme'
