import AirQualitySquare from '../../../assets/icons/AirQualityScaleSquare.png'

const AirQualityScaleArray = [
    {
        id: 1,
        description: "00 - 50 | Good",
        squareColor: "#00982B",
        src: AirQualitySquare
    },

    {
        id: 2, description: "51 - 100 | Moderate",
        squareColor: "#F8EE00",
        src: AirQualitySquare
    },

    {
        id: 3,
        description: "101 - 150 | Unhealthy for sensitive groups",
        squareColor: "#FF7A00",
        src: AirQualitySquare
    },

    {
        id: 4,
        description: "151 - 200 | Unhealthy",
        squareColor: "#FF0000",
        src: AirQualitySquare
    },

    {
        id: 5,
        description: "201 - 300 | Very Unhealthy",
        squareColor: "#FF00E5",
        src: AirQualitySquare
    },

    {
        id: 6,
        description: "301 & higher | Hazardous",
        squareColor: "#B02F2F",
        src: AirQualitySquare
    },
]

export default AirQualityScaleArray