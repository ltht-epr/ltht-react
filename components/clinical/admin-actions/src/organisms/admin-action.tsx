import { FC } from 'react'
import styled from '@emotion/styled'
import Description from '../atoms/admin-action-description'
import ActionButton, { IAdminAction } from '../atoms/admin-action-button'

const StyledAdminAction = styled.div`
  display: flex;
  align-items: center;
`

const RightSection = styled.div`
  text-align: right;
`

const AdminAction: FC<IProps> = ({ adminAction, actionClickHandler }) => (
  <StyledAdminAction>
    <Description description={adminAction.task.description} />
    <RightSection>
      <ActionButton adminAction={adminAction} actionClickHandler={actionClickHandler} />
    </RightSection>
  </StyledAdminAction>
)

interface IProps {
  adminAction: IAdminAction
  actionClickHandler(adminAction: IAdminAction): void
}

export default AdminAction
