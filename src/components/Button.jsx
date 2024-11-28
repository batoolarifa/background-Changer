import React from 'react'

function Button({onChangeColor}) {
    return (
    
        <div className="flex flex-col justify-end min-h-screen">
  <div className="flex justify-center space-x-2 mb-4">
    <button type="button" onClick={ () => onChangeColor("green")} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
    <button type="button"  onClick={ () => onChangeColor("red")} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
    <button type="button" onClick={ () => onChangeColor("yellow")}  className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">Yellow</button>
    <button type="button" onClick={ () => onChangeColor("purple")}  className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
    <button type="button" onClick={ () => onChangeColor("pink")}  className="text-white bg-pink-500 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus:ring-purple-900">Pink</button>
    <button type="button"  onClick={ () => onChangeColor("blue")} className="text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-500 dark:focus:ring-purple-900">Blue</button>
  </div>
</div>

        )
}

export default Button
