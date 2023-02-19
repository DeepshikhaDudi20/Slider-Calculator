import { configureStore } from '@reduxjs/toolkit'
import loanCalculatorSlice from '../slices/loanCalculatorSlice'

export function makeStore() {
    return configureStore({
        reducer:
            { loanCalculator: loanCalculatorSlice },
    })
}

export const store = makeStore()

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch