import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export default function SingleDog() {
  const [dog,setDog] = useState([])
  const {name} = useParams()
  useEffect(() => {
    const fetchSingleDog = async() => {
      try {
          const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
          const data = await res.json()
          setDog(data)
      } catch (error) {
          console.error(error)
      }
  }
  fetchSingleDog()
  }, [name])
  return (
    <section className='max-w-5xl mx-auto flex items-center justify-center h-screen'>
      {dog.map((item) => (
        <div key={item.id} className='grid grid-cols1 gap-8 p-8 md:grid-cols-2'>
          <article>
            <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id
}.jpg`} alt={item.name}/>
          </article>
          <article>
            <h1 className='text-3xl font-bold text-white mb-8 lg:text-5xl'>{item.name}</h1>
            {item.description && <p className='text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed'>{item.description}</p>}
            <ul className='text-slate-400 leading-loose lg:leading-relaxed'>
              <li><span className='font-bold text-slate-300'>Bred For:</span> {item.bred_for}</li>
              <li><span className='font-bold text-slate-300'>Life Span:</span> {item.life_span}</li>
              <li><span className='font-bold text-slate-300'>Temperament:</span> {item.temperament}</li>
              <li><span className='font-bold text-slate-300'>Height:</span> {item.height.imperial} in</li>
              <li><span className='font-bold text-slate-300'>Weight:</span> {item.weight.imperial} lbs</li>
              <li></li>
            </ul>

            <Link to='/' className='inline-block bg-slate-600 py-4 px-12 rounded mt-8 text-white hover:bg-slate-400 transition-all duration-200'>&larr; Back</Link>
          </article>
        </div>
      ))}
    </section>
  )
}
