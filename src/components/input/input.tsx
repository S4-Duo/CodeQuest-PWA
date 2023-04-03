import styles from './input.module.css'

interface PropTypes {
    placeholder: string;
    type: string
}

export default function Input({placeholder, type}: PropTypes) {
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} type={type} placeholder={placeholder}/>
        </div>
    )
}