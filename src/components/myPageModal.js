import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Upload, Icon, message, Input } from "antd";

const ColorInfo = styled.div`
  position: relative;
  top: 130px;
  font-size: 13px;
  text-align: left;
  padding-left: 4px;
  font-weight: bold;
`;

const PaletteContainer = styled.div`
  position: relative;
  width: 360px;
  top: 120px;
`;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class myPageModal extends Component {
  state = {
    loading: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  render() {
    ///////////////////////
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
              <PaletteItem
                color={color}
                key={color}
                active={selected === color}
              />
            ))}
          </div>
        </div>
      );
    };
    //////////////////////
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
        <Input
          size="large"
          placeholder="이름"
          style={{
            margin: "5vh 0px 2vh 0",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderBottomColor: "black",
            borderBottomWidth: "medium",
            borderBottomLeftRadius: "inherit",
            borderBottomRightRadius: "inherit"
          }}
        />
        <Input
          size="large"
          placeholder="관계"
          style={{
            margin: "5vh 0px 2vh 0",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderBottomColor: "black",
            borderBottomWidth: "medium",
            borderBottomLeftRadius: "inherit",
            borderBottomRightRadius: "inherit"
          }}
        />
        <Input
          size="large"
          placeholder="초대코드 입력"
          style={{
            margin: "5vh 0px 2vh 0",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderBottomColor: "black",
            borderBottomWidth: "medium",
            borderBottomLeftRadius: "inherit",
            borderBottomRightRadius: "inherit"
          }}
        />
        <Input
          size="large"
          placeholder="KakaoID"
          style={{
            margin: "5vh 0px 2vh 0",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderBottomColor: "black",
            borderBottomWidth: "medium",
            borderBottomLeftRadius: "inherit",
            borderBottomRightRadius: "inherit"
          }}
        />
        <ColorInfo>컬러></ColorInfo>
        <PaletteContainer>
          <Palette selected="#f44336" />
        </PaletteContainer>
      </div>
    );
  }
}

export default myPageModal;
