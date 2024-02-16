import css from "./Feedback.module.css";

export default function Feedback({ clicks }) {
  return (
    <ul className={css.dox}>
      <li className={css.value}>good:{clicks.good}</li>
      <li className={css.value}>neutral:{clicks.neutral}</li>
      <li className={css.value}>bad:{clicks.bad}</li>
      {/* <li></li>
        <li></li> */}
    </ul>
  );
}
