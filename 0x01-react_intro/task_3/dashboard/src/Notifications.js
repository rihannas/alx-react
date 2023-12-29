import React from 'react'
import './Notification.css'
import { getLatestNotification } from './utils'
export default function Notifications() {
    const urgentNotfication = getLatestNotification()
    return (
        <div className='Notifications'>
        <p id="not-p">Here is the list of notifications</p>
        <button id="not-button" aria-label='Close'>X</button>
        <ul>
            <li data="default">New course available</li>
            <li data="urgent">New resume available</li>
            <li data="urgent"dangerouslySetInnerHTML={{__html: urgentNotfication}}></li>
            
        </ul>
        
        </div>
    )
}