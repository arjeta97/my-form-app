import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTwo = () => {
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');

    let navigate = useNavigate();

    const userNameHandler = (e) => {
        const userNameValue = e.target.value;
        setUserName(userNameValue);      
    }
    const userLastNameHandler = (e) => {
        const userLastNameValue = e.target.value;
        setUserLastName(userLastNameValue);      
    }
    const userEmailHandler = (e) => {
        const userEmailValue = e.target.value;
        setUserEmail(userEmailValue);      
    }
    const userPhoneHandler = (e) => {
        const userPhoneValue = e.target.value;
        setUserPhone(userPhoneValue);      
    }

    const handleSubmmit = (e) => {
        e.preventDefault();
        navigate("/inputs")
        localStorage.setItem("name", userName);
        localStorage.setItem("lastname", userLastName);
        localStorage.setItem("email", userEmail );
        localStorage.setItem("phone", userPhone);
    }

    return (
        <div>
            <p className="font-bold text-center md:text-[50px] text-[35px] pt-10 px-[20px] md:px-0 mb-[20px]">Add Your Personal Details</p>

            <form className="flex flex-col mx-auto max-w-[700px] justify-center gap-[20px] px-[20px] md:px-0" onSubmit={handleSubmmit}>

                <input placeholder="First name" type="text" name="name" value={userName} onChange={userNameHandler} className="border px-[10px] py-[12px] rounded-[10px]" required minLength="3" />

                <input placeholder="Last name" type="text" value={userLastName} onChange={userLastNameHandler} className="border px-[10px] py-[12px] rounded-[10px]" required minLength="3"/>

                <input  placeholder="Email" type="email" value={userEmail} onChange={userEmailHandler} className="border px-[10px] py-[12px] rounded-[10px]" required />

                <input placeholder="Phone number" type="number" value={userPhone} onChange={userPhoneHandler} className="border px-[10px] py-[12px] rounded-[10px]" required minLength="10" />


                <div className="text-[12px] bg-[#fafafa] p-[20px] rounded-[10px] ">
                    <input type="checkbox" id="check" className="border px-[10px] py-[12px] rounded-[10px]" required></input>
                    <label for="check"> By clicking the button above, you acknowledge, consent and agree to the following:
                        a) Our Privacy Policy and consent to receive notices and other communications electronically;
                        b) We take your privacy seriously. You are providing express written consent for us to share your information with up to four (4) 
                        of its and for , parties calling on behalf of, or authorized third parties on their behalf to contact you 
                        (including through automated means; e.g. autodialing, text and pre-recorded messaging) about legal services or other Mass Tort
                         related offers via telephone, mobile device (including SMS and MMS) and/or email, even if your telephone number is 
                         currently listed on any state, federal, local or corporate Do Not Call list;
                        c) Consent to be contacted is not required in order to purchase goods or services from or the that contact you.
                        You may choose to speak with an individual service provider by dialing (888) 888-8888.
                    </label>
                </div>

                <button className="rounded-[10px] py-4 px-5 bg-blu text-white uppercase font-bold max-w-[400px] w-full mx-auto">Submit Your details </button>

            </form>
        </div>
    )
}

export default FormTwo;