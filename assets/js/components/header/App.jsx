import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import {useNavigate} from "react-router-dom";
import {alpha, InputBase, Menu} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Btnderoulan from "../Btnderoulan";
import NestedList from "../BtnSidebar";
import NestedBtn from "../NestedBtn";
import HeaderDesing from "./HederDesing";
import BtnTop from "./BtnTop";
import {useState} from "react";
import Button from '@mui/material/Button';
import {pink} from "@mui/material/colors";
import Search from "./Search";

const drawerWidth = 240;



export default function HeaderPhone() {

    let navigate = useNavigate();
    function handleClick() {
        navigate(`/react`)
    }
    return (
        <HeaderDesing
            logo={"Boutique"}
            btnflexsm={
                <>
                    <Button
                        variant="contained"
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'block',
                            backgroundColor: pink[900],
                            marginLeft: 2
                        }}
                        onClick={handleClick}

                    >
                        Menu
                    </Button>
                    <Btnderoulan
                        name={"Film"}
                        name1={"populair"} lien1={"film/popular"}
                        name2={"nouveauté"} lien2={"film/new"}
                        name3={"plus vues"} lien3={"film/top"}
                        name4={"Trier par genre"} lien4={"film/genrelist"}
                    />
                    <Btnderoulan
                        name={"Serie"}
                        name1={"populair"} lien1={"serie/popular"}
                        name2={"nouveauté"} lien2={"serie/new"}
                        name3={"plus vues"} lien3={"serie/top"}
                        name4={"Trier par genre"} lien4={"serie/genrelist"}
                    />
                    <Btnderoulan
                        name={"Materiel"}
                        name1={"original"} lien1={"materiel/original"}
                        name2={"Moyenne"} lien2={"materiel/moyenne"}
                        name3={"Moins chere"} lien3={"materiel/moins"}
                        name4={"Moins chere"} lien4={"film/genre/action"}
                    />

                </>
            }
            search={
               <Search/>
            }
            btnsidebar={
                <List>
                    <NestedBtn name={"Menu"} link={"top"}/>
                    <NestedList name={"Film"}>
                        <NestedBtn name={"Populair"} link={"film/popular"}/>
                        <NestedBtn name={"Nouveauté"} link={"film/new"}/>
                        <NestedBtn name={"plus vue"} link={"film/top"}/>
                        <NestedBtn name={"Trier par genre"} link={"film/genrelist"}/>
                    </NestedList>
                    <NestedList name={"Serie"}>
                        <NestedBtn name={"Populair"} link={"serie/popular"}/>
                        <NestedBtn name={"Nouveauté"} link={"serie/new"}/>
                        <NestedBtn name={"plus vue"} link={"serie/top"}/>
                        <NestedBtn name={"Trier par genre"} link={"serie/genrelist"}/>
                    </NestedList>

                    <NestedList name={"Materiel"}>
                        <NestedBtn name={"Original"} link={"original"}/>
                        <NestedBtn name={"Moyenne"} link={"moyenne"}/>
                        <NestedBtn name={"Moins chere"} link={"moins"}/>
                    </NestedList>


                </List>
            }

        />
    );
}
