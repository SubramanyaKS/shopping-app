/* eslint-disable react/prop-types */

const Toast = ({ type, message, onClick }) => {
  return (
    <div className={`toast toast-${type}`}>
      <p>{message}</p>
      {onClick && (
        <button className="toast-button" onClick={onClick}>
          Close
        </button>
      )}
    </div>
  );
};

export default Toast;
