import React from "react";
import Menubox from "./Menubox";
import { useEffect, useState } from "react";
import menustyle from "./menupage.module.css";
function Breakfast(props) {
  const [match, setmatch] = useState(
    window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setmatch(e.matches);
      // console.log("Current width:", e.matches);
    });
  }, [match]);
  return (
    <>
      <div
        className={match ? menustyle.menudisplay : menustyle.mobilemenudisplay}
      >
        <Menubox
          onerror={props.menuboxerror}
          name="Dosa"
          price="20"
          showaddbtn={props.showaddbtn}
          addfunction={props.handleadditem}
        />
        <Menubox
          onerror={props.menuboxerror}
          name="Idly"
          price="20"
          showaddbtn={props.showaddbtn}
          addfunction={props.handleadditem}
        />
        <Menubox
          onerror={props.menuboxerror}
          name="Idly"
          price="20"
          showaddbtn={props.showaddbtn}
          addfunction={props.handleadditem}
        />
        <Menubox
          onerror={props.menuboxerror}
          name="Dosa"
          price="20"
          showaddbtn={props.showaddbtn}
          addfunction={props.handleadditem}
        />
      </div>
    </>
  );
}

export default Breakfast;
