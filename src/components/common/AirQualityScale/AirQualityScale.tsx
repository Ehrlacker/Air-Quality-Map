import './AirQualityScale.css'
import Scale from '../Arrays/AirQualityScaleArray'

const AirQualityScale = () => {
    return (
        <div className="AirQualityScale">
            <div className="AirQualityScaleValueContainer">
                {Scale.map((index) => {
                    return (
                        <div className="AirQualityScaleValue" key={index.id}>
                            <p className="AirQualitysquare"
                                style={{ backgroundColor: index.squareColor }}
                            ></p>
                            <p className="AirQualityScaleDescription">{index.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AirQualityScale

