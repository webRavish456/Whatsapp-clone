import { Box } from "@mui/system";
import { useContext } from "react";

import { AccountContext } from "./AccountProvider";

const Header=()=>
{
    const {account}=useContext(AccountContext);
    return (
        <>
             <Box>
                <img style={{width:"25px",height:'25px',marginTop:"4px"}} src={account.picture} alt='dp'/>
             </Box>
        </>
    )
}
export default Header;