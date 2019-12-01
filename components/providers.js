import { createContext } from 'react'

const CacheContext = createContext({})
export const CacheProvider = CacheContext.Provider
export const CacheConsumer = CacheContext.Consumer