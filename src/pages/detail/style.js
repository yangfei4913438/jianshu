import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
`;

export const DetailHeader = styled.div`
  position: relative;
  font-size: 34px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DetailUserInfo = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  line-height: 20px;
  background: #ccc;
  display: flex;
  align-items: center;
`;

export const DetailContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 20px;
  font-size: 18px;
  line-height: 25px;
  h1 {
    font-size: 35px;
    margin: 20px 0;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;
