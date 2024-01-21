import preloader from './../../../assets/gif/preloader.gif'

const Preloader = (props) => {
    return (
        <div>
            {props.isFeching && <img src={preloader} alt="preloader" />}
        </div>
    )
}

export default Preloader