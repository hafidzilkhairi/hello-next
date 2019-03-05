import Link from 'next/link'
const Index = () => (
    <React.Fragment>
        <Link href='/about' style={{fontSize:204}}>
            <a>About Us</a>
        </Link>
        <p>Hello Next.js</p>
    </React.Fragment>
)

export default Index