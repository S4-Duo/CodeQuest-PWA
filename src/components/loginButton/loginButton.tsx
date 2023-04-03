import styles from './loginButton.module.css'

interface PropTypes {

}

export default function LoginButton() {
    return (
        <button className={styles.buttonContainer}>
            <p>Sign In</p>
        </button>
    )
}