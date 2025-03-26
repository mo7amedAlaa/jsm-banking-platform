import HeaderBox from '@/components/HeaderBox'

const Home = () => {
    const loggedIn = { fristName: 'mohamed' }
    return (
        <section className='home'>
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.fristName}
                        subtext='Access and mange your account and transactions efficiently.'
                    />
                </header>
            </div>
        </section>
    )
}

export default Home
