import { type ThemeSwitchResult } from '@/shared/types/theme'
import { createContext } from 'react'

export const ThemeContext = createContext<ThemeSwitchResult | null>(null)