import React from 'react'

function Alerts(props) {
  const capitalized = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: '50px' ,}}>
     { props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {capitalized(props.alert.type)}: {props.alert.message}
  </div>}
    </div>
   
  )
}

export default Alerts
