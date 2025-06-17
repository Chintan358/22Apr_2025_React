
export const Records = ({ele,cb})=>{
    return <>
        <tr>
            <td>{ele.id}</td>
            <td>{ele.date}</td>
            <td>{ele.name}</td>
            <td>{ele.debit}</td>
            <td>{ele.credit}</td>
            <td>{cb}</td>
        </tr>
    </>
}