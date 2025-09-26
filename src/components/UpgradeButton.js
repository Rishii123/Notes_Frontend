import React, { useState } from "react";
import API from "../api/api";

function UpgradeButton({ slug }) {
  const [upgraded, setUpgraded] = useState(false);

  const handleUpgrade = async () => {
    await API.post(`/tenants/${slug}/upgrade`);
    setUpgraded(true);
    alert("Tenant upgraded to PRO plan!");
    window.location.reload();
  };

  if (upgraded) return <p>Upgraded to PRO!</p>;

  return (
    <button
      onClick={handleUpgrade}
      style={{
        margin: "10px 0",
        padding: "10px",
        background: "#FF9800",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      Upgrade to Pro
    </button>
  );
}

export default UpgradeButton;
