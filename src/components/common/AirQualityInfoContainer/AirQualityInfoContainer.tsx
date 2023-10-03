import AirQualityScale from "../AirQualityScale/AirQualityScale"
import AirQualityValue from "../AirQualityValue/AirQualityValue"
import './AirQualityInfoContainer.css'
import { AirApiReturnData } from '../../../types/types'


type AirQualityInfoContainerProps = {
    AirQuality?: AirApiReturnData;
}
const AirQualityInfoContainer = ({AirQuality}:AirQualityInfoContainerProps) => {
    return (
        <div className="AirQualityInfoContainer">
            <AirQualityValue
                AirQuality={AirQuality}
            />
            <AirQualityScale />
        </div>
    )
}

export default AirQualityInfoContainer