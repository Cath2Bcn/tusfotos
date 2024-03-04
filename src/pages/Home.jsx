import "w3-css/w3.css";

export default function Home() {

    function handleOnClick() {
      // validating criteria
    }

    return (
        <>
            <div class="w3-content">
                <br/> <br/> <br/>
                <h1 class="w3-center w3-text-grey">This is home</h1>
                <h1 class="w3-center w3-text-grey">to specify localization of fotos</h1>
                <h1 class="w3-center w3-text-grey">and selection criterias</h1>
                <br/> <br/> <br/> <br/> <br/>
                <button class="w3-right" onClick={handleOnClick}>
                    Continue
                </button>
            </div>
        </>
    );
} 