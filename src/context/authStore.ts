import { create } from "zustand"

interface SessionState {
  accesToken: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const TOKEN_KEY = "auth_token"

export const useAuthStore = create<SessionState>((set) => ({
  accesToken: localStorage.getItem(TOKEN_KEY),
  isAuthenticated: Boolean(localStorage.getItem(TOKEN_KEY)),
  login: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
    set({ accesToken: token, isAuthenticated: true })
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY)
    set({ accesToken: null, isAuthenticated: false })

  }
}))