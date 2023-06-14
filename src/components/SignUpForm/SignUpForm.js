import styles from './SignUpForm.module.css';
import Button from '../Button/Button';

function SignUpForm({ emailInput, submitEmail, emailAddress, isValidEmail }) {
    return (
        <form className={styles.SignUpForm} onSubmit={submitEmail} noValidate>
            <label htmlFor='email'>Email address</label>
            {!isValidEmail && <span className={styles.ErrorMsg}>Valid email required</span>}
            <input 
                type='email' 
                name='email' 
                id='email' 
                value={emailAddress} 
                style={!isValidEmail ? { backgroundColor: 'hsla(4, 100%, 67%, .2)', border: '1px solid hsl(4, 100%, 67%)', color: 'hsl(4, 100%, 67%)' } : null} 
                placeholder='email@company.com' 
                onChange={emailInput} 
            />
            <Button text='Subscribe for monthly newsletter' />
        </form>
    );
};

export default SignUpForm;