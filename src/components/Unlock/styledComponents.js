import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 450px;
`

export const ImageHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 200px;
`
export const LockHeading = styled.p`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 600;
  color: #e2e8f0;
`

export const LockButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  padding: 10px;
  background-color: #06b6d4;
  border-radius: 10px;
  height: 40px;
  width: 100px;
`
