import React from 'react'
import Step from './Step'

function Steps() {

    return (
        <section className='steps'>
            <div className='container step-container'>
                <div className='row'>

                    <Step
                        step="1"
                        heading="Complete the Application"
                        para="It only takes a few minutes"
                    />

                    <Step
                        step="2"
                        heading="Fund Your Account"
                        para="Connect your bank or transfer an account"
                    />

                    <Step
                        step="3"
                        heading="Get Started Trading"
                        para="Take your investing to the next level"
                    />

                    <div className='step-btn-div'>
                        <button className='btn step-btn'>Open Account</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps;