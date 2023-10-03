
export interface States {
    States: State[];
}

export interface State{
    state: string;
}

export interface Cities{
    status: string;
    data: City[];
}

export interface City{
city: string
}

export interface ScaleProps{
    Scale:ScaleValueProps[]
}

export interface ScaleValueProps{
    description: string;
     squareColor: string;
    src:string;
}


export interface AirApiReturnData {
    status: string;
    data:   Data;
}

export interface Data {
    city:     string;
    state:    string;
    country:  string;
    location: Location;
    current:  Current;
}

export interface Current {
    pollution: Pollution;
    weather:   Weather;
}

export interface Pollution {
    ts:     Date;
    aqius:  number;
    mainus: string;
    aqicn:  number;
    maincn: string;
}

export interface Weather {
    ts: Date;
    tp: number;
    pr: number;
    hu: number;
    ws: number;
    wd: number;
    ic: string;
}

export interface Location {
    type:        string;
    coordinates: number[];
}