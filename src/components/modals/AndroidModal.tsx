import "./styles.css";
import { ModelData } from "../../data/ModelData.json";

interface AndroidModalProps {
  id: number;
  title: string;
  description: string;
  onClose: () => void;
}

// todo fix you dumb dumb! mapping over the model data this way creates multiple modals instead of one with the correct data

export const AndroidModal = ({
  title,
  description,
  onClose,
}: AndroidModalProps) => {
  return (
    <div className="modal-overlay">
      {ModelData.map((item) => (
        <div className="modal-wrapper" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} className="modal-image" />
          <button className="btn--modal" onClick={onClose}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};
