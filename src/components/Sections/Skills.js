import React from "react";

function Skills({ language, setlanguage }) {
  return (
    <div className="skills">
      <div className="skills_left">
        <p className="skills_left-header">
          {language ? "Używam Programów" : "Works in Programms"}
        </p>
        <div className="underline"></div>
      </div>
      <div className="skills_right">
        <img src="../img/1.png" alt="" />
        <img src="../img/2.png" alt="" />
        <img src="../img/3.png" alt="" />
        <img src="../img/4.png" alt="" />
        <img src="../img/5.png" alt="" />
      </div>
    </div>
  );
}

export default Skills;
