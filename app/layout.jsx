import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metaData={
    title: "propmtopia",
    description: 'Discover and share ai prompts'
}

const RootLayout = ({children}) => {
  return (
   <html lang='en'>
    <body>
        <Provider>
        <div className='main'>
            <div className='gradient'></div>
        </div>
        <main className='app'>
            <Nav/>
            {children }
        </main>
        </Provider>
    </body>
   </html>
  )
}

export default RootLayout