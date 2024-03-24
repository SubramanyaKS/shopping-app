/* eslint-disable react/prop-types */
const Button = ({title,className,onClick}) => {
  return (
    <button className={className} onClick={onClick}>{title}</button>
  )
}

export default Button