import { appFireStore } from "../firebase/config"
import { useEffect, useState } from "react"
import { onSnapshot, query, setDoc, where } from "firebase/firestore";
import { collection } from "firebase/firestore";

export const useCollection = (transaction, myQuery) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let q;
        if(myQuery) {
            q = query(collection(appFireStore, transaction), where(...myQuery))
        }

        const unsubscribe = onSnapshot((myQuery ? q : collection(appFireStore, transaction)), 
        (snapshot) => {
            let result = []
            snapshot.docs.forEach((doc) => {
                console.log(doc)
                result.push({...doc.data(), id: doc.id})
            })
            setDocuments(result)
            setError(null)
        },
        (error) => {
            setError(error.message)
        })
        return unsubscribe
    }, [collection])

    return {documents, error}
}