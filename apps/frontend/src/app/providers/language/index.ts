/**
 * Language handling module
 *
 * @example
 * // In app main file
 * import { LanguageProvider } from '@/app/providers/language'
 *
 * <LanguageProvider>
 *   <App />
 * </LanguageProvider>
 *
 * @example
 * // In any component
 * import { useLanguage } from '@/app/providers/language'
 *
 * function MyComponent() {
 *   const { language, setLanguage } = useLanguage()
 *
 *   return (
 *     <button onClick={() => setLanguage('ru')}>
 *       Русский
 *     </button>
 *   )
 * }
 */

export type { LanguageContextType } from './LanguageContext'
export { LanguageProvider } from './LanguageProvider'
export { useLanguage } from './useLanguage'
