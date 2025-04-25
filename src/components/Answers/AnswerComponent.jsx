import './styles.css'

export const AnswerComponent = ({ info, info_2, info_3 }) => {
    return (
      <div
        className="answerWrapper"
      >
        <p>{info}</p>
        <p>{info_2}</p>
        <p>{info_3}</p>
      </div>
    );
}