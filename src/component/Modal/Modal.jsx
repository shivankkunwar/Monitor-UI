import React, { useState } from 'react';
import "./Modal.css";

function Modal({toggleModal}) {
  const [email, setEmail] = useState('');
  const [uar, setUar] = useState('');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [closureFee, setClosureFee] = useState(false);

  const isFormFilled = email && uar && reason && note;

  return (
    <div className="modal">
      <div className="modal-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Close Account</h2>
          <div onClick={toggleModal}>X</div>
        </div>
        <form>
          
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{height:"4vh"}} />
          
          <div style={{margin:"1rem 0", gap:"1rem"}}>
            Want to file UAR {" "}
            <input type="radio" value="yes" checked={uar === 'yes'} onChange={() => setUar('yes')} /> Yes
            <input type="radio" value="no" checked={uar === 'no'} onChange={() => setUar('no')} /> No
          </div>
          <div style={{display:"flex",margin:"0.5rem 0",flexDirection:"column"}}>
            Reason:
            <input type="text" value={reason} onChange={e => setReason(e.target.value)} style={{height:"5vh"}} />
          </div>
          <div style={{display:"flex",margin:"0.5rem 0",flexDirection:"column"}}>
            Note:
            <input type="text" value={note} onChange={e => setNote(e.target.value)} style={{height:"7vh"}}/>
          </div>
          <div style={{display:"flex", justifyContent:"space-between" , margin:"1rem 0"}}>
            <label>
              <input type="checkbox" checked={closureFee} onChange={e => setClosureFee(e.target.checked)} /> Charge Closure Fee
            </label>
            <button type="submit" style={{borderRadius:"0.5rem",height:"7vh",width:"8vw", backgroundColor: isFormFilled ? "#4643EE" : "grey", color:"white"}}>Close Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
