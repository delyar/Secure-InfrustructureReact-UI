import React, { useState } from "react"

export default function Main() {

    const tenantID = "asuifhapiuhdfiwuhefpqwufhaishudf";

    const [subscription, setSubscription] = useState();
    const [resourceGroup, setRG] = useState();
    const [resourceType, setType] = useState("asa");
    const [resourceName, setName] = useState();
    const [region, setRegion] = useState();

    function submitPressed() {

        console.log(tenantID, resourceGroup, subscription, resourceName, region)
    }

    return (
        <main>
            <h1 className="main--title">Resource Details</h1>
            <p className="hero--text">Secure Design Portal is a tool to help internal customers to deploy secured infrastructures like Azure Key Vault and Azure Storage Account. </p>

            <div className="form">
                <label for="fname">Tenant ID</label>
                <input disabled="disabled" type="text" id="fname" name="fname" value={tenantID} />

                <br />
                <br />

                <label for="subscription">Subscription   </label>
                <select name="subscription" onChange={(e)=>{setSubscription(e.target.value)}}>
                    <option selected disabled>Choose one</option>
                    <option value="sub1">Sub 1</option>
                    <option value="sub2">Sub 2</option>
                </select>

                <br />
                <br />

                <label for="resourceGroup">Resource group     </label>
                <select name="resourceGroup" id="jack" onChange={(e)=>{setRG(e.target.value)}}>
                    <option selected disabled>Choose one</option>
                    <option value="r1">Resource Group 1</option>
                    <option value="r2">My RG</option>
                    <option value="r3">Pretty Resource Group</option>
                </select>

                <br />
                <br />


                <label for="resourceGroup">Resource Type   </label>
                <div className="radio">
                    <label>
                        <input type="radio" value="asa" checked={resourceType === "asa"} onChange={(e)=>{setType(e.target.value)}}/>
                        Azure Storage Account
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="akv" checked={resourceType === "akv"} onChange={(e)=>{setType(e.target.value)}}/>
                        Azure Key Vault
                    </label>
                </div>

                <br />
                <br />

                <label for="rname">Resource Name</label>
                <input type="text" id="rname" name="rname" placeholder="Resource Name"  onChange={(e)=>{setName(e.target.value)}}></input>

                <br />
                <br />

                <label for="region">Region</label>
                <select name="region" id="regionSelect" onChange={(e)=>{setRegion(e.target.value)}}>
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