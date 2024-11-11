import React from 'react'
import { types } from '../types/types'

export const login = (name) => ({
    type: types.login,
    payload: {
        name
    }
})

export const logout = () => ({
    type: types.logout
}); 