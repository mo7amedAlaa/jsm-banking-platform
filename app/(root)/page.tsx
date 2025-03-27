import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {
        $id: "123",
        email: "user@example.com",
        userId: "user_001",
        dwollaCustomerUrl: "https://api.dwolla.com/customers/123",
        dwollaCustomerId: "123",
        firstName: "John",
        lastName: "Doe",
        address1: "123 Main St",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        dateOfBirth: "1990-01-01",
        ssn: "123-45-6789",
    };
    return (
        <section className='home'>
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName}
                        subtext='Access and mange your account and transactions efficiently.'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={0}
                        totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
        </section>
    )
}

export default Home
