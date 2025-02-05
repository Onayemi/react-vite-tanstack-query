# tailwindcss

npm install -D tailwindcss@3.4.1 postcss autoprefixer

npm i tailwindcss-animate

# Setup tanstack Query

npm i @tanstack/react-query axios

In App.tsx
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient();

funtion App() {
return(
<QueryClientProvider client={QueryClient}>
<Weather />
</QueryClientProvider>
)
}
export default App;

hooks/useFetchWeathe.js
import {useQuery} from '@tanstack/react-query'

export function useFetchWeather(geoData) {
const {data, error, isLoading} = useQuery({
queryKey: ["reportData", geoData],
queryFn: () => fetchWeatherByCoords(geoData)
})
}

services/api.js
import axios from 'axios'
const weatherUrl = 'https://api.openweathermap.org/data/2.5';
const currentweatherUrl = `${weatherUrl}/weather`

export const fetchWeatherByCoords = async (geoData) => {
if(!geoData?.latitude || !geoData?.longitude) return;
axios.get(currentweatherUrl, params {

})
}
