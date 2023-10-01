import { Welcome } from '../../../types/types'
import './AirQualityValue.css'

type AirQualityValueProps = {
    AirQuality?: Welcome;
}

const AirQualityValue = ({ AirQuality }: AirQualityValueProps) => {
    return (
        <div className="AirQualityValue">
            <h1 className="City">{AirQuality?.data.city}</h1>
            <p className="AirQuality">{AirQuality?.data.current.pollution.aqius}</p>

        </div>
    )
}

export default AirQualityValue