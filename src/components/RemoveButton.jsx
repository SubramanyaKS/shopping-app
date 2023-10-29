/* eslint-disable react/prop-types */

import { Trash2Fill } from "react-bootstrap-icons"

const RemoveButton = ({onClick}) => {
  return (
    <button className="remove-button" onClick={onClick} type="button"><Trash2Fill/></button>
  )
}

export default RemoveButton