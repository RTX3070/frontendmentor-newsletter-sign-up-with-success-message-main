import { useState } from 'react';

import styles from './App.module.css';
import mobileImg from './assets/images/sumob.svg';
import desktopImg from './assets/images/sudesk.svg';

import List from './components/List/List';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Modal from './components/Modal/Modal';

function App() {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    function emailHandler(e) {
        setEmail(e.target.value);
    };

    function validateEmailHandler (e) {
        e.preventDefault();

        const regExPattern = /^\S+@\S+\.\S+$/;
        const isValidEmail = regExPattern.test(email);
        
        if (!isValidEmail) {
            setValidEmail(false);
            return;
        }

        setFormSubmitted(true);
    };

    function resetHandler() {
        setValidEmail(true);
        setEmail('');
        setFormSubmitted(false);
    };

    return (
        <main className={styles.SignUp} id='SignUpForm'>
            <div className={styles.LeftCol}>
                <h1>Stay Updated</h1>
                <p>Join 60,000+ produt managers receiving monthly updates on:</p>
                <List />
                <SignUpForm emailInput={emailHandler} submitEmail={validateEmailHandler} emailAddress={email} isValidEmail={validEmail} />
                {formSubmitted && <Modal email={email} onReset={resetHandler} />}
            </div>
            <div className={styles.RightCol}>
                <img 
                    srcSet={`${mobileImg} 375w, ${desktopImg} 400w`}
                    sizes='(max-width: 799px) 375px, 400px'
                    alt=''
                />
            </div>
        </main>
    );
}

export default App;
