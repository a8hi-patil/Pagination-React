import React, { useState } from 'react'
import { data } from './data'
import './index.css'
const App = () => {

    const [mails, setMails] = useState(data)
    const [numberOfItems, setNumberOfItems] = useState(5)
    const [start, setStart] = useState(0)
    let nummberOfPages = Math.ceil(mails.length / numberOfItems)
    let pages = [...Array(nummberOfPages).keys()]


    let end = Number(start + numberOfItems)
    console.log('start', start, end)
    let renderArray = mails.slice(start, end)

    return (
        <>
            <select onChange={(e) => { setNumberOfItems(Number(e.target.value)) }}>

                <option value={5}>{5}</option>
                <option value={10}>10</option>
                <option value={20}>20</option>

            </select>
            {renderArray.map((elm) => {
                return (
                    <p key={elm.id} >{elm.email}</p>
                )
            })}
            <span onClick={() => {
                setStart(pre => Number(pre - numberOfItems))
            }} >Prev</span>
            {
                pages.map((page) => <span className={(start / numberOfItems == page) ? "active" : 'off'} key={page} onClick={() => {
                    setStart(page * numberOfItems)
                }} >{Number(page + 1)} |</span>)
            }
            <span onClick={() => {
                setStart(pre => Number(pre + numberOfItems))
            }} >Next</span>
        </>
    )
}

export default App