import React, { useEffect, useState } from "react";


const DisplayInput =() =>{

    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [selected, setSelected] = useState("");
    

    useEffect(()=> {
        const name1 = localStorage.getItem("name");
        const lastname = localStorage.getItem("lastname");
        const email = localStorage.getItem("email");
        const phone = localStorage.getItem("phone")
        const select = localStorage.getItem("selected")

        if(name1){
            setUserName(name1)
        }
        if(lastname){
            setUserLastName(lastname)
        }
        if(email){
            setUserEmail(email)
        }
        if(phone){
            setUserPhone(phone)
        }
        if(select){
            setSelected(select)
        }
    },[]);


    return(
        <>
            <div className="flex justify-center mx-auto gap-[20px] flex-col items-center py-[20px]">
                <div>Timezone: {selected}</div>
                <div>Name: {userName}</div>
                <div>Last name: {userLastName}</div>
                <div>Email: {userEmail}</div>
                <div>Phone: {userPhone}</div>
            </div>

        </>
    )
}

export default DisplayInput;