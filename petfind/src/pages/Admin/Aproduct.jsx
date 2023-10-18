import React from 'react'
import '../Admin/Admin.css'
import  patti from '../Admin/patti.jpg'
import AAnav from '../../components/Adnav/AAnav'

export default function Aproduct() {
    return (
        <div>
           <AAnav/>

            <br /><br />

            <div className="uu">
                <div class="card "style={{ width: '18rem' }}>
                    <img src={patti} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Delete</a>
                        <a href="#" class="card-link">see seller</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
