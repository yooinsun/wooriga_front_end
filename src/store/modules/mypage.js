/* 액션 타입 만들기 */
const OPEN_MODAL = "mypage/OPEN_MODAL"; //모달 창 열기
const CLOSE_MODAL = "mypage/CLOSE_MODAL"; //모달 창 닫기
const SAVE_MODAL = "mypage/SAVE_MODAL"; //프로필색깔,이름,가족관계 저장하기
const SHOWMORE = "mypage/SHOWMORE";
/* 액션 생성함수 만들기 */
// export const openMyPageModal = myid => ({ type: OPEN_MODAL, payload: myid });
export const openMyPageModal = member => ({
  type: OPEN_MODAL,
  payload: member
});
export const closeMyPageModal = () => ({ type: CLOSE_MODAL });
export const saveMypageModal = myinfo => ({
  type: SAVE_MODAL,
  payload: myinfo //myinfo={name,relation,id,color}
});
export const showMore = memberLenth => ({
  type: SHOWMORE,
  payload: memberLenth
});
/* 초기 상태 선언 */
const initialState = {
  rowsToDisplay: 2,
  visible: false,
  member: "",
  members: [
    {
      id: 1,
      name: "브루스 웨인",
      relation: "아빠",
      date: "2019-10-11",
      color: "red"
    },
    {
      id: 2,
      name: "할리 퀸",
      relation: "엄마",
      date: "2019-10-11",
      color: "blue"
    },
    {
      id: 3,
      name: "조커",
      relation: "형",
      date: "2019-10-11",
      color: "green"
    },
    {
      id: 1174430760,
      name: "데드 샷",
      relation: "나",
      date: "2019-10-11",
      color: "yellow"
    },
    {
      id: 5,
      name: "둠스데이",
      relation: "동생",
      date: "2019-10-11",
      color: "violet"
    }
  ]
};

/* 리듀서 선언 */
export default function mypage(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        visible: true,
        member: action.payload
        // myId:action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        member: null
      };
    case SAVE_MODAL:
      let myinfo = action.payload;
      return {
        ...state,
        members: state.members.map(member =>
          member.id === action.payload.id ? { ...member, ...myinfo } : member
        )

        //members: state.members.find(member => member.id === action.payload.id).map(info=>({...myinfo}))
      };
    case SHOWMORE:
      let memberLenth = action.payload;
      return {
        ...state,
        rowsToDisplay: memberLenth

        //members: state.members.find(member => member.id === action.payload.id).map(info=>({...myinfo}))
      };
    default:
      return state;
  }
}
// import { createAction, handleActions } from 'redux-actions';
// import { Map } from 'immutable';

// /* 액션 타입 만들기 */
// const OPEN_MODAL = "mypage/OPEN_MODAL"; //모달 창 열기
// const CLOSE_MODAL = "mypage/CLOSE_MODAL"; //모달 창 닫기
// const SAVE_MODAL = "mypage/SAVE_MODAL"; //프로필색깔,이름,가족관계 저장하기

// /* 액션 생성함수 만들기 */
// // export const openMyPageModal = myid => ({ type: OPEN_MODAL, payload: myid });
// export const openMyPageModal = createAction(OPEN_MODAL);
// export const closeMyPageModal = createAction(CLOSE_MODAL);
// export const saveMypageModal = createAction(SAVE_MODAL);

// /* 초기 상태 선언 */
// const initialState = {
//   visible: false,
//   members:List([Map({
//     id: 1,
//     name: "브루스 웨인",
//     relation: "아빠",
//     date: "2019-10-11",
//     color: "red"
//   }),
//   Map({
//     id: 2,
//     name: "할리 퀸",
//     relation: "엄마",
//     date: "2019-10-11",
//     color: "blue"
//   }),
//   Map({
//     id: 3,
//     name: "조커",
//     relation: "형",
//     date: "2019-10-11",
//     color: "green"
//   }),
//   Map({
//     id: 4,
//     name: "데드 샷",
//     relation: "나",
//     date: "2019-10-11",
//     color: "yellow"
//   }),
//   Map({
//     id: 5,
//     name: "둠스데이",
//     relation: "동생",
//     date: "2019-10-11",
//     color: "violet"
//   })
//   ])
// };

// /* 리듀서 선언 */
// export default handleActions({

//   [OPEN_MODAL]:(state,action) =>{
//     const members = action.payload;
//     return state.set('visible', true)
//                     .set('members', Map(members))
//   },
//   [CLOSE_MODAL]:(state,action)=>state.set('visible', false),
//   [SAVE_MODAL]:(state,action)=>{
//     const { id, value } = action.payload;
//     return state.setIn(['members', id], value);
//     // const index = state.findIndex(members => members.get('id') === action.payload.id);
//     // return state.mergeIn([index], action.payload.members);
//   }
// },initialState)
