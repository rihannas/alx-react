
export function getFullYear(){
    const date = new Date()
    const currentYear = date.getFullYear()
    return currentYear
}

export function getFooterCopy(isIndex){
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard'
}

export const getLatestNotification = () =>{
    return '<strong>Urgent requirement</strong> - complete by EOD'
}
