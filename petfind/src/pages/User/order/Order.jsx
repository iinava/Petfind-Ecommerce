import React from 'react'
import '../buy/buy.css'
import hik from '../buy/dog.jpg'
import Usenav from '../../../components/userNav/Usenav'
export default function Order() {
    return (

        <div>
<Usenav/>
<br /><br /><br /> 




            <div className="felx">






                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={hik} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Dog name</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">285$</small></p>
                                <button type="button" class="btn btn-dark">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={hik} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Dog name</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">285$</small></p>
                                <button type="button" class="btn btn-dark">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={hik} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Dog name</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">285$</small></p>
                                <button type="button" class="btn btn-dark">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={hik} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Dog name</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">285$</small></p>
                                <button type="button" class="btn btn-dark">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>



                </div>
            )
}
