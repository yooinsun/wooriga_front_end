import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Layout,
  Typography,
  Card,
  Avatar,
  Icon,
  Button,
  Modal,
  Skeleton,
  List,
  Tag,
  Upload,
  message
} from "antd";
import reqwest from "reqwest";
import Headers from "./statics/HeaderLayout";
import ChosensContainer from "../containers/ChosensContainer";

//////////////////////
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
import MyPageModal from "./MyPageModal";
const { Content } = Layout;
const { Text } = Typography;

// const MemberProfileContainer = styled.div`
//   display: flex;
//   width: 90vw;
//   justify-content: center;
// `;
// const MemberProfile = styled.div`
//   width: 40px;
//   height: 40px;

//   background: gray;
//   ${profileColor}
//   box-sizing: border-box;
//   border-radius: 20px;
//   & + & {
//     margin-left: 7px;
//   }
// `;
/////////////////////////////

//class MyPage extends Component {
// constructor(props) {
//   super(props);

//   this.state = {
//     //upload
//     loading: false,

//     members: [
//       {
//         id: 1,
//         name: "브루스 웨인",
//         relation: "아빠",
//         //color:"#f44336"
//         color: "red"
//       },
//       {
//         id: 2,
//         name: "할리 퀸",
//         relation: "엄마",
//         //color: "#e91e63"
//         color: "pink"
//       },
//       {
//         id: 3,
//         name: "조커",
//         relation: "형",
//         //color: "#9c27b0"
//         color: "violet"
//       },
//       {
//         id: 4,
//         name: "데드 샷",
//         relation: "나",
//         //color: "#03a9f4"
//         color: "blue"
//       },
//       {
//         id: 5,
//         name: "둠스데이",
//         relation: "동생",
//         //color: "#ffeb3b"
//         color: "yellow"
//       }
//     ]
//   };
// }

// //modal 설정
// handleshowModal = () => {
//   this.setState({
//     visible: true
//   });
// };

// handleOk = e => {
//   console.log(e);
//   this.setState({
//     visible: false
//   });
// };

// handleCancel = e => {
//   console.log(e);
//   this.setState({
//     visible: false
//   });
// };

//myIcon

const MyIcon = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  border: 1.5px #f15f5f solid;
  border-radius: 5rem;
  text-align: center;
  float: left;
`;

//icon
const ProgressIcon = styled.div`
  position: relative;
  width: 85px;
  height: 85px;
  border-radius: 5rem;
  background: #f15f5f;
  text-align: center;
  float: left;
`;
const ProgressInnerIcon = styled.div`
  position: relative;
  width: 79px;
  height: 79px;
  border: 1.5px #ffffff solid;
  border-radius: 5rem;
  text-align: center;
  float: left;
  margin-left: 0.18rem;
  margin-top: 0.18rem;
`;

const MemeberIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: #828282;
  border-radius: 2rem;
  ${profileColor}
  float: left;
`;
//////////////////////////////////////////

// const MemeberIconBorder = styled.div`
//   ${profileColor}

//   box-sizing: border-box;
//   border-radius: 30px;
// `;

function MyPage({
  members,
  onShow,
  myid,
  visible,
  onShowMoreBtn,
  rowsToDisplay
}) {
  console.log("mypage-----------");
  console.log(visible);
  console.log(myid);
  console.log(rowsToDisplay);
  console.log("mypage-----------");

  return (
    <Layout style={{ minHeight: "100vh", background: "white" }}>
      <Headers content="내정보" />
      <ChosensContainer />
      <Content style={{ margin: "0 16px" }}>
        <br />
        {/* 내정보 */}
        <div>
          <Text strong style={{ fontSize: "large" }}>
            내 정보
          </Text>
          <Text style={{ float: "right" }} onClick={onShow}>
            설정
          </Text>
        </div>

        <Card
          style={{
            width: "100%",
            height: "18vh",
            margin: "5% 0 10% 0.1%"
          }}
        >
          <MyIcon />
          <div
            style={{
              width: "70%",
              height: "100%",
              float: "right",
              marginTop: "0.8rem"
            }}
          >
            <Tag color="#f15f5f">맏언니지롱</Tag>
            <Text strong> 유인선</Text>
            <br />
            <Text>현재 진행중인 챌린지</Text>
            <Text>3</Text>
          </div>
        </Card>

        {/* 우리 가족 */}
        <div>
          <Text strong style={{ fontSize: "large" }}>
            우리 가족
          </Text>
          <Text style={{ float: "right" }}>편집</Text>

          <List
            itemLayout="vertical"
            size="small"
            //dataSource={members}
            dataSource={members.slice(0, rowsToDisplay)}
            renderItem={member => (
              <List.Item key={member.id}>
                <Card size="small" style={{ height: "10vh" }}>
                  <MemeberIcon color={member.color} />
                  {/* 
                    <MemberProfileContainer>
                      <MemberProfile key={member.id} color={member.color} />
                    </MemberProfileContainer> */}

                  <div style={{ margin: "3% 20%" }}>
                    <Tag
                      color={member.color}
                      style={{ float: "left", borderradius: "5rem" }}
                    >
                      {member.relation}
                    </Tag>
                    <List.Item.Meta title={member.name} />
                  </div>
                </Card>
              </List.Item>
            )}
          />
          <Button
            style={{ margin: "0 45%", border: "none" }}
            onClick={onShowMoreBtn}
          >
            ∨
          </Button>
        </div>

        {/* 나의 기록 */}
        <div>
          <Text strong style={{ fontSize: "large" }}>
            나의 기록
          </Text>
          <br />
          <br />
          <ProgressIcon>
            <ProgressInnerIcon>
              <div style={{ marginTop: "0.6rem", marginLeft: "0.2rem" }}>
                <Text style={{ fontSize: "x-small", color: "white" }}>
                  달성률
                </Text>
                <Text strong style={{ fontSize: "large", color: "white" }}>
                  80.8%
                </Text>
              </div>
            </ProgressInnerIcon>
          </ProgressIcon>
          <div style={{ marginLeft: "8rem", marginTop: "1rem" }}>
            <Text>총 10개 참가</Text>
            <br />
            <Text>성공</Text>
            <Text style={{ color: "#9FC93C", margin: "0 1rem" }}>5</Text>
            <Text>실패</Text>
            <Text style={{ color: "#F15F5F", margin: "0 1rem" }}>5</Text>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default MyPage;

MyPage.propTypes = {
  members: PropTypes.array,
  // onSaveModal: PropTypes.func,
  onShow: PropTypes.func,
  onShowMoreBtn: PropTypes.func
};
