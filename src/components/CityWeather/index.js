import React from 'react'
import { Container, Row, col} from 'react-bootstrap'

function CityWeather(props) {
    return (
        <Container>
            <br/>
            {props.cityWeather.cod ===200?
            <div><p><strong>{props.cityWeather.main.temp}</strong>
            degrees out with {props.cityWeather.weather[0].description}</p>
            </div> : null    
        }
        </Container>
    )
}

export default CityWeather;
