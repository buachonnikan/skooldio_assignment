import React from "react";
import Card from "./card";
import "../css/style.css";

const Index = () => {
  var data = {
    faculty: "คณะวิศวกรรมศาสตร์",
    branch: "สาขาวิศวกรรมทั่วไป",
    uni: "จุฬาลงกรณ์มหาวิทยาลัย",
    round: [
      { avilable: true, id: 1 },
      { avilable: true, id: 2 },
      { avilable: false, id: 3 },
      { avilable: true, id: 4 },
      { avilable: false, id: 5 }
    ],
    score: "23,453",
    min: "20,845",
    avg: "20,845",
    max: "20,845",
    partition: "blah blah blah",
    interest: "10"
  };
  return (
    <div>
      <div className="set-center">
        <Card data={data} />
      </div>
    </div>
  );
};

export default Index;
