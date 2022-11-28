import React, { useEffect, useState } from "react"

export default function Main() {

    const tenantID = "asuifhapiuhdfiwuhefpqwufhaishudf";

    const [subscription, setSubscription] = useState();
    const [resourceGroup, setRG] = useState();
    const [resourceType, setType] = useState("asa");
    const [resourceName, setName] = useState();
    const [region, setRegion] = useState();
    const [subscriptionNames, setSubscriptions] = useState([]);

    function submitPressed() {

        console.log(tenantID, resourceGroup, subscription, resourceName, region)
    }

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((data) => data.json())
            .then((val) => setSubscriptions(val["results"]))
    }, [])

    console.log(subscriptionNames, "subs")


    // console.log(values, "values")

    return (
        <main>
            <h1 className="main--title">Resource Details</h1>
            <p className="hero--text">Secure Design Portal is a tool to help internal customers to deploy secured infrastructures like Azure Key Vault and Azure Storage Account. </p>

            <div className="form">
                <label htmlFor="fname">Tenant ID</label>
                <input disabled="disabled" type="text" id="fname" name="fname" value={tenantID} />
                <br />
                <br />


                <label htmlFor="subscription">Subscription   </label>
                <select name="subscription" onChange={(e) => { setSubscription(e.target.value) }}>
                    <option value="DEFAULT" disabled>Choose one</option>
                    {
                        subscriptionNames.map((opts, i) => <option key={i} value={opts.name}>{opts.name}</option>)
                    }
                </select>
                <br />
                <br />


                <label htmlFor="resourceGroup">Resource group     </label>
                <select name="resourceGroup" id="jack" onChange={(e) => { setRG(e.target.value) }}>
                    <option value="DEFAULT" disabled>Choose one</option>
                    <option value="r1">Resource Group 1</option>
                    <option value="r2">My RG</option>
                    <option value="r3">Pretty Resource Group</option>
                </select>

                <br />
                <br />


                <label htmlFor="resourceGroup">Resource Type   </label>
                <div className="radio">
                    <label>
                        <input type="radio" value="asa" checked={resourceType === "asa"} onChange={(e) => { setType(e.target.value) }} />
                        Azure Storage Account
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="akv" checked={resourceType === "akv"} onChange={(e) => { setType(e.target.value) }} />
                        Azure Key Vault
                    </label>
                </div>

                <br />
                <br />

                <label htmlFor="rname">Resource Name</label>
                <input type="text" id="rname" name="rname" placeholder="Resource Name" onChange={(e) => { setName(e.target.value) }}></input>

                <br />
                <br />

                <label htmlFor="region">Region</label>
                <select name="region" id="regionSelect" onChange={(e) => { setRegion(e.target.value) }}>
                    <option value="DEFAULT" disabled>Choose one</option>
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