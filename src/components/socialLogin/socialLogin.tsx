import styles from './loginButton.module.css'

interface PropTypes {
    image: string
}

export default function SocialLogin({image}: PropTypes) {
    return (
        <button className={styles.buttonContainer}>
            <img src={image} />
        </button>
    )
}