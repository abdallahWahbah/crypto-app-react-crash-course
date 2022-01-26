import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Row, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

const Cryptocurrencies = ({simplified}) =>
{
    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    console.log(cryptosList);

    useEffect(()=>
    {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])

    if(isFetching) return 'Loading...'

    return(
        <React.Fragment>
            {!simplified && 
                (<div className="search-crypto">
                    <Input onChange={e => setSearchTerm(e.target.value)} placeholder="Search Cryptocurrency"/>
                </div>)
            }
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map(currency => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card 
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img className="crypto-image" alt={currency.name} src={currency.iconUrl}/>}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
}

export default Cryptocurrencies;