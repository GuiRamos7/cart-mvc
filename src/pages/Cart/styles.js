import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0 0;
  button {
    height: 50px;
  }
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

  @media (max-width: 500px) {
    .infos {
      h1 {
        font-size: 0.8rem;
      }
    }

    .shop-infos {
      p {
        font-size: 1rem;
        font-weight: bold;
      }

      .update {
        span {
          font-size: 0.6rem;
        }
      }

      .remove {
        font-size: 0.8rem;
      }
    }
  }
`;

export const CheckoutBox = styled.div`
  margin: 30px 0 0;
  border-radius: 25px;
  padding: 15px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;

  span {
    font-size: 2rem;
    font-weight: 600;
  }
`;
