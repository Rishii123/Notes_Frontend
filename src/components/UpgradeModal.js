import React, { useState } from "react";
import API from "../api/api";
import "./CSS/UpgradeModal.css";

function UpgradeModal({ slug, onClose, onUpgrade }) {
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    { id: "free", name: "Free", price: "$0", benefits: ["Up to 3 notes", "Basic access"], disabled: true },
    { id: "monthly", name: "Monthly", price: "$10/mo", benefits: ["Unlimited notes", "Priority support"], disabled: false },
    { id: "annual", name: "Annual", price: "$100/yr", benefits: ["Unlimited notes", "Save 20%", "Priority support"], disabled: false },
  ];

  const handleUpgrade = async () => {
    if (!selectedPlan || selectedPlan === "free") return;
    try {
      await API.post(`/tenants/${slug}/upgrade`, { plan: selectedPlan });
      onUpgrade();
      onClose();
    } catch (err) {
      alert("Error upgrading plan");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Upgrade Your Plan</h1>
        <p>Your free trial has been exhausted. Choose a plan to continue.</p>
        <div className="plans-cards">
          {plans.map((plan) => (
            <div key={plan.id} className={`plan-card ${plan.disabled ? 'disabled' : ''}`}>
              <h2>{plan.name}</h2>
              {plan.disabled && <span className="exhausted">Exhausted</span>}
              <h3>{plan.price}</h3>
              <ul>
                {plan.benefits.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              {!plan.disabled && (
                <button
                  className={selectedPlan === plan.id ? 'selected' : ''}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose'}
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleUpgrade} disabled={!selectedPlan || selectedPlan === "free"}>Upgrade</button>
        </div>
      </div>
    </div>
  );
}

export default UpgradeModal;