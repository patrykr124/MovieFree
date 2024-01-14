import React from "react";
import "./AboutMovie.scss";
import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function AboutMovie({ deadline = new Date().toString() }) {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(parsedDeadline - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="aboutMovie">
      <div className="img">
        <div className="box-shadow"></div>
        <div className="text">
          <h3 className="title">
            The premiere of the new Spider-man is coming soon on MovieFree!
          </h3>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
            accusantium fuga ipsum ea in amet reprehenderit necessitatibus
            maxime corrupti provident.
          </p>
          <div className="timer">
            {Object.entries({
              Days: time / DAY,
              Hours: (time / HOUR) % 24,
              Minutes: (time / MINUTE) % 60,
              Seconds: (time / SECOND) % 60,
            }).map(([label, value]) => (
              <div key={label} className="col-4">
                <div className="box">
                  <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                  <span className="text">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMovie;
