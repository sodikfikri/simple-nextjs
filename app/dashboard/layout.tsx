import React from "react";
import styles from "../../styles/Dashboard.module.css"
// import '../../public/bootstrap/dist/css/bootstrap.css'

export default function layout({children}:{children:React.ReactNode}) {
     return (
        <div >
            <p>Header untuk Dashboard</p>
            {children}
        </div>
     )
}