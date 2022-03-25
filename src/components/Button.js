


export function Button({ onClick, size, title }) {
    return (
        <button 
          onClick={onClick}
          className="newReg"size={size}>{title}
        </button>
    )
}