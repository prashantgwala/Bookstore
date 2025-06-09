// import React from 'react'

// function Cards({ item }) {

//     return (
//         <>
//             <div className='mt-4 my-3 p-3'>
//                 <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-salte-900 dark:text-white dark:border">
//                     <figure>
//                         <img
//                             src={item.image}
//                             alt="Shoes" />
//                     </figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                             {item.name}
//                             <div className="badge badge-secondary">{item.category}</div>
//                         </h2>
//                         <p>{item.title}</p>
//                         <div className="card-actions justify-between">
//                             <div className="badge badge-outline">${item.price}</div>
//                             <div className=" cursor-pointer px-2 py-1 rounded-full  border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-500 ">
//                                 Buy Now
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Cards

import React from 'react';

function Cards({ item }) {
    return (
        <div className='mt-4 my-3 p-3'>
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                
                {/* इमेज का बैकग्राउंड सेट किया */}
                <figure>
                    <img src={item.image} alt='Shoes'/> 
                    
                </figure>

                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>

                    {/* टेक्स्ट को डार्क मोड में विज़िबल बनाया */}
                    <p>{item.title}</p>

                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-500">
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
