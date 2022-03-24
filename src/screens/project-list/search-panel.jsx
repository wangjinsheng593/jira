import { useEffect, useState } from "react"

export const SearchPanel = () =>{
    const [param,setParam] = useState({
        name:'',
        personId:''
    })

    const [users,setUsers] = useState([])
    const [list,setList] = useState([])

    useEffect(()=>{
        fetch('').then(async (res)=>{
            if (res.ok) {
                setList(await res.josn())

            }

        })
    },[param])
    return <from>
        <div>
            <input type="text" value={param.name} onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })}></input>
            <select value={param.personId} onChange={evt=>setParam({
                  ...param,
                  personId:evt.target.value

            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user=><option value={user.id}> {user.name}</option>)
                }
            </select>
        </div>
    </from>

}
