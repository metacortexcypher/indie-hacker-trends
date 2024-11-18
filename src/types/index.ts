// src/types/index.ts
export interface Story {
    id: string
    title: string
    subtitle?: string
    content: string
    category: 'dispatch' | 'gazette' | 'almanack'
    date: string
    featured?: boolean
  }