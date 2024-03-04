export default function OneFoto(){

  function handleOnClickBefore () {}

  function handleOnClickNext () {}

    return (
        <>
          <div className="w3-row">
            <button class="w3-container w3-third" onClick={handleOnClickBefore}>
                Before
            </button>
            <div class="w3-container w3-third" >
              <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }}/>
            </div>
            <button class="w3-container w3-third" onClick={handleOnClickNext}>
                Next
            </button>
          </div>
      </>
    )
}