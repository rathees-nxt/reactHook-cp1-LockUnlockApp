import {useState} from 'react'
import {
  LockContainer,
  MainContainer,
  ImageHeadingContainer,
  Image,
  LockHeading,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(false)
  const image = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const headingText = isLock ? 'Unlocked' : 'Locked'
  const buttonText = isLock ? 'Lock' : 'Unlock'
  const buttonAlt = isLock ? 'unlock' : 'lock'
  const onClickButton = () => {
    setLock(prevUnLock => !prevUnLock)
  }
  return (
    <MainContainer>
      <LockContainer>
        <ImageHeadingContainer>
          <Image src={image} alt={buttonAlt} />
          <LockHeading>Your Device is {headingText}</LockHeading>
        </ImageHeadingContainer>
        <LockButton onClick={onClickButton} type="button">
          {buttonText}
        </LockButton>
      </LockContainer>
    </MainContainer>
  )
}

export default Unlock
