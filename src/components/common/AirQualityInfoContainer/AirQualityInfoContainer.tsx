

import AirQualityScale from "../AirQualityScale/AirQualityScale"
import AirQualityValue from "../AirQualityValue/AirQualityValue"
import AirQualityDescription from "../AirQualityDescription/AirQualityDescription"
import './AirQualityInfoContainer.css'
import { Welcome } from '../../../types/types'


type AirQualityInfoContainerProps = {
    AirQuality?: Welcome;
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