import React, { useState } from 'react';
import './style.scss';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            console.log('Отправка формы:', formData);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setSubmitting(false);
            setSubmitSuccess(true);
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <div id="contacts">
            <div className="container">
                <div className="contacts">
                    <h2>Свяжитесь с нами</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Имя:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Сообщение:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="textarea-field"
                            />
                        </div>
                        <button type="submit" className="submit-button" disabled={submitting}>
                            {submitting ? 'Отправка...' : 'Отправить'}
                        </button>
                    </form>
                    {submitSuccess && <div className="success-message">Спасибо! Ваше сообщение отправлено.</div>}
                </div>
            </div>
        </div>
    );
};

export default Contacts;
