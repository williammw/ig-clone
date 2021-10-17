// import 'tailwindcss/tailwind.css'

// entry pt for custom class
import '../styles/global.css'
import { SessionProvider } from "next-auth/react"
//https://next-auth.js.org/getting-started/upgrade-v4#sessionprovider



import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot >
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
