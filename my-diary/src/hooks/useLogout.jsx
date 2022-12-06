import React, { useState } from 'react'
import {useAuthContext} from './useAuthContext'
import {getAuth, signOut} from 'firebase/auth'
import { appAuth } from '../firebase/config'

export default function useLogout() {
    // 에러 정보 저장
    const [error, setError] = useState(null)
    // 서버와의 통신 상태를 저장
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = () => {
        setError(null)
        setIsPending(true)

        signOut(appAuth).then(() => {
            // 로그아웃 성공
            dispatch({ type: 'logout' });
            setError(null)
            setIsPending(false)
        })
        .catch((error) => {
            // 로그아웃 에러
            setError(error.message)
            setIsPending(false)
        })
    }

    return {error, isPending, logout}
}