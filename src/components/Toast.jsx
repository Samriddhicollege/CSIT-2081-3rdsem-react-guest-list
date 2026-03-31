import "../styles/toast.css";

function Toast({ message, type }) {
  return (
    <div className={`toast toast--${type}`} role="alert">
      <span>{message}</span>
    </div>
  );
}

export default Toast;
