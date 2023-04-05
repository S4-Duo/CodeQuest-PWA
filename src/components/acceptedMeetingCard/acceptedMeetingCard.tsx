import styles from './acceptedMeetingCard.module.css';

interface PropTypes {
    date: Date
}

export default function AcceptedMeetingCard({date}: PropTypes) {
    return (
      <div className={styles.container}>
        <h2>You accepted the meeting!</h2>
        <p>{`${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`}</p>
      </div>
    );
}