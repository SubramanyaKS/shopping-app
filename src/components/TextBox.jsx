/* eslint-disable react/prop-types */

const TextBox = ({ placeholder, value, onChange,type,pattern="" }) => {

  return (
    <div className="text-box">
      <input type={type} className="custom-input" onChange={onChange} value={value} placeholder={placeholder} pattern={pattern} />
    </div>
  )
}

export default TextBox