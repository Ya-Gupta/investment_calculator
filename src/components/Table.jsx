import {calculateInvestmentResults} from "../util/investment"

export default function Table({input}){

    let res = calculateInvestmentResults(input)
console.log(res,"response")
    return(
            
        <table id="result">
  <thead>
    <tr className="center"> 
    <th>Invested Amount</th>
    <th>Duration</th>
    <th>Interest</th>
    <th>Return</th>
    </tr>
  </thead>
  {res.map((item)=>
  <tbody>
  <tr className="center">
    <td>{item.annualInvestment}</td>
    <td>{item.year}</td>
    <td>{item.interest}</td>
    <td>{item.valueEndOfYear}</td>
  </tr>
  </tbody>
    )}
  
</table>
          

    );
}