import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Homecard.css'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { food_list} from '../../assets/assets'

const Homecard = () => {
  const [itemCount, setItemCount] = useState(0)
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
                  
                    {!itemCount
                      ? <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add_food} alt="" />
                        : <div className='food-item-counter'>
                          <img  onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_food} alt="" />
                          <p>{itemCount}</p>
                          <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_green} alt="" />
                        </div>
                    }

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