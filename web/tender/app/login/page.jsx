'use client';
import {useState} from 'react';

const login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [established, setEstablished] = useState('');
    const [password, setPassword] = useState('');


    const save = (e) => {
        e.preventDefault();
        console.log(name, email, contact, pincode, city, state, country, established, password);
    };
    
    return (
        <>
            <h1>SignUp</h1>
            <h2>Please register your compeany</h2>
            <form onSubmit={save}>
                <input type="name" placeholder="Company Name" onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="contact" placeholder="Contactnumber" onChange={(e)=>setContact(e.target.value)}/>
                <h2>Address</h2>
                <input type="pincode" placeholder="pincode" onChange={(e)=>setPincode(e.target.value)}/>
                <input type="city" placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
                <input type="state" placeholder="State" onChange={(e)=>setState(e.target.value)}/>
                <input type="country" placeholder="Country" onChange={(e)=>setContact(e.target.value)}/>
                <input type="established" placeholder="Established Year" onChange={(e)=>setEstablished(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button>Register</button>
            </form>
        </>
    );
}
export default login;