import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.0-1/p160x160/91236598_1504744093020030_372970209750810624_n.jpg?_nc_cat=100&ccb=3&_nc_sid=dbb9e7&_nc_ohc=fDN9siVZuxwAX9XTXyq&_nc_ht=scontent.fcpq5-1.fna&tp=6&oh=55fa953b19d07ee8796b74779b4d0522&oe=605A8254"
        alt="Samuel Macedo" />
      <div>
        <strong>Samuel Macedo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}