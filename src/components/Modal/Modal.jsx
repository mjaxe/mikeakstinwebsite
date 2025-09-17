import { useState } from 'react';
import './Modal.css';
import Button from '../Button/Button';
import {
  validateEmailFormat,
} from '../../services/emailValidtor';

function Modal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    })

    const resetContactForm = () => {
        formData.name = '';
        formData.email = '';
        formData.message = '';
        formErrors.name =false;
        formErrors.email = false;
        formErrors.message = false;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormErrors(prev => ({ ...prev, [name]: false}))
    };

    const handleSubmit = () => {
        const errors = {
            name: formData.name.trim() === '' ? 'required' : '',
            email: formData.email.trim() === '' ? 'required' : validateEmailFormat(formData.email) ? '' : 'invalid',
            message: formData.message.trim() === '' ? 'required' : ''
        };

        setFormErrors(errors);

        const hasErrors = Object.values(errors).some(Boolean);
        if (hasErrors) {
            return
        }

        console.log('Form Data:', formData);
    };

    const handleCancel = () => {
        resetContactForm()
        onClose();
    };

    if (!isOpen) {
        resetContactForm()
        return null;
    }
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal-title'>Contact Me!</div>
                <section className='modal-form'>
                    <label className='modal-form-input-label' htmlFor='name'>
                        First Name {formErrors.name === 'required' && <span className='error-asterisk'>*</span>}
                    </label>
                    <input
                        className={`modal-form-input ${formErrors.name ? 'input-error' : ''}`}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label className='modal-form-input-label' htmlFor='email'>
                        Email {formErrors.email === 'required' && <span className='error-asterisk'>*</span>}
                    </label>
                    <input
                        className={`modal-form-input ${formErrors.email ? 'input-error': ''}`}
                        type="text"
                        name="email"
                        placeholder="Enter a valid email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        {formErrors.email === 'invalid' && <div className="error-text">Please enter a valid email address</div>}
                    <label className='modal-form-input-label' htmlFor='message'>
                        Message {formErrors.message === 'required' && <span className='error-asterisk'>*</span>}
                    </label>
                    <textarea
                        className={`modal-form-input-message ${formErrors.message ? 'input-error': ''}`}
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </section>
                <section className='modal-buttons'>
                    <Button
                        className='submit-button'
                        background={'solid'}
                        rounded={true}
                        message={'Submit'}
                        onClick={handleSubmit}
                    />
                    <Button
                        className='cancel-button'
                        message={'Cancel'}
                        onClick={handleCancel}
                    />
                </section>
                <button className="modal-close" onClick={onClose}>×</button>
            </div>
        </div>
    );
}

export default Modal;
