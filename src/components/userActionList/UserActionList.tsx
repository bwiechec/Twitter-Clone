import iconList from "../../data/actionIcons"
import './UserActionList.css'
import {StyledButton} from "../styledButton/StyledButton";
import {Link} from "react-router-dom";

const actionList = [
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Lists',
  'Bookmarks',
  // 'Verified',
  'Profile',
  'More'
];

function UserActionList() {
  return(
    <>
      <nav className={'action-list content-style'}>
        {actionList.map(action => {
          return (
            <Link className={'action-list__link content-style'} to={action} key={action}>
              <div className={'action-list__action content-style'}>
                <div>
                  {iconList[action]}
                </div>
                <div className={'action-list__action-name'}>
                  {action}
                </div>
              </div>
            </Link >
          )
        })}
        <StyledButton
          variant="contained"
          size="large"
          sx={{
            width: "100%",
            marginTop: "1rem"
          }}
        >
          Doggt
        </StyledButton>
      </nav>
    </>
  )
}

export default UserActionList;