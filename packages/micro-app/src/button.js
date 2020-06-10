import React from 'react';

export default function Button({onClick, label}) {
  return <button onClick={onClick}>{label || "Default label"}</button>
}
