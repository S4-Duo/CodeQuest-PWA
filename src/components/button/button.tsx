import styles from "./button.module.css"

interface PropTypes {
    text: string,
    onClick: () => void
}

export default function Button({text, onClick}: PropTypes) {
    return (
        <button className={styles.button} onClick={onClick}>
            <p className={styles.buttonText}>{text}</p>
        </button>
    )
}