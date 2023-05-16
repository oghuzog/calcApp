import { Main } from './pages/main.ui'
import { Header } from './pages/header.ui'
import { Footer } from './pages/footer.ui'

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer footnote={'©OG All rights reserved.'} />
        </>
    )
}