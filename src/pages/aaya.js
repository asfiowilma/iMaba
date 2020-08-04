import React from 'react'

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import Styles from '../styles/welcome'

const pizzas = [
    "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk",
    "https://asset.kompas.com/crops/X8-o4ZjKlJYAnnLnW0aeqlSwegs=/0x0:739x493/750x500/data/photo/2020/03/24/5e79ac7be84d3.jpg",
    "https://static.toiimg.com/photo/53110049.cms",
    "https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg",
    "https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg",
    "https://i2.wp.com/www.windycitypizza.com/wp-content/uploads/sites/38/2019/09/deep-dish-pizza-san-mateo.jpg?resize=672%2C372&ssl=1",
    "https://www.recipetineats.com/wp-content/uploads/2020/05/Supreme-Pizza.jpg",
    "https://curiocity.com/edmonton/wp-content/uploads/2020/03/100.jpg"
]

export default function aaya() {
    return (
        <Styles>
            <Navbar />
            <Container style={{marginTop: "56px"}}>
                <h1 style={{fontSize: "96px"}}>HBD AAYA!</h1>
                <p className="text-center">Nih pizzanya untuk kamu ajah~ <span role="img" aria-label="love">&#128151;</span><span role="img" aria-label="love">&#128151;</span><span role="img" aria-label="love">&#128151;</span><span role="img" aria-label="love">&#128151;</span></p>
                <CardColumns style={{paddingTop: "3rem", paddingBottom:"3rem"}}>
                    {pizzas.map( (pizza, idx) => (
                        <Card key={idx} style={{padding: "10px", marginTop: "2rem", marginBottom: "0"}}>
                            <Card.Img variant="top" src={pizza} alt="Card image" style={{borderRadius: "20px"}} />
                        </Card>
                    ))}
                </CardColumns>

                <p>Habede sabi kesayangan~ <span role="img" aria-label="love">&#128151;</span><br/>
                semoga panjang umur, sehat selalu, n sukses terus yaaa<br/>
                - Litha </p>

                <p>Hbd ayaa, best sabi ever<br/> - Azhar</p>

                <p>Hepibesdee Aayaaaaaaaaaaaaaaaaa<br/>buru pulang dicariin<br/>- ican</p>

                <p>Habede aaya, debest sabi. Sukses terus yaa di pacil, sehat selalu jugaa.. Semoga semester depan lancar dan enjoy :) aamiin<span role="img" aria-label="love">❤️</span><br/>- Fina</p>

                <p>Selamat ulang tahun Aayaaaa. Terima kasih sudah menjadi Sahabat Bidang yang baik, mengayomi, enak diajak ngomong, dan pastinya selalu sayang sama Biro Media. Semoga apa yang Aaya cita-citakan di usia ini tercapai, dimudahkan urusannya, dilancarkan rezekinya, pokoknya yang terbaik dehh. Aamiin <span role="img" aria-label="love">🎊</span><span role="img" aria-label="love">🎂</span><br />- Danan</p>
            </Container>
            <Footer />
        </Styles>
    )
}
