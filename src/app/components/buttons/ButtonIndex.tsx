import DashButDark from "./dashboard/DashbutDark"
import SpeakWithUs from "./speakwithus/SpeakWithUs"


function ButtonIndex() {

    return (
        <div className="flex flex-row space-x-2">
            <DashButDark />
            <SpeakWithUs />
        </div>
    )
          
  }
  
  export default ButtonIndex