/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';

export default {
  Container: styled.form`
    h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin: 0 0 2rem 0;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;

      border: 1px solid #d7d7d7;
      background: #e7e0ee;

      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: var(--text-body);
      }

      & + input {
        margin: 1rem 0 0 0;
      }
    }

    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin: 1.5rem 0 0 0;
      font-weight: 600;

      transition: all 2s ease;

      &:hover {
        filter: invert(9);
        background: var(--blue-light);
        color: var(--green);
        transition: all 2s ease;
      }
    }
  `
}