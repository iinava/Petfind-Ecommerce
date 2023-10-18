import React from 'react'
import AAnav from '../../components/Adnav/AAnav'

export default function Aorder() {
    return (
        <div>
            <AAnav />

            <br /><br />


            <div className="dii">
                <table class="table container table-dark table-hover">
                    <thead>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">user</th>
                            <th scope="col">seller</th>
                            <th scope="col">product</th>
                            <th scope="col">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

