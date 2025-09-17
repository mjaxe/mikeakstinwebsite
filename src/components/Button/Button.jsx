import './Button.css'

function Button({ message, onClick, background = 'white', border = false, rounded = false, className = ''}) {
    const backgroundClass = background === 'solid' ? 'solid-background' : 'white-background';
    const borderClass = border ? 'button-bordered' : '';
    const roundedClass = rounded ? 'button-rounded' : '';
    
    return (
        <button
            className={`custom-button ${backgroundClass} ${borderClass} ${roundedClass} ${className}`}
            onClick={onClick}>
            {message}
        </button>
    )
}

export default Button