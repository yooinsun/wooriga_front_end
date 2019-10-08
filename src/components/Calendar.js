import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import moment from "moment";

//dummy dataes

const today = moment();
const selected = [];
const dates = [
  {
    id: 1,
    name: "아빠",
    date: "2019-10-11",
    color: "red"
  },
  {
    id: 2,
    name: "엄마",
    date: "2019-10-11",
    color: "blue"
  },
  {
    id: 3,
    name: "형",
    date: "2019-10-11",
    color: "green"
  },
  {
    id: 4,
    name: "나",
    date: "2019-10-11",
    color: "yellow"
  },
  {
    id: 5,
    name: "동생",
    date: "2019-10-11",
    color: "pink"
  },
  {
    id: 1,
    name: "아빠",
    date: "2019-10-12",
    color: "red"
  },
  {
    id: 2,
    name: "엄마",
    date: "2019-10-12",
    color: "blue"
  },
  {
    id: 4,
    name: "나",
    date: "2019-10-13",
    color: "yellow"
  },
  {
    id: 3,
    name: "형",
    date: "2019-10-14",
    color: "green"
  },
  {
    id: 4,
    name: "나",
    date: "2019-10-14",
    color: "yellow"
  },
  {
    id: 5,
    name: "동생",
    date: "2019-10-14",
    color: "pink"
  }
];

const members = [
  {
    id: 1,
    name: "아빠",
    color: "red"
  },
  {
    id: 2,
    name: "엄마",
    color: "blue"
  },
  {
    id: 3,
    name: "형",
    color: "green"
  },
  {
    id: 4,
    name: "나",
    color: "yellow"
  }
];

//Calendar Style
const CalendarContainer = styled.div`
  width: 100vw;
  height: 60vh;
  padding-top: 5%;

  padding-left: 10%;
  padding-right: 10%;
`;
const CalendarHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;

  color: #434444;
  span {
    width: 22vw;
  }
`;

const CalendarBody = styled.div``;

const CalendarRow = styled.div`
  display: flex;
`;

const grayed = css`
  ${({ grayed }) => {
    return grayed
      ? css`
          color: gray;
        `
      : null;
  }}
`;

const CalendarBox = styled.div`
  position: relative;
  width: calc(100% / 7);

  font-size: 12pt;
  color: black;

  ${grayed}
  &:first-child {
    color: red;
    ${grayed}
  }

  &:last-child {
    color: #588dff;
    ${grayed}
  }
`;

const Text = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.select &&
    css`
      background-color: #38d9a9;
    `}
`;
const MemberContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding-top: 5px;
`;

const colorSelector = css`
  ${({ theme, color }) => {
    const selected = theme.familyColor[color];
    return css`
      background: ${selected};
    `;
  }}
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;

  ${colorSelector}
`;

//Show member box Style
const profileColor = css`
  ${({ theme, color }) => {
    const radiusColor = theme.familyColor[color];
    return css`
      border: 2px solid ${radiusColor};
    `;
  }}
`;

const MemberProfileBox = styled.div`
  position: relative;
  width: 312px;
  height: 100px;
  margin: 0 auto;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: -0.02em;

  color: #434444;
`;

const MemberProfileContainer = styled.div`
  display: flex;
`;
const MemberProfile = styled.div`
  width: 40px;
  height: 40px;

  background: gray;
  ${profileColor}
  box-sizing: border-box;
  border-radius: 20px;
  & + & {
    margin-left: 7px;
  }
`;

//button Styles
const Button = styled.button`
  position: relative;
  width: 134px;
  height: 46px;
  left: 50%;
  top: 25px;
  transform: translate(0, 50%);

  background: #eb6363;
  box-shadow: 0px 4px 10px rgba(250, 42, 42, 0.25);
  border-radius: 23px;
  border: none;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: white;
  text-align: center;
`;

function ShowMemberBox({ members }) {
  return (
    <MemberProfileBox>
      <MemberProfileContainer>
        {members.map(member => (
          <MemberProfile key={member.id} color={member.color} />
        ))}
      </MemberProfileContainer>
      <div>가족과 함께할 시간을 만들어봐요.</div>
    </MemberProfileBox>
  );
}

function CalendarGenerator({ today, selected, dates }) {
  console.log(today.format("YYYY-MM-DD"));
  const startWeek = today
    .clone()
    .startOf("month")
    .week();

  console.log(`startWeek: ${startWeek}`);
  const endWeek =
    today
      .clone()
      .endOf("month")
      .week() === 1
      ? 53
      : today
          .clone()
          .endOf("month")
          .week();
  let calendar = [];

  const test = today
    .clone()
    .endOf("month")
    .week();

  console.log(`current ${today.clone().week(startWeek)}`);
  console.log(`endOf month: ${today.clone().endOf("month")}`);
  console.log(`endWeek : ${test}`);
  console.log(`this years endweeks: ${today.clone().week(53)}`);
  let curToday = today.clone();
  for (let weight = 0; weight < 6; weight++) {
    let week = startWeek + weight;
    console.log(week);
    if (week > 53) {
      week = 2;
      console.log(week);
      curToday = today.clone().add(1, "year");
      console.log(curToday);
    }
    calendar.push(
      <CalendarRow key={week}>
        {Array(7)
          .fill(0)
          // eslint-disable-next-line no-loop-func
          .map((n, i) => {
            let current = curToday
              .clone()
              .week(week)
              .startOf("week")
              .add(n + i, "day");
            let thisDayMembers = dates.filter(
              elem => elem.date === current.format("YYYY-MM-DD")
            );

            let selCheck = selected.filter(
              elem => elem === current.format("YYYY-MM-DD")
            );
            let selKey = selCheck.length > 0 ? true : false;

            let isGrayed =
              current.format("MM") === curToday.format("MM") ? false : true;
            return (
              <CalendarBox key={i} grayed={isGrayed}>
                <Text select={selKey}>{current.format("D")}</Text>

                <MemberContainer>
                  {thisDayMembers.map(elem => (
                    <Circle key={elem.id} color={elem.color}></Circle>
                  ))}
                </MemberContainer>
              </CalendarBox>
            );
          })}
      </CalendarRow>
    );
  }
  return calendar;
}

function Calendar() {
  return (
    <Fragment>
      <CalendarContainer>
        <CalendarHead>
          <MdChevronLeft />
          <Text>{today.format("MM월")}</Text>
          <MdChevronRight />
        </CalendarHead>
        <CalendarBody>
          <CalendarRow>
            <CalendarBox>
              <Text>일</Text>
            </CalendarBox>
            <CalendarBox>
              <Text>월</Text>
            </CalendarBox>
            <CalendarBox>
              <Text>화</Text>
            </CalendarBox>
            <CalendarBox>
              <Text>수</Text>
            </CalendarBox>
            <CalendarBox>
              <Text>목</Text>
            </CalendarBox>
            <CalendarBox>
              <Text>금</Text>
            </CalendarBox>
            <CalendarBox>
              <Text>토</Text>
            </CalendarBox>
          </CalendarRow>
          <CalendarGenerator today={today} selected={selected} dates={dates} />
        </CalendarBody>
      </CalendarContainer>
      <ShowMemberBox members={members} />
      <Button>날짜 선택</Button>
    </Fragment>
  );
}

export default Calendar;
