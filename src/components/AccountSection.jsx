import React from 'react'
import Account from './Account';

function AccountSection() {

    const customStyle = {
        marginTop: "20px",
        marginBottom: "5px",
        color: "#222",
        fontWeight: "300"
    }

    return (
        <section className='accounts'>
            <div className='container'>
                <div style={{ textAlign: "center" }}>
                    <h2 style={customStyle}>
                        Choose the Best Account Type for You
                    </h2>
                    <div className='row' style={{justifyContent: "center"}}>
                        
                        <Account 
                            text="Individual Accounts"
                            imgUrl="https://www.interactivebrokers.co.in/images/web/acct-type-individual.svg"
                        />
                        <Account 
                            text="Joint Accounts"
                            imgUrl="https://www.interactivebrokers.co.in/images/web/acct-type-joint.svg"
                        />
                        <Account 
                            text="Family Advisor"
                            imgUrl="https://www.interactivebrokers.co.in/images/web/acct-type-friends-family.svg"
                        />
                        <Account 
                            text="Trust Accounts"
                            imgUrl="https://www.interactivebrokers.co.in/images/web/acct-type-trust.svg"
                        />
                        <Account 
                            text="Institutional Accounts"
                            imgUrl="https://www.interactivebrokers.co.in/images/web/acct-type-institution.svg"
                        />
                        

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountSection;