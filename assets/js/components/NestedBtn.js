import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const NestedBtn = ({name, link}) => {
    let navigate = useNavigate();
    return (
        <ListItemButton
            sx={{pl: 4}}
           onClick={() => {
            navigate(`${link}`);
        }}
        >
            <ListItemIcon>
                <StarBorder/>
            </ListItemIcon>
            <ListItemText primary={name}/>
        </ListItemButton>
    )
        ;
};

export default NestedBtn;
