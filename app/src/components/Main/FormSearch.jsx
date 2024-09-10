import { FaSearchLocation } from 'react-icons/fa';
export default function HeaderSearch({location, setLocation, onSubmit}) {
  return (
    <form onSubmit={onSubmit} className='flex m-auto w-full sm:w-[70%] gap-5 mb-10 px-4'>
    <input
      type="text"
      placeholder="Entrer une ville"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className='
      w-full rounded-xl border-2 border-white shadow-xl text-center'
    />
    <button type="submit"><FaSearchLocation className="text-white" size={40}/>
    </button>
  </form>
  )
}
