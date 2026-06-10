import React from 'react'

const App = () => {
function inputchangeing(val){
  console.log(val)
}
  return (
    <div>
      <input onChange={function(elem){
        inputchangeing(elem.target)
      }}
      type="text" placeholder="Search for jobs..." className="search-bar" />
    </div>
  )
}

export default App