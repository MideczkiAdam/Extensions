import ToggleSwitch from "./ToggleSwitch";

function ExtensionCard(){


    return(
        <div className="extensionCard">
            <div>
                <div className="icon">❤️</div>
                <div>
                    <h3>DevLens</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, praesentium.</p>
                </div>
            </div>
            <div>
                <button>Remove</button>
                <ToggleSwitch/>
            </div>
        </div>
    )
}