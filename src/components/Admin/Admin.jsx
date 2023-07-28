import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Nav from './Navigator/Nav'
function Admin() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4" style={{ padding: '0' }}>
                        <Sidebar />
                    </div>
                    <div className="col">
                        <Nav />
                        <div style={{fontFamily: "sans-serif", textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70%', fontSize: '30px', fontWeight: '600'}}>
                            Assalomu alaykum!
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Admin