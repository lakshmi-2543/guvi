import React from 'react';

function App() {
  const val = '/month';
  return (
  <div>
      <div >
      <h5>FREE</h5>
      <h1>$0 <span>{val}</span></h1>
      --------------------------------------------------
      <ul type = 'none'>
        <li> ✔ Single User</li>
        <li> ✔ 5GB Storage</li>
        <li> ✔ Unlimited Public Projects</li>
        <li> ✔ Community Access</li>
        <li> 🞬 Unlimited Private Projects</li>
        <li> 🞬 Dedicated Phone Support</li>
        <li> 🞬 Free Subdomain</li>
        <li> 🞬 Monthly Status Reports</li>
      </ul>
              <div >
                <button type="button"><b>BUTTON</b></button>
              </div>
      </div>

      <div >
        <h5 >PLUS</h5>
        <h1>$9 <span>{val}</span></h1>
        --------------------------------------------------
      <ul type = 'none' >
          <li> ✔ <b>5 Users</b></li>
          <li> ✔ 50GB Storage</li>
          <li> ✔ Unlimited Public Projects</li>
          <li> ✔ Community Access</li>
          <li> ✔ Unlimited Private Projects</li>
          <li> ✔ Dedicated Phone Support</li>
          <li> ✔ Free Subdomain</li>
          <li> 🞬 Monthly Status Reports</li>
        </ul>
          <div >
              <button type="button"><b>BUTTON</b></button>
          </div>
        </div>

        <div >
          <h5 >PRO</h5>
          <h1>$49 <span>{val}</span></h1>
          --------------------------------------------------
        <ul  type = 'none'>
          <li> ✔ <b>Unlimited Users</b></li>
          <li> ✔ 150GB Storage</li>
          <li> ✔ Unlimited Public Projects</li>
          <li> ✔ Community Access</li>
          <li> ✔ Unlimited Private Projects</li>
          <li> ✔ Dedicated Phone Support</li>
          <li> ✔ <b>Unlimited</b> Free Subdomains</li>
          <li> ✔ Monthly Status Reports</li>
        </ul>
            <div >
              <button type="button"><b>BUTTON</b></button>
            </div>
        </div>
  </div>
);
}

export default App;
