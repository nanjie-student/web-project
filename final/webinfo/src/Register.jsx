import {useState} from 'react';
import './Register.css';
function Register(){
    const[formData,setFormData] = useState({
        userName:'',
        email:'',
        confirmEmail: ''
    });
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = event => {
        event.preventDefault();
    };
    return (
        <div className="register__form">
            <form className="register" onSubmit={handleSubmit}>
                <h2 className="register__title">Sign up</h2>
                <div className="register__field">
                <label className="register__label register__username-label">
                    Username:
                <span className="register__required"> * Required</span>
                <input className="register__username"
                type="text"
                name="username"
                value={formData.userName}
                onChange={handleInputChange}
                />
                <span className="register__error register__username-error"></span>
                </label>
                </div>
                <div className="register__field">
                <label className="register__label register__email-label">
                Email:
                <span className="register__required"> * Required</span>
                <input className="register__email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                />
                <span className="register__error register__email-error">This element is required</span>
                </label>
                </div>
                <div className="register__field">
                <label className="register__label register__confirm-label">
                Confirm Email:
                <input className="register__confirm"
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                />
                </label>
                </div>
                <button className="register__submit" type="submit">Submit</button>
            </form>
        </div>
        
      );
}
export default Register;