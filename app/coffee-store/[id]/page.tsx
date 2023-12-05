import React from 'react';
import Link from 'next/link';
import { fetchCoffeeStore, fetchCoffeeStores } from '@/lib/coffee-stores';
import Image from 'next/image';
import { CoffeeStoreType } from '@/types';
import { createCoffeeStore } from '@/lib/airtable';
import Upvote from '@/components/upvote.client';

async function getData(id: string, queryId: string) {
  const coffeeStoreFromMapbox = await fetchCoffeeStore(id, queryId);
  const _createCoffeeStore = await createCoffeeStore(coffeeStoreFromMapbox, id);

  const voting = _createCoffeeStore ? _createCoffeeStore[0].voting : 0;

  return coffeeStoreFromMapbox
    ? {
        ...coffeeStoreFromMapbox,
        voting,
      }
    : {};
}

export async function generateStaticParams() {
  const TORONTO_LONG_LAT = '-79.3789680885594%2C43.653833032607096';
  const coffeeStores = await fetchCoffeeStores(TORONTO_LONG_LAT, 6);

  return coffeeStores.map((coffeeStore: CoffeeStoreType) => ({
    id: coffeeStore.id.toString(),
  }));
}

export default async function Page(props: {
  params: { id: string };
  searchParams: { id: string };
}) {
  const {
    params: { id },
    searchParams: { id: queryId },
  } = props;

  const coffeeStore = await getData(id, queryId);

  const { name = '', address = '', imgUrl = '', voting } = coffeeStore;

  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">← Back to home</Link>
          </div>
          <div className="my-4">
            <h1 className="text-4xl">{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
            }
            width={740}
            height={360}
            className="max-h-[420px] min-w-full max-w-full rounded-lg border-2 sepia lg:max-w-[470px] "
            alt={'Coffee Store Image'}
          />
        </div>

        <div className={`glass mt-12 flex-col rounded-lg p-4 lg:mt-48`}>
          {address && (
            <div className="mb-4 flex">
              <Image
                src="/static/icons/places.svg"
                width="24"
                height="24"
                alt="places icon"
              />
              <p className="pl-2">{address}</p>
            </div>
          )}
          <Upvote voting={voting} id={id} />
        </div>
      </div>
    </div>
  );
}
