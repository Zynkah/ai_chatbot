import "./styles.css";

const icons = (name, image, alt = "", width = 100) => (
  <div className="icon-wrapper">
    <p className="icon-title">{name}</p>
    <img src={image} alt={alt} width={width} />
  </div>
);

export const ModelTypesGrid = () => {
  return (
    <div className="grid-wrapper">
      <h2>YoRHa Android Models</h2>
      <div className="grid-container">
        {icons("2B", "../2B_Icon.webp", "2B Icon")}
        {icons("9S", "../9S_Icon.webp", "9S Icon")}
        {icons("A2", "../A2_Icon.webp", "A2 Icon")}
        {icons("Commander White", "../Commander_White_Icon.webp", "Commander White Icon")}
        {icons("Devola", "../Devola_Icon.webp", "Devola Icon")}
        {icons("Popola", "../Popola_Icon.webp", "Popola Icon")}
        {icons("6O", "../6O_Icon.webp", "6O Icon")}
        {icons("21O", "../21O_Icon.webp", "21O Icon")}
      </div>
      <h2>Resistance Android Models</h2>
      <div className="small-grid-container">
        {icons("Anemone", "../Anemone_Icon.webp", "Anemone Icon", 90)}
        {icons("Jackass", "../Jackass_Icon.webp", "Jackass Icon", 90)}
        {icons("Rose", "../Rose_Icon.webp", "Rose Icon", 90)}
      </div>
      <h2>Ver1.1a Android Models</h2>
      <div className="grid-container">
        {icons("Lily", "../Lily_Icon.webp", "Lily Icon", 90)}
        {icons("A4", "../A4_Icon.webp", "A4 Icon", 90)}
        {icons("G16", "../G16_Icon.webp", "G16 Icon", 90)}
        {icons("S21", "../S21_Icon.webp", "S21 Icon", 90)}
        {icons("Dahlia", "../Dahlia_Icon.webp", "Dahlia Icon", 90)}
        {icons("Daisy", "../Daisy_Icon.webp", "Daisy Icon", 90)}
        {icons("Gerbera", "../Gerbera_Icon.webp", "Gerbera Icon", 90)}
        {icons("Margaret", "../Margaret_Icon.webp", "Margaret Icon", 90)}
      </div>
    </div>
  );
};
