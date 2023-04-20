import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Authentication/Login";

const Create = (props) => {
    const navigate = useNavigate()

     // state to hold formData
     const [newForm, setNewForm] = useState({
      name: "",
      company: "",
      symbol: "",
      description: "", 
      recommendation: "", 
      date: ""
      });

    //see if the user is authenticated first
    const { isAuthenticated } = useAuth0();
        if (!isAuthenticated) {
          return (
            <section className='createForm'>
              <div>
                  <h1>Sign In to Access JXFunds!</h1>
                  <LoginButton className="loginButton"/>
              </div>
          </section>
          );
        }
      
        // handleChange function for form
        const handleChange = (event) => {
          setNewForm({ ...newForm, [event.target.name]: event.target.value });
        };
      
        // handle submit function for form
        const handleSubmit = (event) => {
          event.preventDefault();
          props.createFund(newForm);
          setNewForm({
            name: "",
            company: "",
            symbol: "",
            description: "", 
            recommendation: "", 
            date: "",
            timezone: "",
            price: "", 
            dividends: ""
          });
          navigate("/jxfunds")
        };

    return (
      <>
        <section className='createForm'>
            <div>
                <h1>Create a Jx-Fund </h1>
            </div>
            <form onSubmit={handleSubmit}>
    
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <select value={newForm.company} name="company" onChange={handleChange} required>
          <option value="">Select a company</option>
          <option value="Fidelity">Fidelity</option>
          <option value="Charles Schwab">Charles Schwab</option>
          <option value="Vanguard">Vanguard</option>
          <option value="BlackRock">BlackRock</option>
          <option value="State Street">State Street</option>
          <option value="Invesco">Invesco</option>
          <option value="Amundi">Amundi</option>
          <option value="Northern Trust">Northern Trust</option>
          <option value="Legal & General">Legal & General</option>
          <option value="DWS Group">DWS Group</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          value={newForm.symbol}
          name="symbol"
          placeholder="Symbol"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={newForm.recommendation}
          name="recommendation"
          placeholder="Recommendation"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          value={newForm.date}
          name="date"
          onChange={handleChange}
          required
        />
       <br/>
        <input type="submit" value="Create Fund" /> 

      </form>
        
        </section>

        <div>
        <Link to='/jxfunds/chat'>
          <button className="chatdot">Chat ☎️</button>
        </Link>
      </div>
    
        </>
        )
}

export default Create
