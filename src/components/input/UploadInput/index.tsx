import styles from "./index.module.css";

interface PropTypes {
    placeholder: string;
}
export default function UploadInput({placeholder}: PropTypes){
    return(
        <div className={styles.inputContainer}>
            <label className={styles.input} htmlFor="upload-resume">{placeholder}</label>
            <input className={styles.inputHide} type="file" accept={"application/pdf"} id="upload-resume"/>
        </div>
    )
}