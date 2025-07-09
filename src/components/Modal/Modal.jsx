import './Modal.css';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal-title'>Contact Me!</div>
                <section className='modal-form'>
                    <label className='modal-form-input-label' for='fname'>First Name</label>
                    <input className='modal-form-input' type="text" name="fname" placeholder="Enter your name" />
                    <label className='modal-form-input-label' for='fname'>Email</label>
                    <input className='modal-form-input' type="text" name="lname" placeholder="Enter a valid email" />
                    <label className='modal-form-input-label' for='fname'>Message</label>
                    <textarea className='modal-form-input-message' type="text" name="phone" placeholder="Enter your message" />
                </section>
                <section>
                    <button>Send</button>
                    <button>Cancel</button>
                </section>
                <button className="modal-close" onClick={onClose}>×</button>
            </div>
        </div>
    );
}

export default Modal;
