import './App.css';

function App() {
  return (
    <div className='mt-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <img
            className='h-48 w-full object-cover md:h-full md:w-48'
            src='/img/store.jpg'
            alt='Man browsing a store'
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>Case study</div>
          <a href='./' className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
            Finding customers for your new business
          </a>
          <p className='mt-2 text-gray-500'>
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
      <div className='mt-4 mb-4 text-center'>
        <p>Hello Tailwind CSS</p>
      </div>
    </div>
  );
}

export default App;
