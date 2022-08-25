import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0 0;
`;

export const ProductItem = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;

  img {
    margin-right: 15px;
    width: 165px;
    height: 100px;
    object-fit: cover;
    border-radius: 25px;
  }

  .infos {
    h1 {
      font-size: 1.2rem;
    }
    span {
      font-size: 0.9rem;
      color: #8b8b8b;
    }
  }
  .shop-infos {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
    margin-left: auto;
    .update {
      display: flex;
      align-items: center;
      .arrow {
        cursor: pointer;
        font-size: 20px;
      }
    }

    .remove {
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-weight: 600;
      color: #ff6455;
    }
  }
`;
