import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import { Upload, Icon, message, Input, Button, Typography } from "antd";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
import PropType from "prop-types";
import "./ColorPicker.css";
const { Text } = Typography;

const PaletteItem = ({ color, active, onClick }) => {
  return (
    <div
      className={`PaletteItem ${active ? "active" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};
const Palette = ({ selected }) => {
  return (
    <div className="Palette">
      <div className="colors">
        {colors.map(color => (
          <PaletteItem color={color} key={color} active={selected === color} />
        ))}
      </div>
    </div>
  );
};

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107"
];
// const uploadButton = (
//   <div>
//     <Icon type={this.state.loading ? "loading" : "plus"} />
//     <div className="ant-upload-text">Upload</div>
//   </div>
// );
// const { imageUrl } = this.state;
//////////////////////

// const MyPageModal =({ id,visible, members, onLogout, onUpdate, onClose })=> {
//     // visible 이 아닐경우엔 아무것도 보여주지 않는다
//     if(!visible) return null;

//     return (
//       <Dimmed onClick={onClose}>
//         <Viewer>

//         <ModalTemplate visible={visible}>
//           <Logout>
//             {
//               <Link to="/" onClick={onLogout}>
//                 로그아웃
//               </Link>
//             }
//           </Logout>
//           <Upload
//             name="avatar"
//             listType="picture-card"
//             className="avatar-uploader"
//             showUploadList={false}
//             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//             beforeUpload={beforeUpload}
//             onChange={this.handleChange}
//           >
//             {imageUrl ? (
//               <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
//             ) : (
//               uploadButton
//             )}
//           </Upload>
//           <Input
//             size="large"
//             placeholder="이름"
//             style={{
//               margin: "5vh 0px 2vh 0",
//               borderTop: "none",
//               borderRight: "none",
//               borderLeft: "none",
//               borderBottomColor: "black",
//               borderBottomWidth: "medium",
//               borderBottomLeftRadius: "inherit",
//               borderBottomRightRadius: "inherit"
//             }}
//           />
//           <Input
//             size="large"
//             placeholder="관계"
//             style={{
//               margin: "5vh 0px 2vh 0",
//               borderTop: "none",
//               borderRight: "none",
//               borderLeft: "none",
//               borderBottomColor: "black",
//               borderBottomWidth: "medium",
//               borderBottomLeftRadius: "inherit",
//               borderBottomRightRadius: "inherit"
//             }}
//           />
//           <Input
//             size="large"
//             placeholder="초대코드 입력"
//             style={{
//               margin: "5vh 0px 2vh 0",
//               borderTop: "none",
//               borderRight: "none",
//               borderLeft: "none",
//               borderBottomColor: "black",
//               borderBottomWidth: "medium",
//               borderBottomLeftRadius: "inherit",
//               borderBottomRightRadius: "inherit"
//             }}
//           />
//           <Input
//             size="large"
//             placeholder="KakaoID"
//             style={{
//               margin: "5vh 0px 2vh 0",
//               borderTop: "none",
//               borderRight: "none",
//               borderLeft: "none",
//               borderBottomColor: "black",
//               borderBottomWidth: "medium",
//               borderBottomLeftRadius: "inherit",
//               borderBottomRightRadius: "inherit"
//             }}
//           />
//           <ColorInfo>컬러></ColorInfo>
//           <PaletteContainer>
//             <Palette selected="#f44336" />
//           </PaletteContainer>
//         </ModalTemplate>
//         <Button onClick={onUpdate}/>
//         <Button onClick={onClose}/>
//         </Viewer>
//       </Dimmed>
//     );
//   };

// 화면을 불투명하게 해줍니다.
const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(123, 123, 123, 0.8);
  overflow: hidden;
  opacity: 0;
  transition: 0.25s linear;
  z-index: -1;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      z-index: 2;
    `}
`;

const ModalTemplate = styled.div`
  background-color: white;
  position: fixed;
  height: auto;
  height: 30rem;
  width: 20rem;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(0, 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${props =>
    props.visible &&
    css`
      transform: translate(-50%, -50%);
      z-index: 15;
    `}
`;

function MyPageModal({
  members,
  visible,
  myid,
  logged,
  onLogout,
  onSave,
  onClose
}) {
  //let name = members.find(member => member.id === myid).name;
  let relation = members.find(member => member.id === myid).relation;
  console.log("mypagemodal-----------");
  //console.log(name);
  console.log(relation);
  //console.log(members);
  console.log(visible);
  console.log(myid);
  console.log(logged);
  console.log("mypagemodal-----------");
  return (
    <ModalBackground visible={visible}>
      <ModalTemplate visible={visible}>
        <Text style={{ float: "right" }} onClick={onLogout}>
          로그아웃
        </Text>
        <br />

        <div
          style={{ borderBottom: "1px solid lightgray", fontsize: "initial" }}
        >
          <Text
            style={{
              width: "30%",
              color: "darkgray",
              fontweight: "bold"
            }}
          >
            이름
          </Text>
          <Input
            //placeholder={name}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          />
        </div>

        <div
          style={{ borderBottom: "1px solid lightgray", fontsize: "initial" }}
        >
          <Text
            style={{
              width: "30%",
              color: "darkgray",
              fontweight: "bold"
            }}
          >
            관계
          </Text>
          <Input
            placeholder={relation}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          />
        </div>
        <div
          style={{
            borderBottom: "1px solid lightgray",
            margin: "0.8rem 0",
            fontsize: "inherit"
          }}
        >
          <Text style={{ width: "30%", color: "darkgray" }}>KakaoID</Text>
          <Text
            style={{
              margin: "0 0 0 1.5rem",
              width: "70%",
              color: "darkgray",
              fontweight: "bold"
            }}
          >
            {myid}
          </Text>
        </div>
        <Text strong style={{ fontSize: "large" }}>
          컬러
        </Text>
        <br />
        <Text style={{ fontSize: "small" }}>
          자신을 표현할 색상을 골라주세요
        </Text>
        <Palette selected="#f44336" />
        <Button onClick={onSave} style={{ float: "right", fontweight: "bold" }}>
          저장
        </Button>
        <Button onClick={onClose}>취소</Button>
      </ModalTemplate>
    </ModalBackground>
  );
}
//}

MyPageModal.propTypes = {
  visible: PropType.bool,
  onClose: PropType.func,
  id: PropType.number,
  members: PropType.array,
  onLogout: PropType.func,
  onSave: PropType.func
};

export default MyPageModal;
