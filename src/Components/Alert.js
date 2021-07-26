import {useContext} from 'react'
import {AlertContext} from '../context/alert/alertContext'

const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null

  return (
    <div
      className={`alert alert-${
        alert.type || 'secondary'
      } alert-dismissible fade show`}
      role='alert'
    >
      {alert.text}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        onClick={hide}
      ></button>
    </div>
  )
}

export default Alert
