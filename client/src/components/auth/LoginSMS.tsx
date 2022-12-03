import React, { useState } from "react";

function LoginSMS() {
  const [phone] = useState("");
  return (
    <form>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          className=""
          id="phone"
          value={phone}
          onChange={(e) => e.target.value}
        />
      </div>

      <button type="submit" className="" disabled={phone ? false : true }>Login</button>
    </form>
  );
}

export default LoginSMS;
