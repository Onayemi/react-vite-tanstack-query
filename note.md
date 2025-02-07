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

index.tsx

```bash
import Home from './home'
import About from './about'
import Contact from './contact'
import Posts from './posts'

export { Home, About, Contact, Posts}
```

App.tsx
import {Home,About,Contact,Posts} from './pages'

## vscode extension

- code speller checker
- glean

## SEO in React.Js

npm i react-helmet-async

src/main.tsx

```bash
import { HelmetProvider } from "react-helmet-async";

<HelmetProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</HelmetProvider>
```

components/Seo.tsx

```bash
import { Helmet } from "react-helmet-async";

interface ISeoProps {
    title: string;
    description: string;
    canonical: string;
}
const Seo = ({ title, description, canonical }: ISeoProps) => {
return (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
        </Helmet>
    </>
);
};
export default Seo;
```

public/robots.txt

```bash
User-agent: *
Disallow:
Sitemap: http://yourwebsite.com/sitemap.xml
```

# Steps:

1. install plugins
2. setup react-helmet-async
3. robots.txt in public folder
4. sitemap website: https://xml-sitemaps.com
5. Google search console
