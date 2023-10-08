async function getDataRepos(params:string) {
    const res = await fetch(`https://api.github.com/users/${params}/repos`)

    return res.json()
}

const RepoList = async ({slug}:any) => {

    const dataRepos = await getDataRepos(slug)

    return <>
        <p style={{marginTop: "30px"}}>List Repository</p>
        <div>
            {JSON.stringify(dataRepos)}
        </div>
    </>
}

export default RepoList