/* eslint-disable react/prop-types */
import "../assets/popup.css";
import Button from 'react-bootstrap-icons/Button';
const CustomToast = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="popup-overlay" onClick={onClose}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
     
      {children}
      <Button className="close-button" onClick={onClose}>Close</Button>
    </div>
  </div>
  )
}

export default CustomToast