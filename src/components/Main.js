import React from "react"

export default function Main() {

    const tenantID = "asuifhapiuhdfiwuhefpqwufhaishudf";
    const subscription = "my subscription"
    const selectedResourceGroup = "R2"

    function submitPressed() {

        console.log("delyar")
    }

    return (
        <main>
            <h1 className="main--title">Resource Details</h1>
            <p className="hero--text">Secure Design Portal is a tool to help internal customers to deploy secured infrastructures like Azure Key Vault and Azure Storage Account  through a self-service portal. </p>

            <div className="form">
                <label for="fname">Tenant ID</label>
                <input disabled="disabled" type="text" id="fname" name="fname" value={tenantID} />

                <br />
                <br />

                <label for="subscription">Subscription   </label>
                <select name="subscription">
                    <option selected disabled>Choose one</option>
                    <option value="sydney">Sub 1</option>
                    <option value="melbourne">Sub 2</option>
                </select>

                <br />
                <br />

                <label for="resourceGroup">Resource group     </label>
                <select name="resourceGroup" id="jack">
                    <option selected disabled>Choose one</option>
                    <option value="sydney">Resource Group 1</option>
                    <option value="melbourne">My RG</option>
                    <option value="cromwell">Pretty Resource Group</option>
                </select>

                <br />
                <br />


                <label for="resourceGroup">Resource Type   </label>
                <div className="radio">
                    <label>
                        <input type="radio" value="azure-storage-account" />
                        Azure Storage Account
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="akv" />
                        Azure Key Vault
                    </label>
                </div>

                <br />
                <br />

                <label for="rname">Resource Name</label>
                <input type="text" id="rname" name="rname" value="" />

                <br />
                <br />

                <label for="region">Region</label>
                <select name="region" id="regionSelect">
                    <option selected disabled>Choose one</option>
                    <option value="sydney">west us</option>
                    <option value="melbourne">east US</option>
                    <option value="cromwell">Europe</option>
                </select>

                <br />
                <br />
                <button
                    className="form--button"
                    onClick={submitPressed}
                >
                    Submit
                </button>
            </div>


        </main>
    )
}