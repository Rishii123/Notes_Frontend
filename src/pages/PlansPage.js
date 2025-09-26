import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/PlansPage.css";

function PlansPage() {
  const navigate = useNavigate();

  const plans = [
    { id: "free", name: "Free", price: "$0", benefits: ["Up to 3 notes", "Basic access"] },
    { id: "monthly", name: "Monthly", price: "$10/mo", benefits: ["Unlimited notes", "Priority support"] },
    { id: "annual", name: "Annual", price: "$100/yr", benefits: ["Unlimited notes", "Save 20%", "Priority support"] },
  ];

  return (
    <div className="plans-container">
      <h1>Choose Your Plan</h1>
      <div className="plans-cards">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <ul>
              {plan.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <button onClick={() => navigate(`/signup/${plan.id}`)}>Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlansPage;
