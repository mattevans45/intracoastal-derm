import { useState } from 'react';

const fonts = [
  { name: 'Amatic SC', class: 'font-amatic' },
  { name: 'Poiret One', class: 'font-poiret' },
  { name: 'Grandiflora One', class: 'font-grandiflora' },
  { name: 'Lato', class: 'font-sans' },
  { name: 'Inter', class: 'font-inter' },
  { name: 'Cormorant', class: 'font-cormorant' },
  { name: 'Playfair Display', class: 'font-serif' }
];

const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const casing = ['uppercase', 'lowercase', 'capitalize'];

const FontSwitcher = ({ selectedFont, setSelectedFont, selectedWeight, setSelectedWeight, selectedCasing, setSelectedCasing }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleFontChange = (fontClass) => {
    setSelectedFont(fontClass);
    document.documentElement.classList.remove('font-sans', 'font-serif', 'font-amatic', 'font-poiret', 'font-grandiflora', 'font-inter', 'font-cormorant');
    document.documentElement.classList.add(fontClass);
  };

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    document.documentElement.style.fontWeight = weight;
  };

  const handleCasing = (casing) => {
    setSelectedCasing(casing);
    document.documentElement.style.textTransform = casing;
  };

  return (
    <div className="fixed top-50 right-5 bg-white p-4 rounded shadow-lg z-20">
      <button className="p-2 rounded bg-gray-100" onClick={toggleMinimize}>
        {isMinimized ? 'Show' : 'Hide'} Font Switcher
      </button>
      {!isMinimized && (
        <div>
          <h2 className="mb-2">Choose a Font</h2>
          <div className="flex flex-wrap">
            {fonts.map((font) => (
              <button
                key={font.name}
                className={`m-1 p-2 rounded ${selectedFont === font.class ? 'bg-gray-300' : 'bg-gray-100'}`}
                onClick={() => handleFontChange(font.class)}
              >
                {font.name}
              </button>
            ))}
          </div>
          <div>
            <h3 className="my-2">Choose Font Weight</h3>
            <div className="flex flex-wrap">
              {weights.map((weight) => (
                <button
                  key={weight}
                  className={`m-1 p-2 rounded ${selectedWeight === weight ? 'bg-gray-300' : 'bg-gray-100'}`}
                  onClick={() => handleWeightChange(weight)}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="my-2">Choose Casing</h3>
            <div className="flex flex-wrap">
              {casing.map((casing) => (
                <button
                  key={casing}
                  className={`m-1 p-2 rounded ${selectedCasing === casing ? 'bg-gray-300' : 'bg-gray-100'}`}
                  onClick={() => handleCasing(casing)}
                >
                  {casing}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FontSwitcher;
