
import React from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "reactstrap"
  
function App() {
    return (
        <div style={{
            display: 'block', width: 500, padding: 30
        }}>
            <h4>ReactJS table </h4>
            <Table bordered={true}>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Jenis kelamin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aisyah</td>
                        <td>18</td>
                        <td>Perempuan</td>
                    </tr>
                    <tr>
                        <td>Dea</td>
                        <td>17</td>
                        <td>Perempuan</td>
                    </tr>
                    <tr>
                        <td>Nadya</td>
                        <td>19</td>
                        <td>Perempuan</td>
                    </tr>
                </tbody>
            </Table>
        </div>
         );
        }
          
        export default App;


