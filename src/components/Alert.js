
import React from 'react'
import PropTypes from 'prop-types'


export default function Alert(props) {
  const captialize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }




  return (

    <>

    <div style={{height: '50px'}}>

      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{captialize(props.alert.type)}</strong> : {props.alert.msg}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}

    </div>


    </>

    
  )
}



Alert.propTypes = {
    alert: PropTypes.string
}
  
// Alert.propTypes = {
//   Alert: PropTypes.string.isRequired
// }
  
Alert.defaultProps = {
    alert: "Set Alert here ...!"
}

