/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';

export default {
  Container: styled.div`
    margin: 4rem 0 0 0;
    
    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: var(--text-body);
        font-weight: 600;
        font-size: 1.3rem;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }

      tbody{
        tr {
          box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.4);
          background: var(--shape);
          border-radius: 0.25rem;
          transition: all 0.3s ease;
        }

        tr:hover {
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.1);
          transition: all 1s ease;
        }
      }

      td {
        color: var(--text-body);
        padding: 1rem 2rem;
        border: 0;
      
        &:first-child {
          color: var(--text-title);
        }

        &.deposit {
          color: var(--green);
        }

        &.withdraw {
          color: var(--red);
        }
      }
    }
  `,

}