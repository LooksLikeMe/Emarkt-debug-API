import axios from 'axios'
import React, {useEffect, useState} from 'react'
const UserAPI = (token) =>  {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if(token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                } catch (err) {
                    alert(err.responce.data.msg)
                }
            }
        }
    }, [token])

    return {
        isLogged:[isLogged, setIsLogged],
        isAdmin:[isAdmin,setIsAdmin]
    }
}

export default UserAPI
