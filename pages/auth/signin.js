import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"
import {ScaleIcon } from '@heroicons/react/outline';
export default function SignIn({ providers }) {
  // console.log('qdwuioqwdioioqdwj',providers)
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
      <img className="w-80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" alt="" />
      {/* <ScaleIcon  className="h-14 w-14 text-gray-500" /> */}
      <p className='font-xs italic'>this is not a real app, built for edu purpose only</p>
      <div className="mt-40">
      {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button 
            className="p-3 bg-blue-500 rounded-lg text-white"
            onClick={() => signIn(provider.id, {callbackUrl:'/'})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}



// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/