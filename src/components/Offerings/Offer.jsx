import React from 'react'
import './offer.css'
import { ImCross } from "react-icons/im";

const Offer = () => {
    return (
        <div className='offer'>
            <h2 className='o-h2'>Offerings</h2>

            <div className="boxes">
                <div className="ulane">
                <div className="box1">
                    <div className="upper">
                        <h6 className='ou-h6'>24/7 Access</h6>
                        <p className='ou-para'>
                            Gain exclusive access to our innovation hub round the clock for four months, providing you with the space and resources
                        </p>
                    </div>
                    <div className="bottom">
                        <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/a09c/d453/babf403bb752c39d744dc3d892330f5d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2g1UydP-fU-ThMXcvyDmjqIF1kNxIhBDKJci82ruDFT~KDxS4Lez6GhMBkn8zH4VwRbdhHO1agBVdAjaiIsNE14rU~zEgaYK7IzYdqsnCBlh6y6hgzRJWhkexEE1fm1uJM0rY1B-voGNpKPytjhNqp6yjag8ax6D37PoYJTjQ2EIcq7~rQ9RLoTKu5DiIRq9Whpvcj9OPR0ONuN0~91XPPCVlpvcc~9jmwPwqXynep5QFGHBmvylFVc6KfIFc7--FZHFbh8ZbYt9GHGle9D298bEqhn88s7Y1SqcXGetcuCPTCOd8ZkFeG3S7Aeyy~BwiJ7XZRzH3SSHQj2JAgZ0g__' alt='photo' />
                    </div>
                </div>


                <div className="box1">
                    <div className="upper1">
                        <h6 className='ou1-h6'>Expert Mentorship</h6>
                        <p className='ou1-para'>
                        Connect with former mentors and founders and domain experts who offer valuable guidance and insights curated to your start-up journey, helping you navigate challenges and seize opportunities effectively.
                        </p>
                    </div>
                    <div className="bottom">
                        <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/f70a/bcdf/468557494dd64408491dd380217a4a13?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=al6-hValx2gfUEymXTSlLTXnK5ZSHO3brKvCd3Ijrbu3JJSMfeQhXi3zpeMFFc4tQcXtR4~b6e2SuShErT-PcZKov2JbHdc9~MiWHKFHann0BF7AebYFYf-yuz-9vWdBxaDwABjhsVz~8HZR5s1TlR25IGmAIer5uWmJYYybe1cbz8bU7tbQSHVccs6obWGzhC19wFXi2q9ecm9-IdFN9K3lJGWFeqV7-ht3ZkIQ-6UKWMPGUahCRihuNtiy2zp14JKbhBOynFCHibqFMsa0mhaVVP4sHYqOQ~dxZGecTDzWdcH3loqSTZ18TlhBQBYCG~jQMO3o7vnGmIJ21qnLIA__' alt='photo' />
                    </div>
                </div>


                <div className="box1">
                    <div className="upper">
                        <h6 className='ou-h6'>Team Building</h6>
                        <p className='ou-para'>
                        Find potential partners within the cohort, building a strong team for collaborations and partnerships that can elevate your ideas
                        </p>
                    </div>
                    <div className="bottom">
                        <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/7646/a6fa/ccfa64ea38888c2b9e973169d7129462?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4nB1XsWIo5tYrOoNDFzCnUQHasSQ6qA3F62AGPGHZghmwR2gm~hfCXU1OjmKq9448xrLV2W02p3h~IkjvwT2HqIVulNNsTKtgpsuXxJ-yXN8IS7kynqKiY4rx9wxrlI2K8Y7rlRGS5ri3Mypd-FuYkhxsk15Y-MBOsET5ZPYQzfYGWRISCEQGHDE4QnjFbAgLTn4axu~CAlXwN~tL~rT~oNfE2dOzo9k1leKcj4fyzSm~PiRYZlY36nSXblCn6rjPYdLCAfUO77hBhJUkXqsijJM1DVLwd7I8TSwuQXqixiopP88RI-ZNhcQ-IAx00wjl1KDFwNEC6Jitmy5~lSxA__' alt='photo' />
                    </div>
                </div>

                </div>
                <div className="dlane">
                <div className="box1">
                    <div className="upper">
                        <h6 className='ou-h6'>Founder Ecosystem</h6>
                        <p className='ou-para'>
                        Join the ecosystem of fellow founders, creating opportunities for collaboration, knowledge sharing, and collective growth, as you learn from each other's experiences and perspectives.
                        </p>
                    </div>
                    <div className="bottom">
                        <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/cf5c/ad44/6c7e9998aae997157c877b1b61e4dbad?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBkyWamp6xnbiBKZ4-IOwSh18SByle3L6H61zCQ~fiIVyUaaNPP9RyYe2kjuu7M4Q6MiXErNdg89wwO-xF-4tSkIoHSkvM2gYSJiBchAQj34RNNwUuI5ks5z77Muxk1F2iy9PRCT1yxF24Qat9fgNGYEJcZG3Cbsdcp3cqVW1TfO9~GVMdxsGWkRb--8Ce4LQX8WMG0oIJz-ld2u2ZUtfx7r9OFGdLY-rE0OGekFnd~lz0TQPAY2dNCTDIBQTl01RdVURaPBVjzfMY7tqdB5UOFFcaWtmsitKRRcmwaZSBi5~~09ezP6BNEWgB0E9kBOZKcqUewTegPrG659fV20Kw__' alt='photo' />
                    </div>
                </div>

                <div className="box1">
                    <div className="upper">
                        <h6 className='ou-h6'>Investor Networking</h6>
                        <p className='ou-para'>
                        Engage with a diverse range of investors, from venture capitalists to angel investors, gaining insights into their investment criteria and thought processes. This interaction will help define initial metrics and refining the pitch
                        </p>
                    </div>
                    <div className="bottom">
                        <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/0421/8f72/b331390c2f97db39f42d41170fd7e96d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oee6Wwuzt149cpPFVsZAWWbGiCsDUPdlKL8Em6s2jtdWVazSwiMEHKswh9~bw5PRyxtMzuXBTZZ1FZH2EVR1-ozkmXm-ydKS8uPhp-VANtT4OOW4941F~UkjiFlsVx-nu83E-epG~l7rYCt1S7YXc2mARypBBkQkAR-PaogRfiaXHynBhQ7mUhEaqpI9U5i0jihWqMjftdfaLORnizz5w1p28N4cBIIbzUcCfqWQdwfJViOcs0Udqh4~3JOWXMznml0QGAT08l7~-5tV4EAWL9lx4J0bT0fiDAEPlm3pAGlvGIuYYGeoIAWUHT6fh-4TYJEDA9LvzFY8Du6V96TJxA__' alt='photo' />
                    </div>
                </div>

                <div className="box1">
                    <div className="upper">
                        <h6 className='ou-h6'>Access to Funding</h6>
                        <p className='ou-para'>
                        Opportunity to secure pre-seed/seed investments of up to $250,000 from the PedalStart network
                        </p>
                    </div>
                    <div className="bottom">
                        <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/ef97/3899/8e290eb524eec4a279dd1ed1a0395058?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nckJM2fgeQVCHTyHTNvF4sAjqmrhqopDhEJr2nJxokZIziFNtmkBUVuuEzwLi5JwDWiQPXtTky-njhDrGBpoHT8mpeY5bnkziGvrzX1p2B-NmxggbAW1~jorRaqvm8sxZ~nTO~rp1pAhyCigY2dLSHGzp7VhKdtbU45Q7ogsZ5TQOHR~dJZiXlvsbSnrcJTGceOzVwqE3tF9uw0R2L8t-Ur3p3tqXMh3tPEzLyrm741~z5AdNas3xQfze14-TNrQoFrsJgb9ecGa8rm~MmtVt1YmstLNfVrxxprkCvzIyjFNm0HKhrNQcJV1Nu9U5cmo0Yx1r40YOm3P70yTGl3BMA__' alt='photo' />
                    </div>
                </div>
                </div>

            </div>
            <div className="brands">
                <img className='brand-image1' src='https://s3-alpha-sig.figma.com/img/31e8/e6a9/362ab34acd035778f707f35dddecb39e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVlRK5tjXsvf5rLQmKKoF7AH6CVd0QaSho5-N133ffKfcqSsEisSp6~QYS9dJ6f4SKPFuQZiKU58KiLVJOl7D6UIlEawkxj3Zx9BivDuQcGutMTdgpmbNlOTwcxSMx4Zk~vnUFXqbyD9E0vIm~49IkZyLbplP2O2hXiGKOgienyFLRf8hyZ94MXFaoQjIZU2M2FU2Hk5VXLWbYyFgDsyXVfHCz0ig20RNple9s07vs3zubWRFGL~4D6S6Hl~r7fnPT6t6uBez9naHOu480qWvder-Lma09orZiTtM-DKIgmTE256O-7Ualo90mMQvdcWh8wo1aR5kjebioyApkLyCQ__' alt='brand1'/>
                <img className='brand-image' src='https://s3-alpha-sig.figma.com/img/1d9c/34a4/b6967f3d4fbac763630322ce60356c82?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pOKJ49s66DlQ7SSiqQHEykEA~vXalrToKr3y8c3Hij4RmjBLbpAs5UI3S6EJ9hRqrVSb43UVFBFGjGbBLDZf8ffGUXl2THJ1D9I6YiiTjft6hwxUPaID~UGWHntgtZAZEnlRIi6yDw2pmqGrYsIDimSlcE9rH3jcrwpuME2KRXNWpiNGd-BjxAjGNF~6cmsK0ptXilThH~8Yffj9pJhPeLygd8yx3UmUp0HzY131VAFReYEogmP~v81JPYFJgj2M1fdLd~4OMvdm1A5XCAIhuKfYzV4rosqlcX1ReGMjE88es2~lBKwkWSZid4IJb2O5zQKyCM8R0rzeNfn-Z9Hfcw__' alt='brand2' />
                <img className='brand-image1' src='https://s3-alpha-sig.figma.com/img/24e3/9aa0/0999495b40c633e3229a2b09d5062285?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNUpxdREhxpyxhhlcbYQKiv1du6HjX8A3MfCs9yRD-Yf6jr4FnZK7GzIV5bDwBW4aD4zPLu4Ph-YLPyDaJbQXR-N7jwUD0ShzJaSvmp25kSS9ZbGuNi4kYuIW2JazZGwuyf6wSEF38xFu7YH31thXZkonl0w~JZBFPQaIXlPOno1LNXPaVipcjcLEZMgiNU-k0-aqTO0uCH9oLtovHSU4BYd3MqvFuzZ1rPz4Yg9l4id6o39FwJ-y~Fidq0UM6DqhgKkiVb1PD9RQD10JpRKxouahHWmx~fBCDVipw5HUEDMNrxPn6B6JuMd1ozGXha5wVisReBoDYJVcUZQAXc0iQ__' alt='brand3'  />
                <img className='brand-image2' src='https://s3-alpha-sig.figma.com/img/2e3d/aad0/e91238992bceafad28f4706869bba1e9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HV5Ditvq87XMJ3pdIC0WufRKIlS~lglV-KhJYekSFotpql9Ryji8vTQuO~EwhYa~Fw1AAryeyEHVN1~SKUsj~8IEGaSGR4xSG05JTYSWexhjK3rJ1d3qXbmQGi1Sx9loHN8FV~6XoXNcln21ZdBHpIa9~UtkufkkurTWSc0u9g2o8UvgNsjZiOHRWlAM-f-ICu3pAvjdf8oWu7TaQuYeAS9vGq8NvTRgsnGSePSvaiGrCun43mUkRoT2RoP0PAYgHIXwUtyZ-iZ4aurXR-HdQiBHCDk5dkQR7h-N3utbyjQAVgUq9O-6HBiO1llUKxD0gbFnNPjKKFNpXPriO4heHg__' alt='brand4' />
                <img className='brand-image1' src='https://s3-alpha-sig.figma.com/img/97f3/5415/f0a618458fffa780c8b297b04b2a0503?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FG0QfECfRFTJoMJx49JgWdZ6xOUPcl-SNuQ~3b4Z9fWI9DXp4gi-vgR-oj8W6gvZlfHWvanNjr6Gs70dwK5BLMRK~CYlXlH4mSBsO1r5PHNjgotFtjn8i-r9FLuWEHKP78bSiXsHK3G2~wPHH0BMll3zvZ-UdpD1KCoyLCby9JdkCosR5vh4CFBiDAnmRvVJOiAqLqXLdIvERJ9U3bu~PKPt2CzcZS-5apz7H4Qd7OU9dO5~szVQsNE136xKouEVPiNqZZIanCqz2Q37DVxrm837I2T-RPs9nX5fV8tAjwBHLQCtrLaCzBjLnBLjPcTG~wSXIuBuJ~OQmhc1QX98tQ__'  alt='brand4'/>
            </div>
            <div className="selection">
                <div className="o-left">
                    <div className="o-up">
                    <h5 style={{fontSize:'3rem'}}>who  are we <br/><span style={{backgroundColor:'rgb(0,254,254)'}}>selecting?</span>    </h5>
                    </div>
                    <div className="o-bottom">
                        <div className="o-div1">
                            <ImCross/>
                            <span className='o-span'>Passionate executors</span>
                        </div>
                        <div className="o-div1">
                            <ImCross/>
                            <span className='o-span'>Domain Agnostic</span>
                        </div>
                        <div className="o-div1">
                            <ImCross/>
                            <span className='o-span' >Early Stage</span>
                        </div>
                        <div className="o-div1">
                            <ImCross/>
                            <span className='o-span'>Lorem</span>
                        </div>
                        

                    </div>
                </div>
                <div className="o-right">
                    <img className='bottomimg' src='https://s3-alpha-sig.figma.com/img/cd96/0e9c/e5430d21cb350ab20c04fc3a8831b463?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fho~VRSV5ih22VKutdLdJs~nMnUxqyczFvlDqOcjeH4ldHjswaJJtwk83BBPMaRkvHQ6z~cMpGChf6zAOLygiA5tnUD1KCXH861xIzlUgF4ckbSGPU4GINp4E-bvzFPFftc2fhlxT4aWs7ow1L7wYkcr-CdfY5f7kjn48GeaYcDbYvYWUdUzwsywJF7NdM93HlGJH2UNZUza5MAgb1ebicg9SyAGjop5-FSNO7ULDk9CraiaPS7sU3SJxKR0ivuQ3WtL8T3tpyyJyx9DvDCvc7PzoCj0FUWbSsN1paCrZeBS-JNndCv8bF8enjIzp-naVIsCnMMUaVNWkvQLNZ-dhQ__' alt='selection' />
                </div>
            </div>

            <div className="mentors">

            </div>
        </div>
    )
}

export default Offer
