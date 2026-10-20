function StatBox({value, label}){
    return(
        <div>
            <span className = " ">
                {value}
                </span>
            <span className = " ">
                 {label}
                 </span>
        </div>
    )
}

export default StatBox