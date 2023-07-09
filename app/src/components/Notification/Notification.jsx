import './Notification.css'

const Notification = ({type,text}) => {
    return (
        <div className={type === 'success' ? 'notification notification-success' : 'notification notification-danger'}>
            {text}
        </div>
    )
}

export default Notification
