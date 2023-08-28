import "./App.css";
import styled from "styled-components";
import TestPage from "./components/TestPage";
import GlobalStyle from "./components/GlobalStyle";

const Stcont = styled.div`
    display: flex;
`;

const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.borderColor};
    margin: 20px;
`;

const boxList = ["red", "blue", "green", "black"];

const getBoxName = (color) => {
    switch (color) {
        case "red":
            return "빨간 박스";
        case "green":
            return "초록박스";
        case "blue":
            return "파란박스";
        default:
            return "검정박스";
    }
};

function App() {
    return (
        // <Stcont>
        //     {/* <StBox borderColor="red">빨간박스</StBox> */}
        //     {boxList.map((box) => {
        //         return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
        //     })}
        // </Stcont>
        <>
            <GlobalStyle></GlobalStyle>
            <TestPage title="제목" contents="내용"></TestPage>
        </>
    );
}

export default App;
