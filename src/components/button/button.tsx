import styles from "./button.module.css"

interface PropTypes {
    text: string
}

export default function Button({text}: PropTypes) {
    return (
        <button className={styles.button}>
            <p className={styles.buttonText}>{text}</p>
        </button>
    )
}