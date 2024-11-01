
export default function UserInput({input,handleChange}) {
 
    return (
        <section id="user-input">

            <div className="input-group">
                <p>
                    <label htmlFor="InitialInv">Initial Investment</label>
                    <input type="number" id="InitialInv" value={input.initialInvestment} onChange={(event)=>handleChange(event.target.value,"initialInvestment")}/>
                </p>
                <p>
                    <label htmlFor="AnnualInt">Annual Interest</label>
                    <input type="number" id="AnnualInt" value={input.annualInvestment} onChange={(event)=>handleChange(event.target.value,"annualInvestment")}/>
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="ExpectedRet">Expected Return</label>
                    <input type="number" id="ExpectedRet" value={input.expectedReturn} onChange={(event)=>handleChange(event.target.value,"expectedReturn")}/>
                </p>
                <p>
                    <label htmlFor="Duration">Duration</label>
                    <input type="number" id="Duration" value={input.duration} onChange={(event)=>handleChange(event.target.value,"duration")}/>
                </p>
            </div>
        </section>
    );

}