import styles from "./button.module.css"

interface PropTypes {
    text: string,
    onClick: () => void
}

export default function ButtonPrimary({text, onClick}: PropTypes) {
    return (
        <button onClick={onClick} className={styles.button}>
            <p className={styles.buttonText}>{text}</p>
        </button>
    )
}