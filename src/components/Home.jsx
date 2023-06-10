import { useContext } from 'react'
import { CountContext } from '../context/countContext'

export default function Home() {
    const { count, incrementCount } = useContext(CountContext);
  return (
    <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '93vh' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Viajes Inolvidables: Descubre, Vive, Recuerda</h1>
              <h4 className='mb-3'>Personas a bordo: {count} </h4>
              <button className='btn btn-outline-light btn-lg' onClick={incrementCount}>
                 ¿Te unes?
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
