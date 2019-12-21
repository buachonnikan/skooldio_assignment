import React from "react";
import Round from "./round";

const card = ({ data }) => {
  return (
    <div className="card" id="card">
      <div className="card-content item">
        <div className="head">
          <div className="fac-logo">
            <img src="./img/engi.svg" alt="engineer logo" />
          </div>
          <div style={{ flexGrow: "8" }}>
            <div className="fac">{data.faculty}</div>
            <div className="branch">{data.branch}</div>
            <div className="uni">{data.uni}</div>
          </div>
          <div style={{ flexGrow: "1" }}>
            <img src="./img/page-1.svg" alt="heart" id="heart" />
          </div>
        </div>
        <div className="content">
          <div className="round-open">
            <div id="round">รอบที่เปิด</div>
            <div className="r">
              {data.round.map(r => (
                <Round avilable={r.avilable} key={r.id} num={r.id} />
              ))}
            </div>
          </div>
          <div className="edit-score">
            <div className="round-no">รอบที่ 4 : Admission</div>
            <button className="edit-but set-center">
              <div>แก้ไขคะแนน</div>
              <img src="./img/group-3-copy-4.svg" alt="edit" id="edit" />
            </button>
          </div>
          <div className="score">
            <div className="own">
              <div className="set-center" style={{ flexGrow: "1" }}>
                <img src="./img/page-1-copy-2.svg" alt="star" />
              </div>
              <div className="os">
                <div id="own-text">คะแนนของคุณคือ</div>
                <div id="own-score">{data.score}</div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-score side set-center" alt="min">
                <div className="ss">{data.min}</div>
                <div className="st">คะแนนต่ำสุด 60</div>
              </div>
              <div className="stat-score side  set-center" alt="avg">
                <div className="ss">{data.avg}</div>
                <div className="st">คะแนนเฉลี่ย 60</div>
              </div>
              <div className="stat-score set-center" alt="max">
                <div className="ss">{data.max}</div>
                <div className="st">คะแนนสูงสุด 60</div>
              </div>
            </div>
          </div>
        </div>
        <div className="part">
          <i className="fa fa-caret-down" id="arrow-down"></i>
          <i
            className="fa fa-caret-up"
            id="arrow-up"
            style={{ display: "none" }}
          ></i>
          ดูสัดส่วนคะแนน
        </div>
        <div id="expand" style={{ display: "none" }}>
          สัดส่วนคะแนนๆๆ
        </div>
        <div className="people">
          <div>
            <i className="fa fa-user"></i>
            {data.interest} คนที่สนใจ
          </div>
          <button className="save">
            <img src="./img/group-2.svg" alt="save" />
          </button>
        </div>
      </div>
    </div>
  );
  // <div>{data.uni}</div>;
};

export default card;
