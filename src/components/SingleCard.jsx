import React from 'react'

let SingleCard =()=> {
  return (
   <>
    <div>
    <img src="https://image.tmdb.org/t/p/w500/npdB6eFzizki0WaZ1OvKcJrWe97.jpg" class="popularimgs" />
      <div class="popularinfo">
        <p class="populartitle">Chainsaw Man</p>
        <div class="progresscontainer">
          <div class="progress-circle over50 p86">
            <span class="percent">86<span>%</span></span>
            <div class="left-half-clipper">
              <div class="first50-bar"></div>
              <div class="value-bar"></div>
            </div>
          </div>
  
          <span class="score"></span>
        </div>
  
        <p class="populargernes">Action &amp; Adventure</p>
      </div>
      
    </div>
   </>
  )
}

export default SingleCard;