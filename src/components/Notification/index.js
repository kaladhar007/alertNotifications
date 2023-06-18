// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  //   const {icon, heading, description, close} = children
  //   console.log(icon, heading, description)
  //   import {RiErrorWarningFill} from `react-icons/${'RiErrorWarningFill'.slice(0,2)}`
  console.log(children)

  return (
    <div className="notification_card">
      {children}
      {/* {icon}
      <div className="heading_description">
        {heading}
        {description}
      </div>
      {close} */}
      <GrFormClose />
    </div>
  )
}

export default Notification
