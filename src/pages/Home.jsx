import Button from "../components/Button/Button"

function Home () {
    return (
        <div className='home'>
            <p>this is the home page!</p>
            <Button rounded={true} message={'Test'}></Button>
        </div>
    )
}
 
export default Home