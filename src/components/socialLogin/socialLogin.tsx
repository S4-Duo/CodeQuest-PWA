import styles from './socialLogin.module.css'

interface PropTypes {
    image: string
    onClick: () => void
}

export default function SocialLogin({image, onClick}: PropTypes) {
    return (
        <button onClick={onClick} className={styles.buttonContainer}>
            <img src={image} />
        </button>
    )
}