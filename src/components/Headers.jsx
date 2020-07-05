import React from 'react'
import { socialApple } from 'react-icons-kit/ionicons'
import Icon from 'react-icons-kit'
import { socialWindows } from 'react-icons-kit/ionicons'
import { linux } from 'react-icons-kit/fa'

export default () => (
    <section className="hero">
        <div className="bg-grid" />
        <div style={{ textAlign: 'center' }}>
            <img src="/logo192.png" height="50px" width="50px" alt="Logo" />
            <h1>A simple single line snippet manager</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="download-btn">  <Icon icon={socialApple} /> <span style={{padding:'0px 10px'}}>Download</span></button>
                <button className="download-btn"><Icon icon={socialWindows} /> <span style={{padding:'0px 10px'}}>Download</span></button>
                <button className="download-btn"> <Icon icon={linux} /> <span style={{padding:'0px 10px'}}>Download</span> </button>
            </div>
        </div>
    {/* <img src="/images/home_expand.png" height="500px" width="350"/> */}
    
    </section>
)