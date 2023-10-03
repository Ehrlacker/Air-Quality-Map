import { AirApiReturnData } from '../../../types/types'
import './AirQualityValue.css'

type AirQualityValueProps = {
    AirQuality?: AirApiReturnData;

}

const AirQualityValue = ({ AirQuality }: AirQualityValueProps) => {
    const getAQIColorClass = (aqi: number) => {
        if (aqi <= 50) return 'good';
        if (aqi <= 100) return 'moderate';
        if (aqi <= 150) return 'unhealthy-for-sensitive-groups';
        if (aqi <= 200) return 'unhealthy';
        if (aqi <= 300) return 'very-unhealthy';
        return 'hazardous';
    }

    const aqius = AirQuality?.data.current.pollution.aqius || 0;
    const colorClass = getAQIColorClass(aqius);

    return (
        <div className="AirQualityValue">
            <h1 className="City">{AirQuality?.data.city}</h1>
            <p className={`AirQuality ${colorClass}`}>{aqius}</p>
        </div>
    )
}

export default AirQualityValue