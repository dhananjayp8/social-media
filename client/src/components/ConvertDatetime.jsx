import React from "react";

const ConvertDatetime = ({ seconds, nanoseconds }) => {
  const time = seconds * 1000 + nanoseconds / 1e6;
  const date = new Date(time);

  date.setUTCHours(date.getUTCHours() + 5);
  date.setUTCMinutes(date.getUTCMinutes() + 30);

  const formatedDate = date.toLocaleDateString("en-In", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    seconds: "numeric",
    timeZoneName: "short",
  });
  return (
    <>
      <h6>{formatedDate}</h6>
    </>
  );
};

export default ConvertDatetime;
