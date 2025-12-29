import WeatherWidget from './components/WeatherWidget'

export default function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherWidget temp={72} unit="f" />
    </div>
  )
}
