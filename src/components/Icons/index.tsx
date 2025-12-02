export const icons = (name: string, image: string, alt = "", width = 100) => (
  <div className="icon-wrapper">
    <p className="icon-title">{name}</p>
    <img src={image} alt={alt} width={width} className="icon-image" />
  </div>
);
