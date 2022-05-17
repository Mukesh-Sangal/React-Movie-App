import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`
export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGray);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  img {
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    left: 20px;
  }
  input {
    position: absolute;
    font-size: 28px;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
    outline: none;
  }
`
