import { convertTemp } from '../utils/temperature'

export default function WeatherWidget(props) {
  let t = props.temp
  let u = props.unit

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <p>Temperature:</p>
      <strong>{convertTemp(t, u)}</strong>
    </div>
  )
}
