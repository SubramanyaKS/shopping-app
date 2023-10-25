/* eslint-disable react/prop-types */

const SubmitButton = ({label,type,value}) => {
  return (
    <button type={type} value={value} className="curved-button">{label}</button>)
}

export default SubmitButton