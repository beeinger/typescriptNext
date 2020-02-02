import { useState } from "react";
import { createContainer } from "unstated-next";

type Type = boolean | "large" | "medium" | "small";

function useSize() {
  let [size, setSize] = useState<Type>(false);

  let changeSize = (height: number, width: number) => {
    var new_size: "large" | "medium" | "small";
    if (height - width < 0) {
      new_size = "large";
    } else if (height - width > 100 && height < 820) {
      new_size = "small";
    } else {
      new_size = "medium";
    }
    setSize(new_size);
    return size;
  };

  return { size, changeSize };
}

let Size = createContainer(useSize);
export default Size;
