import css from './Option.module.css'

export default function Options({children, onClick}) {
    return (
      <div className={css.btn}>
        <button onClick={onClick}>{children}</button>
      </div>
    );
}