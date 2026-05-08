import type { LanguageSwitchResult } from '@/shared/types/locale'
import { createContext } from 'react'

export const LanguageContext = createContext<LanguageSwitchResult | null>(null)
