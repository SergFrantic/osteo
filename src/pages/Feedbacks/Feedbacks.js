import { useEffect, useState } from "react";

import styles from "./style.module.css";
import data from "../../data/comments.json";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import Modal from "../../components/Modal/Modal";

function Feedbacks() {
  const comments = data.comments;
  const [modal, setModal] = useState(false);
  const [pathImg, setPathImg] = useState("");

  function headerPathImg(path) {
    setPathImg((prev) => (prev = path));
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.feedbacks_container}>
      {comments.map((comment) => (
        <FeedbackCard
          key={comment.id}
          comment={comment}
          setPathComment={headerPathImg}
          setPathImg={setPathImg}
          setModal={setModal}
        />
      ))}
      <Modal pathImg={pathImg} setModal={setModal} modal={modal} />
    </div>
  );
}
export default Feedbacks;
