import React, { useEffect, useState } from 'react'

const Api = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
   fetch(`https://api.coinlore.net/api/tickers/?start=100&limit=5`)
   .then((response) => response.json())
   .then((actualData) => {
    const {data} = actualData
    console.log(data);
    setData(data)
   })
   
  }, []);
  
return (
    <div className='api'>
        {data.map(({id, name, rank, price_usd})=>{
            return (
                <div className='api-container' key={id}>
                    <div className='api-top'>
                        <h3> {name}</h3>
                        <p>{rank}</p>

                    </div>

                    <p>{price_usd}</p>
                </div> 
              
            )
            
        })}  
    </div>
  )
}

export default Api







// import React , {useState} from 'react'
// import { useEffect } from 'react'

// const Api = () => {
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(()=>{
//         fetch('https://api.coinlore.net/api/tickers/?start=100&limit=5')
//         .then((response)=>response.json)
//         .then((res)=>{
//             // There is destructruing here because in the Api, there are two arrays, and we need to access only the 'data' array, this was what led to us destructing it.
//             const {data} = res
//             setData(data)
//             setLoading(false)
//         })
//         .catch((err) => {
//             setError(err.message);
//            })
//           }, []);
//           if(loading){
//             return(
//                 <h2> Loading..... </h2>
//             )
//         }
    
//   return (
//     <div className='api'>
//         {data.map(({id, name, rank, symbol})=>{
//             return (
//                 <div key={id}>
//                     <h2>{name}</h2>
//                     <p>{rank}</p>
//                     <p>{symbol}</p>

//                 </div>
//             )
//         })}




//         {/* <div className='api-container'>
//             <div className='api-top'>
//                 <h3> BTC/NGN</h3>
//                 <p>-3.21%</p>

//             </div>

//             <p>208.48785 NGN</p>
//         </div> */}
        

//     </div>
//   )
// }

// export default Api


