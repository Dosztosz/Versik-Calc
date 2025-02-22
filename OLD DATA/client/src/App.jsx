import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <h1>Mild Calc</h1>
        <div class="selection">
            
            <select name="lob" id="lob">
                <option value="">PO</option>
                <option value="">PROD</option>
                <option value="">CA</option>
                <option value="">HOS</option>
                <option value="">PHY</option>
                <option value="">SUR</option>
                <option value="">MED</option>
                <option value="">PA</option>
            </select>
            <select name="tables" id="tables">
                <option value="PO_Group_A_table_1">PO_Group_A_table_1</option>
                <option value="PO_Group_A_table_1">PO_Group_A_table_2</option>
                <option value="PO_Group_A_table_1">PO_Group_A_table_3</option>
            </select>
        </div>
    </div>
    <label></label>


    <table>
        <thead>
            <td>Policy Limit</td>
            <td>Limited Average Severity</td>
            <td>ALAE per Occurance</td>
            <td>ULAE per Occurrence</td>
            <td>Without Risk Load</td>
            <td>Process Risk Load</td>
            <td>Paramter Risk Load</td>
            <td>With Risk Load</td>
        </thead>
        <tr>
            <td>100</td>
            <td>12334</td>
            <td>4109</td>
            <td>1315</td>
            <td>1.00</td>
            <td>143</td>
            <td>134</td>
            <td>1.00</td>
        </tr>
        <tr>
            <td>100</td>
            <td>12334</td>
            <td>4109</td>
            <td>1315</td>
            <td>1.00</td>
            <td>143</td>
            <td>134</td>
            <td>1.00</td>
        </tr>
        <tr>
            <td>100</td>
            <td>12334</td>
            <td>4109</td>
            <td>1315</td>
            <td>1.00</td>
            <td>143</td>
            <td>134</td>
            <td>1.00</td>
        </tr>
    </table>
    </>
  )
}

export default App
