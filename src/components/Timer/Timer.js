import React, { useState, useEffect } from 'react'

export default function Timer(deadline) {

    const [ hours, setHours ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)
    const [ seconds, setSeconds ] = useState(0)

    const getTime = () => {  

        const time = Date.parse(deadline) - Date.now()

        setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
        setMinutes(Math.floor((time / (1000 * 60)) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    }

    useEffect( () => {  
        const interval = setInterval(() => getTime(), 1000)
        // return () => { clearInterval(interval) }
    }, [])
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
    
}
