import type { NextPage } from 'next'

const Home: NextPage= () => {
  return (
    <main>
      <div className='bg-midnight top-10 h-20'>
        <p className='text-white text-center relative top-5 text-2xl'>Fresh Tailwind Project 🚀</p>
      </div>
      <div className='flex flex-row space-x-10 justify-center mt-10'>
        {
          Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
            <p key={number} className='text-black text-6xl'>{number}</p>
          ))
        }
      </div>
    </main>
  );
}

export default Home
