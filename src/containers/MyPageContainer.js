import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as myPageActions from "../store/modules/mypage";
import * as loginActions from "../store/modules/login";
import MyPageModal from "../components/MyPageModal";
import MyPage from "../components/MyPage";
import { bindActionCreators } from "redux";
import { Icon } from "antd";

const myInfo = {
  id: 4,
  name: "데드 샷",
  relation: "나",
  color: "yellow"
};

// function beforeUpload(file) {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     console.log("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     console.log("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// }
// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// }
// class MyPageContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       relation: "",
//       color: ""
//     };
//   }

//   handleShowModal = ({ id, name, kakaoID, colorList }) => {
//     const { MyPageActions } = this.props;
//     MyPageActions.openModal(id, name, kakaoID, colorList);
//   };

//   handleCloseModal = () => {
//     const { MyPageActions } = this.props;
//     MyPageActions.closeModal();
//   };

//   handleImgChange = info => {
//     if (info.file.status === "uploading") {
//       this.setState({ loading: true });
//       return;
//     }
//     if (info.file.status === "done") {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, imageUrl =>
//         this.setState({
//           imageUrl,
//           loading: false
//         })
//       );
//     }
//   };

//   handleSaveBtn = ({ id, name, relation, color }) => {
//     const { MyPageActions } = this.props;
//     const newMyInformation = {
//       ...userInfo,
//       name: name,
//       relation: relation,
//       color: color
//     };
//     this.handleCloseModal();
//     MyPageActions.saveMypage(newMyInformation);
//   };

//   render() {
//     const { members, myinfo, visible } = this.props;
//     return (
//       <MyPageModal
//         visible={visible}
//         onCancle={this.handleCloseModal}
//         onSave={this.handleSaveBtn}
//       />
//     );
//   }
// }

class MyPageContainer extends Component {
  handleShowModal = members => {
    const { MyPageActions } = this.props;
    MyPageActions.openMyPageModal(members);
  };
  handleCloseModal = () => {
    const { MyPageActions } = this.props;
    MyPageActions.closeMyPageModal();
  };
  handleLogout = () => {
    const { LoginActions } = this.props;
    LoginActions.onLogout();
    this.props.history.push("/login");
  };

  handleSaveModal = ({ members }) => {
    const { MyPageActions } = this.props;
    console.log(this.props);
    this.handleCloseModal();
    MyPageActions.saveMypageModal(members);
  };
  //////////////////////////////////

  handleshowMore = ({ memberlength }) => {
    console.log("제잫");
    const { MyPageActions } = this.props;
    MyPageActions.showMore(5);
    console.log("memberlenth는 : " + memberlength);
    //rowsToDisplay = 5;
  };
  //////////////////////////////////////////

  render() {
    const myid = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    const { members, visible, logged, rowsToDisplay } = this.props;
    let memberlength = members.length;

    console.log("mypagecontainer-----------");
    console.log(`id is ${myid}`);
    console.log(visible);
    console.log(members);
    console.log(memberlength);
    console.log(rowsToDisplay);
    console.log(logged);
    console.log("mypagecontainer-----------");

    return (
      <Fragment>
        <MyPage
          myid={myid}
          visible={visible}
          members={members}
          //onClickModal={this.handleShowModal(myid)}
          onShow={this.handleShowModal}
          onShowMoreBtn={this.handleshowMore}
          rowsToDisplay={rowsToDisplay}
        />
        <MyPageModal
          myid={myid}
          visible={visible}
          members={members}
          // onSave={this.handleSaveModal}
          onClose={this.handleCloseModal}
          onLogout={this.handleLogout}
          onSave={this.handleSaveModal}
          logged={logged}
        />
      </Fragment>
    );
  }
}

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//state 를 파라미터로 받아온다 . 현재 store 가 가지고 있는 상태
const mapStateToProps = ({ mypage, login }) => ({
  visible: mypage.visible,
  members: mypage.members,
  logged: login.logged,
  rowsToDisplay: mypage.rowsToDisplay
});

//액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//store의 내장 함수 dispatch를 파라미터로 받온다.
const mapDispatchToProps = dispatch => ({
  MyPageActions: bindActionCreators(myPageActions, dispatch),
  LoginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPageContainer);
