import moment from "moment";
import randomColor from "randomcolor";
import { useEffect, useState } from "react";

function Time() {
  const [refresh, setRefresh] = useState("#3071FA");
  const [borderColor, setBorderColor] = useState("#30812F");

  useEffect(() => {
    setInterval(() => {
      setRefresh(randomColor({ luminosity: "dark" }));
      setBorderColor(randomColor({ luminosity: "light" }));
    }, 1000);
  }, []);

  return (
    <div
      className="TimeApp"
      style={{
        outline: `3px solid ${borderColor}`,
        display: "inline-block",
        // padding: "5px",
        textAlign: "center",
        width: "wrap-content",
        outlineOffset: "5px",
        borderRadius: "10px",
        minWidth: "350px",
        // backgroundColor: borderColor,
      }}
    >
      <h1
        style={{
          //   color: refresh,
          fontWeight: "bolder",
        }}
      >
        Time now:{" "}
        {new Date().toLocaleTimeString("en-IN", {
          hour12: true,
        })}
      </h1>
    </div>
  );
}

export default Time;
