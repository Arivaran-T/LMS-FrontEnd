import axios from "axios";
import { useState } from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  // const weeks = ["week1","week2","week3"];

  const weeks = props.weeks;
  return (
    <ul className={classes.week}>
      {weeks.map((row) => {
        return (
          <li>
            <a href={"#" + row.week}>
              <div>Week {row.week}</div>
            </a>
          </li>
        );
      })}

      <hr className={classes.line}></hr>
      <li>
        <a href="#">
          <div>Grades</div>
        </a>
      </li>
      <li>
        <a href="#">
          <div>Discussion Forum</div>
        </a>
      </li>
    </ul>
  );
};
export default Navigation;
