
function Navbar() {
  return (
    // Navbar component
    <div className="bg-[#ffde18] flex m-6 justify-around h-20 rounded-[1vw] text-[#4b240c]"> 
        <div className="flex gap-4 items-center text-lg font-semibold">
            <a href="">INGREDIENTS</a>
            <a href="">NUTRITIONS</a>
            <a href="">OUR DISHES</a>
        </div>
        <h1 className="text-3xl flex items-center font-bold">BiteBox</h1>
        <div className="flex gap-4 items-center text-lg font-semibold">
            <a href="">RECIPES</a>
            <a href="">WHY US?</a>
            <a href="">CONTACT</a>
            <button className="border-3 p-3 rounded-[1vw] ml-4 flex flex-end">ORDER NOW</button>
        </div>
    </div>
  )
}

export default Navbar