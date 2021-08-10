import Fade from 'react-reveal/Fade';


const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-10 lg:px-24 xl:px-24  text-gray-600 dark:text-gray-300 pb-24">

            <Fade left>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100  mb-8">
                <h5 className="font-bold">About</h5>
                <p>How Airbnb Works</p>
                <p>NewStore</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Lexe</p>
            </div>
            </Fade>

            <Fade left>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100 mb-8">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Diversity & Belonging</p>
                <p>Against Discrimination</p>
                <p>Accessibility</p>
                <p>Airbnb Associates</p>
                <p>Frontline Stays</p>
            </div>
            </Fade>

            <Fade left>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100 mb-8">
                <h5 className="font-bold">HOST</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Responsible hosting</p>
                <p>Resource Center</p>
            </div>
            </Fade>

            <Fade left>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100 mb-8">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Center</p>
                <p>Cancellation options</p>
                <p>Neighborhood Support</p>
                <p>Trust & Safety</p>
            </div>
            </Fade>
        </div>
    )
}

export default Footer
