/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';

export default {
  Container: styled.header`
    background: var(--blue);
  `,

  Content: styled.div`
    max-width: 70%;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 250px;
    }

    button {
      font-size: 1rem;
      color: #fff;
      background: var(--blue-light);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.50rem;
      height: 3rem;

      transition: all 2s ease;

      &:hover {
        filter: contrast(9);
        background: var(--background);
        color: var(--blue-light);
        transition: all 2s ease;
      }
    }
  `,

}