import * as React from 'react';
import List from '@mui/material/List';
import {useNavigate} from "react-router-dom";
import Btnderoulan from "../Btnderoulan";
import NestedList from "../BtnSidebar";
import NestedBtn from "../NestedBtn";
import HeaderDesing from "./HederDesing";
import Button from '@mui/material/Button';
import {pink} from "@mui/material/colors";
import {useIsAuthenticated, useSignOut} from 'react-auth-kit'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const drawerWidth = 240;


export default function HeaderPhone() {
    const signOut = useSignOut()
    const auth = useIsAuthenticated()

    let navigate = useNavigate();

    function handleClick() {
        navigate(`Menu`)
        window.location.reload()
    }

    return (<HeaderDesing
        logo={"ALL-CINE"}
        btnflexsm={<>
            <Button
                variant="contained"
                sx={{
                    my: 2, color: 'white', display: 'block', backgroundColor: pink[900], marginLeft: 2
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
            <Button
                variant="contained"
                sx={{
                    my: 2, color: 'white', display: 'block', backgroundColor: pink[900], marginLeft: 2
                }}
                onClick={() => navigate(`/react/menu`)}

            >
                auth
            </Button>

        </>}
        search={auth() ?

            <>
                <Button
                    variant="contained"
                    sx={{
                        my: 2, color: 'white', display: 'block', backgroundColor: pink[900], marginLeft: 2
                    }}
                    onClick={() => signOut()}

                >
                    Deconnecter
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        my: 2, color: 'white', display: 'block', backgroundColor: pink[900], marginLeft: 2
                    }}
                    onClick={() => navigate(`/react/panier`)}

                >
                    <ShoppingCartIcon />
                </Button>
            </> : <>
                <Button
                    variant="contained"
                    sx={{
                        my: 2, color: 'white', display: 'block', backgroundColor: pink[900], marginLeft: 2
                    }}
                    onClick={handleClick}

                >
                    Inscription
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        my: 2, color: 'white', display: 'block', backgroundColor: pink[900], marginLeft: 2
                    }}
                    onClick={() => navigate(`/react/login`)}

                >
                    Connexion
                </Button>

            </>}

    />);
}
