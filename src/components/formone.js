import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormOne = () => {

    const [selected, setSelected] = useState("");

    let navigate = useNavigate();

    const handleSubmmit = (e) => {
        e.preventDefault();
        navigate("/form-two");
        localStorage.setItem("selected", selected)
    }


    return (
        <div>
            <p className="font-bold text-center md:text-[55px] text-[35px] pt-10 px-[20px] md:px-0">What Is The Best Time To Reach You?</p>
            <form className="flex flex-col gap-[20px] px-[20px] md:px-0 mx-auto max-w-[400px] pt-[40px]" onSubmit={handleSubmmit}>
                <select className="border py-4 rounded-[10px] px-2" required value={selected} onChange={(e) => setSelected(e.target.value)}>
                    <option value="" disabled>Choose Your Time</option>
                    <option value="8 AM CST">8 AM CST</option>
                    <option value="9 AM CS">9 AM CST</option>
                    <option value="10 AM CST">10 AM CST</option>
                    <option value="11 AM CST">11 AM CST</option>
                    <option value="12 PM CS">12 PM CST</option>
                    <option value="1 PM CST">1 PM CST</option>
                    <option value="2 PM CST">2 PM CST</option>
                    <option value="3 PM CST">3 PM CST</option>
                    <option value="4 PM CST">4 PM CST</option>
                    <option value="5 PM CST">5 PM CST</option>
                </select>
                <p className="text-center">(All times are in CST)</p>
                <button className="py-4 px-5 bg-blu text-white uppercase font-bold rounded-[10px]">
                    Continue &#62;
                </button>
            </form>
        </div>
    )
}

export default FormOne;