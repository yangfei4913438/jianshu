import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 30px 15px;
`;

export const HomeLeft = styled.div`
  width: 625px;
  .imgs {
    padding-bottom: 30px;
    border-bottom: 1px solid #dcdcdc;
  }
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 5px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #969696;
    cursor: pointer;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .iconWrapper {
    font-size: 12px;
    color: #b4b4b4;
  }
  .icon {
    margin-left: 8px;
  }
`;
export const RecommentWrapper = styled.div`
  margin: 0 30px;
  width: 280px;
`;
export const RecommentItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 5px;
`;
export const WriterWrapper = styled.div`
  width: 277px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background: #a5a5a5;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;
