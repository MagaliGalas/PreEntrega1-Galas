import { useContext } from "react"
import { useState, createContext } from "react"
import Notification from '../components/Notification/Notification'

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type,text) => {
        setNotificationData({type,text})

        setTimeout(() =>{
            setNotification({type,text:''})
        },3500)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification type={notificationData.type} text={notificationData.text} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}