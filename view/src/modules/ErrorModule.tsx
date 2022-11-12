import { Fragment } from 'react'

const ErrorModule = () => {
    return (
        <Fragment>
            <div className='box text-center'>
                <p className='branding mb-4'>404, Lost</p>
                <i className='fa-solid fa-circle-xmark fa-6x'></i><br /><br />
                <button onClick={() => window.history.back()} className='btn mt-2 btnbox'><i className='fa-solid fa-arrow-left'></i>Go Back</button>
            </div>
        </Fragment>
    )
}

export default ErrorModule