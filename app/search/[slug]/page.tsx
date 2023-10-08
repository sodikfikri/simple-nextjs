import React, { Suspense } from "react";
import RepoList from "./sectionRepos";

async function getDataUsers(params:string) {
    const res = await fetch(`https://api.github.com/users/${params}`)

    return res.json()
}

export default async function DetailSearch({params}:{params:{slug:string}}) {

    const dataUsers = await getDataUsers(params.slug)

    return (
        <div>
            <p style={{marginTop: "30px"}}> Detail User: {params.slug}</p>
            <div>
                {JSON.stringify(dataUsers)}
            </div>

            <div style={{marginTop:"10px"}}>
                <Suspense fallback={<div>Please wait for a minute ...</div>}>
                    <RepoList slug={params.slug} />
                </Suspense>
            </div>
            
        </div>
    )
}