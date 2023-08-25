import React from "react";

function Child({ age, main, children }) {
    return <div>Child</div>;
}

// 디폴트 값 설정 방법
Child.defaultProps = {
    age: "기본나이",
};

export default Child;
