/* eslint-disable react/prop-types */

const TextBox = ({ placeholder, value, onChange,type,icon}) => {

  return (
    <div className="text-box">
      <input type={type} className="custom-input" onChange={onChange} value={value} placeholder={placeholder}  />
      {icon && <span className="icon">{icon}</span>}
    </div>
  )
}

export default TextBox