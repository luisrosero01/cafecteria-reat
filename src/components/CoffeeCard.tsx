import React from 'react';

// Definimos la interfaz para las props con TypeScript
interface CoffeeCardProps {
  name: string;
  quantity: number;
  onOrder: () => void;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ name, quantity, onOrder }) => {
  return (
    // Aplicando Flexbox, bordes, padding y colores con Tailwind CSS
    <div className="flex flex-col items-center justify-between p-6 bg-white border-2 border-amber-200 rounded-xl shadow-md w-64 gap-4 transition-transform hover:scale-105">
      
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      
      <div className="text-gray-600 flex flex-col items-center">
        <span>Pedidos:</span>
        <span className="text-3xl font-black text-amber-700">{quantity}</span>
      </div>
      
      <button
        onClick={onOrder}
        className="w-full py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow transition-colors"
      >
        Pedir
      </button>
      
    </div>
  );
};

export default CoffeeCard;