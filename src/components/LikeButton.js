import React, { useState } from "react";

export default function LikeButton() {
  const initCase = "Like This";
  const [now, set_Button] = useState(initCase); // <- using state!

  const reset = () => {
    if (now === "Like This") set_Button("You've liked this. Click to unlike");
    else set_Button("Like This");
  };

  return (
    <div>
      <p>
        <button onClick={reset}>{now}</button>
      </p>
    </div>
  );
}
