import React from "react"

export default function Main() {

    const tenantID = "asuifhapiuhdfiwuhefpqwufhaishudf";


    return (
        <main>
            <h1 className="main--title">Resource Details</h1>
            <p className="hero--text">Secure Design Portal is a tool to help internal customers to deploy secured infrastructures like Azure Key Vault and Azure Storage Account  through a self-service portal. </p>

            <ul className="main--facts">
                <li>Tenant ID:  {tenantID}</li>
                <li>Resource Group</li>
                
                <li>Region</li>

                <li>Resource Type</li>

                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={true} />
                            Azure Key Vault
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2" />
                            Azure Storage Account
                        </label>
                    </div>
                    <label>
                    Resource Name:       <input type="text" name="resource-name" />
                </label>
                </form>
            </ul>


            <button>Submit</button>

        </main>
    )
}