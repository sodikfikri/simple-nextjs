"use client"
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function Search() {

    const [query, setQuery] = useState('')

    const onSearch = (e:any) => {
        e.preventDefault()

        const data = e.target[0].value
        setQuery(data)
    }

    return (
        <div>
            <form onSubmit={onSearch} className="w-full flex space-x-3 mt-10">
                <input type="text" className="bg-zinc-100 w-5/6 px-3" placeholder="Cari user github" />
                <button className="bg-blue-600 text-white py-2 w-1/6 px-3 rounded-md">Search</button>
            </form>
            {query && <SectionResult query={query} />}
        </div>
    )
}