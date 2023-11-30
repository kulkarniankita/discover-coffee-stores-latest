import Banner from '@/components/banner.client';
import Card from '@/components/card.server';
import { fetchCoffeeStores } from '@/lib/coffee-stores';

async function getData() {
  //mapbox api
  return await fetchCoffeeStores();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  const coffeeStoreId = 'dark-horse-coffee';
  const coffeeStores = [
    {
      name: 'StrangeLove Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      name: 'Dark Horse Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
    },
    {
      name: 'StrangeLove Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      name: 'Dark Horse Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
    },
    {
      name: 'StrangeLove Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      name: 'Dark Horse Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
    },
  ];
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Toronto Stores
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {coffeeStores.map((coffeeStore, idx) => (
              <Card
                key={`${coffeeStore.name}-${idx}`}
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${idx}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
