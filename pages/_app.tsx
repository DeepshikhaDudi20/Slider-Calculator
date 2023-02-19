import '@/styles/globals.css'
import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'
import {store} from '@/store/store'

export default function App({Component, pageProps}: AppProps) {

    // Components are wrapped within redux store
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}

