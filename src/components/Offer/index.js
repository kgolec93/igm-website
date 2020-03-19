import React from 'react'
import bgOffer from '../../assets/sections/bg-offer.jpg'
import Jumbo from '../Jumbo/Jumbo'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './style.scss'

import img01 from '../../assets/offer/01.jpg'
import img02 from '../../assets/offer/02.jpg'
import img03 from '../../assets/offer/03.JPG'
import img04 from '../../assets/offer/04.jpg'
import img05 from '../../assets/offer/05.jpg'

import pdf from '../../assets/svg/pdf.svg'

const offerItems = [
    {
        name: 'Faza Koncepcyjna',
        img: img01,
        description:
            `                                
            <ul>
                <li>
                    Opracowanie koncepcji architektonicznych wraz z analizą chłonności na potrzeby „due dilligence” nieruchomości;
                </li>
                <li>
                    Opracowanie wizualizacji fotorealistycznych oraz animacji;
                </li>
                <li>
                    Przygotowanie koncepcji wielobranżowej;
                </li>
                <li>
                    Uzgodnienie koncepcji z rzeczoznawcami BHP/Sanepid oraz p.poż.;
                </li>
            </ul>
        `
    },
    {
        name: 'Projekty budowlane',
        img: img02,
        description: `            
        <ul>
            <li>
            Opracowanie Projektu Budowlanego  w zakresie zgodnym z aktualnie obowiązującymi przepisami oraz wszelkimi wymaganymi uzgodnieniami;
            </li>
            <li>
            Uzyskanie niezbędnych pozwoleń i zgód, m.in. Pozwoleń wodno-prawnych, Decyzji Środowiskowych, uzgodnień konserwatorskich;
            </li>
            <li>
            Uzyskanie Warunków technicznych Przyłączenia do poszczególnych sieci oraz uzgodnienie rozwiązań projektowych z poszczególnymi gestorami;
            </li>
            <li>
            Złożenie Wniosku o Pozwolenie na Budowę (na podstawie pełnomocnictwa);
            </li>
            <li>
            Monitorowanie stanu rozpatrzenia wniosku o PnB;
            </li>
            <li>
            Uzyskanie potwierdzenia ostateczności decyzji o PnB;
            </li>
            <li>
            Rejestracja dziennika budowy;
            </li>
        </ul>`
    },
    {
        name: 'Projekty wykonawcze',
        img: img03,
        description: `            
        <ul>
            <li>
            Opracowanie Projektów Wykonawczych wielobranżowych;
            </li>
            <li>
            Bieżąca koordynacja i współpraca z Wykonawcą na budowie;
            </li>
            <li>
            Udział w naradach koordynacyjnych na budowie;
            </li>
            <li>
            Współpraca w zakresie optymalizacji rozwiązań projektowych i doboru rozwiązań zamiennych;
            </li>
            <li>
            Udział w odbiorach budynków;
            </li>
        </ul>`
    },
    {
        name: 'Opracowania Specjalistyczne',
        img: img04,
        description: `            
        <ul>
            <li>
            Analizy akustyczne pod kątem wymagań normatywnych lub wymagań dodatkowych (np. BREEAM);
            </li>
            <li>
            Ekspertyzy p.poż wraz z uzyskaniem odstępstwa w zakresie niezgodności z obowiązującymi przepisami;
            </li>
            <li>
            Ekspertyzy BHP/Sanepid wraz uzyskaniem odstępstwa w zakresie niezgodności z obowiązującymi przepisami;
            </li>
            <li>
            Symulacja oddymiania obiektu wraz z wytycznymi projektowymi;
            </li>
            <li>
            Analiza mykologiczna obiektów;
            </li>
            <li>
            Audyt energetyczny obiektów;
            </li>
            <li>
            Ekspertyzy konstrukcyjne obiektów;
            </li>
            <li>
            Operaty dendrologiczne i przyrodnicze;
            </li>
            <li>
            Badania zanieczyszczeń gruntu;
            </li>
        </ul>`
    },
    {
        name: 'Przedmiary i kosztorysy',
        img: img05,
        description: `
        <p>Oferujemy wykonanie opracowań komplementarnych:</p>            
        <ul>
            <li>
            Przedmiarów materiałów i robót;
            </li>
            <li>
            Kosztorysów inwestycyjnych;
            </li>
            <li>
            Specyfikacji techniczne STWiOR;
            </li>
        </ul>`
    },
]

export const index = () => {
    return (
        <div id='offerPageContainer'>
            <Jumbo
                bgImage={bgOffer}
                alt={'Oferta'}
                header={'Oferta'}
            />

            <div className="offerItemsContainer">
                <p className='offerText'>
                    W ramach naszych usług oferujemy wykonanie pełnej obsługi inwestycji w zakresie projektowania i doradztwa z podziałem na poszczególne etapy:
                </p>
                {offerItems.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <div className="imgContainer">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="textContainer">
                                <div className="headerWrapper">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="description">
                                    {ReactHtmlParser(item.description)}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <p className='offerText'>
                    Podsumowując, chcielibyśmy zachęcić Państwa do podjęcia współpracy z naszym biurem. Dotychczas nabyte doświadczenia pozwalają nam na rzetelne i odpowiedzialne podjęcie się kompleksowej obsługi w zakresie projektowania i doradztwa. Nasze inżynierskie podejście do realizowanych projektów oraz duży nacisk na analizę technicznych i prawnych aspektów we wstępnych etapach ogranicza ryzyko wystąpienia opóźnień terminów lub innych nieprzewidzianych problemów.
                </p>
                <p id='knowmore'>Chcesz dowiedzieć się więcej?</p>
                <div className="pdfButton">
                    <img src={pdf} alt="pdf" />
                    <p>Pobierz pełną ofertę w PDF!</p>
                </div>
            </div>
        </div>
    )
}

export default index
