import React from 'react'
import { food_list } from '../assets/assets'
// const products = [
//     {
//       id: 1,
//       name: 'Earthen Bottle',
//       href: '#',
//       price: '$48',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//       id: 2,
//       name: 'Nomad Tumbler',
//       href: '#',
//       price: '$35',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//       id: 3,
//       name: 'Focus Paper Refill',
//       href: '#',
//       price: '$89',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//       id: 4,
//       name: 'Machined Mechanical Pencil',
//       href: '#',
//       price: '$35',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     // More products...
//   ]
const Homecard = () => {
  return (
    <div>
      <div className="shadow-lg mt-4 ms-3 me-3 rounded-lg">
        <h3 className='ms-5 pt-5'>Top Dishes Near You</h3>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 " >
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {food_list.map((food) => (
              <p key={food.id} className="group shadow-lg rounded-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
                  <img
                    alt={''}
                    src={food.image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className='ms-2'>
                  <h3 className="mt-4 text-sm text-gray-700">{food.name}</h3>
                  <p className='mt-1 text-sm text-gray-700 font-medium'>{food.description}</p>
                  <p className="mt-1 text-lg font-medium text-gray-900 ">${food.price}</p>

                </div>
              </p>
            ))}
          </div>
        </div>
      </div>



    </div>
  )
}

export default Homecard