import styles from "./style.module.css";

function FeedbackCard({ setModal, comment, setPathImg }) {
  const pathComment = require(`../../data/feedbacks_img/${comment.img}`);

  return (
    <div className={styles.feedback_card}>
      <div className={styles.dorber_card}>
        <div className={styles.first_simbol}>
          <span>"</span>
        </div>
        <div className={styles.feedback_text}>
          <p>{comment.text}</p>
        </div>
        <div className={styles.last_simbol}>
          <span>"</span>
        </div>
        <div className={styles.last_level}>
          <button
            style={{ backgroundImage: `url(${pathComment})` }}
            onClick={() => {
              setPathImg(pathComment);
              setModal(true);
            }}
          ></button>
          <div className={styles.author}>
            <p>{comment.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeedbackCard;
