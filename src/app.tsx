import { Component, createSignal, createState } from 'solid-js';

export const App: Component = () => {
  /* const [count, setCount] = createSignal(0);
  const increment = (by = 1) => setCount(count() + by);
  const decrement = (by = 1) => setCount(count() - by); */
  const [count, setCount] = createState({ value: 100 });
  const increment = (by = 1) => setCount('value', (current) => current + by);
  const decrement = (by = 1) => setCount('value', (current) => current - by);

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <img src="/icons/icon-512x512.png" class="h-12 sm:h-8" />
            </div>
            <div class="">
              <div class="text-6xl text-center">{count.value}</div>

              <div class="pt-8 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <button
                  type="button"
                  class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={[increment, 15]}
                >
                  ++ Increment
                </button>
                <button
                  type="button"
                  class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={[decrement, 25]}
                >
                  -- Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
