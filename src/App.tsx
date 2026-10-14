import { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';

// Definimos la estructura de nuestro objeto Café
interface Coffee {
  id: number;
  name: string;
  quantity: number;
}

// Estado inicial con al menos 3 cafés
const initialCoffees: Coffee[] = [
  { id: 1, name: 'Capuchino', quantity: 0 },
  { id: 2, name: 'Espresso', quantity: 0 },
  { id: 3, name: 'Latte Vainilla', quantity: 0 },
  { id: 4, name: 'Mocha', quantity: 0 },
];

function App() {
  // Inicializamos el hook useState
  const [coffees, setCoffees] = useState<Coffee[]>(initialCoffees);

  // Función para incrementar el contador de un café específico
  const handleOrder = (id: number) => {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id
          ? { ...coffee, quantity: coffee.quantity + 1 }
          : coffee
      )
    );
  };

  // Calculamos el total de cafés pedidos usando reduce
  const totalOrders = coffees.reduce((total, coffee) => total + coffee.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center py-12 px-4">
      
      <h1 className="text-4xl font-extrabold text-stone-800 mb-8">
        ☕ Sistema de Pedidos Rápidos
      </h1>

      {/* Tarjeta superior con el Total */}
      <div className="bg-amber-100 border-l-4 border-amber-600 text-amber-900 p-4 rounded-r shadow-sm mb-12 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold">
          Total de cafés pedidos: <span className="text-3xl">{totalOrders}</span>
        </h2>
      </div>

      {/* Renderizado de la lista iterando sobre el estado */}
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            quantity={coffee.quantity}
            onOrder={() => handleOrder(coffee.id)}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;