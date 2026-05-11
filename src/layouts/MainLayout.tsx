import { Outlet } from "react-router";
import styled from "styled-components";
import MainHeader from "../components/layout/MainHeader.tsx";
import MainFooter from "../components/layout/MainFooter.tsx";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContainer = styled.main`
    flex: 1; // header와 footer는 고정값이지만 가운데는 가변값을 가지게함
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    // 페딩 이만큼 주는 이유 : 모바일처럼 화면이 줄어들었을 때 화면에 딱 붙지 않도록 여백을 주는 것
    padding: 40px 20px;
`;

function MainLayout() {
    return (
        <LayoutWrapper>
            <MainHeader />
            <MainContainer>
                <Outlet />
            </MainContainer>
            <MainFooter />
        </LayoutWrapper>
    );
}

export default MainLayout;
