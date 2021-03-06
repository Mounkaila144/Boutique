import React, {useEffect, useState} from 'react';
import axios from "axios";

const DetailMateriel = () => {
    const [product, setProduct] = useState([]);
    const url=`https://127.0.0.1:8000/api/articles.json`
    const getData =async () => {
        axios
            .get(url)
            .then(
                (res) => {
                    setProduct(res.data);
                })}
    useEffect(() => {
        getData()
    }, [])

        return (
            product.map((products) => (
                    <>
                <h3>{product[1].nom}</h3>
                <h3>{product[1].description}</h3>
                <img src={require(`../../../../public/image/article/${product.file}`)}
                />
            </>
                ))
        )
};
export default DetailMateriel;
