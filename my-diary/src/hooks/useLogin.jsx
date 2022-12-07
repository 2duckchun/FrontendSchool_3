import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { appAuth } from '../firebase/config'


export default function useLogin() {
    // 에러 정보 저장
    const [error, setError] = useState(null)
    // 서버와의 통신 상태를 저장
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    const login = (email, password) => {
        setError(null)
        setIsPending(true)

        // 비밀번호 설정으로 유저 정보를 등록합니다.
        signInWithEmailAndPassword(appAuth, email, password)
        .then((userCredential) => {
            // 유저 정보를 등록합니다.
            const user = userCredential.user

            setError(null)
            setIsPending(false)

            dispatch( { type: 'login', payload: user } )
            if(!user) {
                throw new Error('로그인에 실패했나이다.')
            }
        })
        .catch((error) => {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        })
    }
    return {error, isPending, login}
}
