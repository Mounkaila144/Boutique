import {grey} from "@mui/material/colors";
import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {alpha, InputBase, Menu} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import MenuItem from "@mui/material/MenuItem";
import Btnderoulan from "../Btnderoulan";
import NestedList from "../BtnSidebar";
import NestedBtn from "../NestedBtn";

const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const pages = {
    "name": ["Materiel", "serie", "Film"],
    "Materiel": ["top", "cable", "clavier"],
    "serie": ["Film", "top", "new", "popular"],
    "Film": ["Serie", "top", "new", "popular"]
};


const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function HeaderDesing(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opene = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed" open={open} sx={{
                backgroundColor: grey[900],
                borderRadius: 2
            }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer"
                                onClick={handleDrawerOpen} edge="start"
                                sx={{mr: 2, ...(open && {display: 'none'}),display: {xm: 'flex', md: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{display: {xs: 'none', md: 'flex'}}}>
                        {props.logo}
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {props.btnflexsm}


                    </Box>
                        {props.search}
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    display: {xm: 'flex', md: 'none'},
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        color: "white"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    <NestedBtn name={"Menu"} link={"top"}/>
                    <NestedList name={"Film"}>
                        <NestedBtn setOpen={setOpen} name={"Populair"} link={"film/popular"}/>
                        <NestedBtn setOpen={setOpen} name={"Nouveauté"} link={"film/new"}/>
                        <NestedBtn setOpen={setOpen} name={"plus vue"} link={"film/top"}/>
                        <NestedBtn setOpen={setOpen} name={"Trier par genre"} link={"film/genrelist"}/>
                    </NestedList>
                    <NestedList name={"Serie"}>
                        <NestedBtn setOpen={setOpen} name={"Populair"} link={"serie/popular"}/>
                        <NestedBtn setOpen={setOpen} name={"Nouveauté"} link={"serie/new"}/>
                        <NestedBtn setOpen={setOpen} name={"plus vue"} link={"serie/top"}/>
                        <NestedBtn setOpen={setOpen} name={"Trier par genre"} link={"serie/genrelist"}/>
                    </NestedList>

                    <NestedList name={"Materiel"}>
                        <NestedBtn setOpen={setOpen} name={"Original"} link={"original"}/>
                        <NestedBtn setOpen={setOpen} name={"Moyenne"} link={"moyenne"}/>
                        <NestedBtn setOpen={setOpen} name={"Moins chere"} link={"moins"}/>
                    </NestedList>


                </List>
            </Drawer>

        </Box>
    );
}
